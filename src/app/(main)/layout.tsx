import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import './globals.css'

const inter = Noto_Sans_KR({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '小비하자',
  description: '소(小)비하고 대화하자',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
