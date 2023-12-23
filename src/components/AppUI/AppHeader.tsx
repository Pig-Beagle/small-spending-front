import Link from 'next/link'
import cx from 'classnames'

const AppHeader = () => {
  return (
    <header
      className={cx(
        'absolute top-0 left-0 flex items-center justify-between w-full h-14 p-4 bg-white border-b',
        'lg:hidden'
      )}
    >
      <Link href="/" className="flex items-center gap-4">
        <h1 className="text-xl font-bold">少비하자</h1>
      </Link>
      <Link href="/login">로그인</Link>
    </header>
  )
}

export default AppHeader
