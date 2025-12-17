import fs from "fs"
import path from "path"

import TemplatesPageClient from "./templates-page-client"

function getTemplateFiles() {
  const templatesDir = path.join(process.cwd(), "public", "templates")
  try {
    const files = fs.readdirSync(templatesDir)
    return files
      .filter((name) => !name.startsWith("."))
      .map((name) => ({
        name,
        url: `/templates/${encodeURIComponent(name)}`,
      }))
  } catch {
    return []
  }
}

export default function TemplatesPage() {
  const files = getTemplateFiles()

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#f7f9fc] to-white">
      <div className="max-w-4xl mx-auto px-4 pt-28 pb-16">
        <div className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-theme mb-3">
            Bloomnote 模板中心
          </h1>
          <p className="text-sm sm:text-base text-gray-500">
            为不同场景精心准备的 Bloomnote 模板，支持单个或批量下载。
          </p>
        </div>

        <TemplatesPageClient files={files} />
      </div>
    </div>
  )
}


