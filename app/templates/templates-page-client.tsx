"use client"

import { useMemo, useState } from "react"
import { CheckSquare, Download, MinusSquare, Square } from "lucide-react"

interface TemplateFile {
  name: string
  url: string
}

interface TemplatesPageClientProps {
  files: TemplateFile[]
}

export default function TemplatesPageClient({ files }: TemplatesPageClientProps) {
  const [selected, setSelected] = useState<Record<string, boolean>>({})
  const [downloading, setDownloading] = useState(false)

  const allSelected = useMemo(
    () => files.length > 0 && files.every((f) => selected[f.name]),
    [files, selected],
  )

  const anySelected = useMemo(
    () => files.some((f) => selected[f.name]),
    [files, selected],
  )

  const toggleFile = (name: string) => {
    setSelected((prev) => ({ ...prev, [name]: !prev[name] }))
  }

  const handleSelectAll = () => {
    const next: Record<string, boolean> = {}
    files.forEach((f) => {
      next[f.name] = true
    })
    setSelected(next)
  }

  const handleClear = () => {
    setSelected({})
  }

  const handleInvert = () => {
    const next: Record<string, boolean> = {}
    files.forEach((f) => {
      next[f.name] = !selected[f.name]
    })
    setSelected(next)
  }

  const downloadSelected = async () => {
    const selectedFiles = files.filter((f) => selected[f.name])
    if (selectedFiles.length === 0) {
      return
    }

    // 多选时通过后端打包为 zip，一次性下载，文件名为 日期-bloomnote.zip
    const fileNames = selectedFiles.map((f) => f.name)

    // 带简单重试的打包请求，缓解部署环境下偶发的网络/冷启动失败
    const fetchZipWithRetry = async (retries = 4): Promise<Blob> => {
      let lastError: unknown
      for (let attempt = 0; attempt <= retries; attempt++) {
        try {
          const res = await fetch("/api/templates/download", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ files: fileNames }),
            cache: "no-store",
          })

          if (!res.ok) {
            throw new Error(`下载失败（状态码 ${res.status}）`)
          }

          return await res.blob()
        } catch (error) {
          lastError = error
          // 最后一次也失败，就直接抛出
          if (attempt === retries) {
            throw error
          }
          // 简单退避等待后重试：1s, 2s ...
          const delay = 1000 * (attempt + 1)
          await new Promise((resolve) => setTimeout(resolve, delay))
        }
      }
      // 理论上不会走到这里
      throw lastError ?? new Error("未知错误")
    }

    try {
      setDownloading(true)

      const blob = await fetchZipWithRetry()
      const url = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      // 文件名由服务端 Content-Disposition 控制，这里只是兜底
      const now = new Date()
      const yyyy = now.getFullYear()
      const mm = String(now.getMonth() + 1).padStart(2, "0")
      const dd = String(now.getDate()).padStart(2, "0")
      const fallbackName = `${yyyy}-${mm}-${dd}-bloomnote.zip`

      link.href = url
      link.download = fallbackName
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error(error)
      alert("打包或下载失败，请稍后重试。")
    } finally {
      setDownloading(false)
    }
  }

  if (files.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-gray-200 bg-white/70 px-6 py-10 text-center">
        <p className="text-gray-500 text-sm">
          暂时没有可用模板，请稍后再来～
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 rounded-2xl border border-gray-100 bg-white/80 px-4 py-3 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <button
              type="button"
              disabled={downloading}
              onClick={allSelected ? handleClear : handleSelectAll}
              className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:border-theme/50 hover:text-theme disabled:text-gray-400 disabled:border-gray-200 disabled:cursor-not-allowed transition-colors"
            >
              {allSelected ? (
                <CheckSquare className="h-3.5 w-3.5" />
              ) : (
                <Square className="h-3.5 w-3.5" />
              )}
              {allSelected ? "取消全选" : "全选"}
            </button>
            <button
              type="button"
              disabled={downloading}
              onClick={handleInvert}
              className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:border-theme/50 hover:text-theme disabled:text-gray-400 disabled:border-gray-200 disabled:cursor-not-allowed transition-colors"
            >
              <MinusSquare className="h-3.5 w-3.5" />
              反选
            </button>
          </div>
          <button
            type="button"
            disabled={!anySelected || downloading}
            onClick={downloadSelected}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-theme px-4 py-2 text-xs sm:text-sm font-medium text-white shadow-md hover:bg-theme-hover disabled:bg-gray-200 disabled:text-gray-400 disabled:shadow-none transition-colors"
          >
            <Download className="h-4 w-4" />
            {downloading ? "正在打包…" : anySelected ? "下载所选模板" : "选择后下载"}
          </button>
        </div>

        {downloading && (
          <p className="text-xs sm:text-sm text-gray-500 px-1">
            打包需要一定时间，请耐心等待，下载完成前请不要关闭页面；若失败，请点击下载重试。
          </p>
        )}
      </div>

      <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
        {files.map((file) => {
          const checked = !!selected[file.name]
          return (
            <div
              key={file.name}
              className="group relative flex items-center justify-between gap-3 rounded-2xl border border-gray-100 bg-white/80 px-4 py-3 shadow-sm hover:border-theme/40 hover:shadow-md transition-all"
            >
              <button
                type="button"
                disabled={downloading}
                onClick={() => toggleFile(file.name)}
                className="flex flex-1 items-center gap-3 text-left disabled:cursor-not-allowed"
              >
                <span
                  className={`flex h-6 w-6 items-center justify-center rounded-md border text-theme transition-colors ${
                    checked
                      ? "bg-theme text-white border-theme"
                      : "bg-white border-gray-300 group-hover:border-theme/50"
                  }`}
                >
                  {checked ? (
                    <CheckSquare className="h-4 w-4" />
                  ) : (
                    <Square className="h-4 w-4" />
                  )}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-gray-900">
                    {file.name.replace(".bloomnote", "")}
                  </p>
                  <p className="text-xs text-gray-400">
                    {file.name.split(".").pop()} 模板
                  </p>
                </div>
              </button>

              <a
                href={file.url}
                download={file.name}
                aria-disabled={downloading}
                className={`ml-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:bg-theme hover:text-white transition-colors ${
                  downloading ? "pointer-events-none opacity-60 cursor-not-allowed" : ""
                }`}
                aria-label={`下载 ${file.name}`}
              >
                <Download className="h-4 w-4" />
              </a>
            </div>
          )
        })}
      </div>
    </div>
  )
}


