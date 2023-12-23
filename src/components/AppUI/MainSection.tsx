import cx from 'classnames'
import { ReactNode } from 'react'

const MainSection = ({ children }: { children: ReactNode }) => (
  <main className={cx('py-14', 'lg:py-0 lg:grow')}>{children}</main>
)

export default MainSection
