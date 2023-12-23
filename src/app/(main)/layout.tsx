import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import '../globals.css'
import Appbar from '@/components/AppUI/Appbar'
import MainSection from '@/components/AppUI/MainSection'
import AppHeader from '@/components/AppUI/AppHeader'

const inter = Noto_Sans_KR({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '少비하자',
  description: '소(少)비하고 대화하자',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body className={inter.className}>
        <div className="flex">
          <AppHeader />
          <Appbar />
          <MainSection>{children}</MainSection>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
