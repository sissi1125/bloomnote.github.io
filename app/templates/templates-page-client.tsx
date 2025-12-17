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

  const downloadOne = (file: TemplateFile) => {
    const link = document.createElement("a")
    link.href = file.url
    link.download = file.name
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const downloadSelected = () => {
    const selectedFiles = files.filter((f) => selected[f.name])
    if (selectedFiles.length === 0) return

    // 逐个触发浏览器下载
    selectedFiles.forEach((file, index) => {
      setTimeout(() => downloadOne(file), index * 200)
    })
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
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 rounded-2xl border border-gray-100 bg-white/80 px-4 py-3 shadow-sm">
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <button
            type="button"
            onClick={allSelected ? handleClear : handleSelectAll}
            className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:border-theme/50 hover:text-theme transition-colors"
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
            onClick={handleInvert}
            className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-700 hover:border-theme/50 hover:text-theme transition-colors"
          >
            <MinusSquare className="h-3.5 w-3.5" />
            反选
          </button>
        </div>
        <button
          type="button"
          disabled={!anySelected}
          onClick={downloadSelected}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-theme px-4 py-2 text-xs sm:text-sm font-medium text-white shadow-md hover:bg-theme-hover disabled:bg-gray-200 disabled:text-gray-400 disabled:shadow-none transition-colors"
        >
          <Download className="h-4 w-4" />
          {anySelected ? "下载所选模板" : "选择后下载"}
        </button>
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
                onClick={() => toggleFile(file.name)}
                className="flex flex-1 items-center gap-3 text-left"
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

              <button
                type="button"
                onClick={() => downloadOne(file)}
                className="ml-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-50 text-gray-500 hover:bg-theme hover:text-white transition-colors"
                aria-label={`下载 ${file.name}`}
              >
                <Download className="h-4 w-4" />
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}


