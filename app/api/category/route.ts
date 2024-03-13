import { NextResponse } from 'next/server'

import { CategoryEntity } from '@/types/categories'

const data: CategoryEntity[] = [
  { name: 'review', _id: '1213' },
  { name: 'javascript', _id: '1213' },
  { name: 'typescript', _id: '1213' },
  { name: 'react', _id: '1213' },
  { name: 'nextjs', _id: '1213' },
  { name: 'tailwindcss', _id: '1213' },
  { name: 'css', _id: '1213' },
  { name: 'html', _id: '1213' },
  { name: 'user experience', _id: '1213' },
  { name: 'state', _id: '1213' },
  { name: 'programming', _id: '1213' },
  { name: 'performance', _id: '1213' },
]

export async function GET() {
  return NextResponse.json({ data })
}
