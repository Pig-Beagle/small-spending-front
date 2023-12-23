import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import '../globals.css'

const inter = Noto_Sans_KR({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '少비하자',
  description: '소(少)비하고 대화하자',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export default RootLayout
