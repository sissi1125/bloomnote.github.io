import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Navbar from "@/components/Navbar"
import { getChangelogContent } from "@/lib/changelog"

interface VersionEntry {
  version: string
  date: string
  items: string[]
}

function parseChangelog(content: string): VersionEntry[] {
  const versions: VersionEntry[] = []
  const lines = content.split('\n')
  
  let currentVersion: VersionEntry | null = null
  let currentItem: string | null = null
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const trimmedLine = line.trim()
    
    // Skip empty lines at the start
    if (!trimmedLine && !currentVersion) {
      continue
    }
    
    // Match version header: ## X.X.X Date or ## Version X.X.X - Date
    const versionMatch1 = trimmedLine.match(/^##\s+([\d.]+)\s+(.+)$/)
    const versionMatch2 = trimmedLine.match(/^##\s+Version\s+([\d.]+)\s*-\s*(.+)$/)
    const versionMatch = versionMatch1 || versionMatch2
    
    if (versionMatch) {
      // Save previous version
      if (currentVersion) {
        if (currentItem) {
          currentVersion.items.push(currentItem)
          currentItem = null
        }
        versions.push(currentVersion)
      }
      // Start new version
      currentVersion = {
        version: versionMatch[1],
        date: versionMatch[2],
        items: []
      }
      currentItem = null
    } else if (currentVersion && trimmedLine) {
      // Match numbered list item (1. 2. etc.) - main items
      const numberedMatch = trimmedLine.match(/^(\d+)\.\s+(.+)$/)
      if (numberedMatch) {
        // Save previous item if exists
        if (currentItem) {
          currentVersion.items.push(currentItem)
        }
        currentItem = numberedMatch[2]
      }
      // Match dash list item (-) - sub-items
      else if (trimmedLine.startsWith('-')) {
        const subItem = trimmedLine.substring(1).trim()
        if (subItem) {
          if (currentItem) {
            // Append to current item
            currentItem += ' ' + subItem
          } else {
            // Standalone dash item
            if (currentVersion.items.length > 0) {
              // Append to last item
              const lastIndex = currentVersion.items.length - 1
              currentVersion.items[lastIndex] += ' ' + subItem
            } else {
              currentVersion.items.push(subItem)
            }
          }
        }
      }
      // Regular text line (continuation or standalone text)
      else if (trimmedLine && !trimmedLine.startsWith('#') && !trimmedLine.match(/^\d+\./)) {
        // Check if it's a label like "Fix issue:" that should start a new section
        if (trimmedLine.endsWith(':') && trimmedLine.length < 50) {
          // It's a label, skip it or add as context
          // For now, we'll skip labels like "Fix issue:"
          continue
        }
        
        if (currentItem) {
          // Continue current item
          currentItem += ' ' + trimmedLine
        } else if (currentVersion.items.length > 0) {
          // Continue last item
          const lastIndex = currentVersion.items.length - 1
          currentVersion.items[lastIndex] += ' ' + trimmedLine
        } else {
          // Standalone text line, add as new item
          currentVersion.items.push(trimmedLine)
        }
      }
    }
  }
  
  // Save last version and item
  if (currentVersion) {
    if (currentItem) {
      currentVersion.items.push(currentItem)
    }
    versions.push(currentVersion)
  }
  
  return versions
}

export default function Changelog() {
  const changelogContent = getChangelogContent()
  const versions = parseChangelog(changelogContent)

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Home Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>

          {/* Page Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-12 font-source-serif">
            Changelog
          </h1>

          {/* Changelog Content */}
          <div className="space-y-6">
            {versions.map((version, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900 font-source-serif">
                    Version {version.version}
                  </h3>
                  <span className="text-sm text-gray-500">{version.date}</span>
                </div>
                <ul className="space-y-2 text-gray-600 font-lexend-deca">
                  {version.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2">
                      <span className="text-theme mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

