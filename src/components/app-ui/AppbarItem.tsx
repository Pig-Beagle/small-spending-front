import cx from 'classnames'
import Link from 'next/link'
import { IconType } from 'react-icons'

interface Props {
  href: string
  text: string
  Icon: IconType
}

const AppbarItem = ({ href, text, Icon }: Props) => {
  return (
    <Link
      href={href}
      className={cx(
        'flex items-center gap-4 p-2 duration-300 w-full',
        'lg:transition-colors lg:p-4 lg:hover:bg-gray-100 lg:rounded-xl'
      )}
    >
      <Icon className={cx('w-10 h-10 p-2', 'lg:w-6 lg:h-6 lg:p-0')} />
      <div className="hidden lg:block">{text}</div>
    </Link>
  )
}

export default AppbarItem
