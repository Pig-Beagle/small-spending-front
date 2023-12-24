import type { Metadata } from 'next'
import { Noto_Sans_KR } from 'next/font/google'
import '../globals.css'
import Appbar from '@/components/app-ui/Appbar'
import MainSection from '@/components/app-ui/MainSection'
import AppHeader from '@/components/app-ui/AppHeader'

const inter = Noto_Sans_KR({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '少비하자',
  description: '소(少)비하고 대화하자',
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html>
      <body className={inter.className}>
        <div>
          <AppHeader />
          <Appbar />
          <MainSection>{children}</MainSection>
        </div>
      </body>
    </html>
  )
}

export default RootLayout
