import fs from 'fs'
import path from 'path'

export function getChangelogContent(): string {
  try {
    const filePath = path.join(process.cwd(), 'content', 'changelog.md')
    const fileContents = fs.readFileSync(filePath, 'utf8')
    return fileContents
  } catch (error) {
    console.error('Error reading changelog.md:', error)
    return '# Changelog\n\nNo changelog available.'
  }
}

