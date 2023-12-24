import cx from 'classnames'
import { ReactNode } from 'react'

const MainSection = ({ children }: { children: ReactNode }) => (
  <main
    className={cx(
      'py-14',
      'lg:flex lg:justify-center lg:py-8 lg:pl-64 lg:grow'
    )}
  >
    <div className="lg:w-[720px]">{children}</div>
  </main>
)

export default MainSection
