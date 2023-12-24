import cx from 'classnames'
import Link from 'next/link'
import { AiFillHome } from 'react-icons/ai'
import { FaPen, FaUser } from 'react-icons/fa6'
import { IoLogIn } from 'react-icons/io5'
import AppbarItem from './AppbarItem'

const Sidebar = () => {
  return (
    <aside
      className={cx(
        'fixed left-0 bottom-0 flex justify-around w-screen h-14 px-4 border-t bg-white',
        'lg:flex-col lg:justify-between lg:h-screen lg:border-t-0 lg:border-r lg:w-64 lg:p-4'
      )}
    >
      <nav className="w-full">
        <ul
          className={cx('flex w-full justify-between', 'lg:flex-col lg:gap-4')}
        >
          <li className={cx('hidden', 'lg:block lg:mb-8')}>
            <Link href="/" className="flex items-center gap-4 p-2">
              <h1 className="text-2xl font-bold">少비하자</h1>
            </Link>
          </li>
          <li>
            <AppbarItem href="/" text="홈" Icon={AiFillHome} />
          </li>
          <li>
            <AppbarItem href="/write" text="글쓰기" Icon={FaPen} />
          </li>
          <li>
            <AppbarItem href="/profile" text="프로필" Icon={FaUser} />
          </li>
        </ul>
      </nav>
      <div className={cx('hidden', 'lg:flex lg:w-full')}>
        <AppbarItem href="/login" text="로그인" Icon={IoLogIn} />
      </div>
    </aside>
  )
}

export default Sidebar
