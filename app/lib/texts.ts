import fs from 'fs'
import path from 'path'

export async function getTexts(page: string) {
  const filePath = path.join(process.cwd(), `content/texts/${page}.json`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  return JSON.parse(fileContents)
} 