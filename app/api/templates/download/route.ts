import fs from "fs"
import path from "path"
import type { NextRequest } from "next/server"
import JSZip from "jszip"

// 兼容没有类型声明的情况
// eslint-disable-next-line @typescript-eslint/no-var-requires
// const JSZip = require("jszip") as typeof import("jszip")

export const runtime = "nodejs"

interface DownloadBody {
  files?: string[]
}

const templatesDir = path.join(process.cwd(), "public", "templates")

function isSafeFileName(name: string) {
  // 防止目录穿越，只允许纯文件名
  return !name.includes("/") && !name.includes("\\") && !name.includes("..")
}

export async function POST(req: NextRequest) {
  let body: DownloadBody

  try {
    body = await req.json()
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    })
  }

  const files = body.files?.filter((name) => typeof name === "string") ?? []

  if (!files.length) {
    return new Response(JSON.stringify({ error: "No files specified" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    })
  }

  // 过滤非法文件名
  const safeFiles = files.filter(isSafeFileName)
  if (!safeFiles.length) {
    return new Response(JSON.stringify({ error: "No valid files" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    })
  }

  const zip = new JSZip()

  for (const name of safeFiles) {
    const filePath = path.join(templatesDir, name)
    try {
      const buffer = await fs.promises.readFile(filePath)
      zip.file(name, buffer)
    } catch {
      // 某个文件不存在或读取失败时跳过
      continue
    }
  }

  const fileEntries = Object.keys(zip.files)
  if (fileEntries.length === 0) {
    return new Response(JSON.stringify({ error: "No existing files" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    })
  }

  const zipBuffer = await zip.generateAsync({
    type: "nodebuffer",
    compression: "DEFLATE",
    // 降低压缩等级，减少 CPU 时间，提升冷启动环境下的稳定性
    compressionOptions: { level: 3 },
  })

  const now = new Date()
  const yyyy = now.getFullYear()
  const mm = String(now.getMonth() + 1).padStart(2, "0")
  const dd = String(now.getDate()).padStart(2, "0")
  const fileName = `${yyyy}-${mm}-${dd}-bloomnote.zip`

  return new Response(zipBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="${encodeURIComponent(fileName)}"`,
      "Content-Length": String(zipBuffer.length),
    },
  })
}


