'use client'

import { CATEGORY } from '@/constants'
import { Post } from '@/types'
import cx from 'classnames'
import Link from 'next/link'

interface Props {
  item: Post
}

const PostItem = ({ item }: Props) => {
  return (
    <article className={cx('w-full p-4 flex flex-col gap-4 lg:border-b')}>
      <div className="text-sm">{item.memberNo}</div>
      <div>{CATEGORY[item.category]}</div>
      <div className="text-xl">
        {item.amount.toLocaleString()}
        <span className="text-base"> 원</span>
      </div>
      <div>{item.content}</div>
      <Link className="text-sm text-gray-500" href={`/post/${item.no}`}>
        댓글 달기...
      </Link>
    </article>
  )
}

export default PostItem
