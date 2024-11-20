import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Book {
  title: string;
  author: string;
  cover: string;
  rating: number;
  finishDate: string;
  note: string;
}

export async function getBooks(): Promise<Book[]> {
  const filePath = path.join(process.cwd(), 'content/books/books.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(fileContents)
  return data.books
} 