'use client'

import { CATEGORY } from '@/constants'
import { Post } from '@/types'
import cx from 'classnames'
import Image, { ImageLoader } from 'next/image'
import Link from 'next/link'

interface Props {
  item: Post
}

const avatarLoader: ImageLoader = ({ src, width }) => {
  return `https://source.boringavatars.com/beam/${width}/${src}`
}

const PostItem = ({ item }: Props) => {
  return (
    <article className="w-full p-4 flex flex-col gap-8 border-b">
      <Link
        href={`/profile/${item.memberNo}`}
        className="text-sm flex items-center gap-2"
      >
        <Image
          loader={avatarLoader}
          src={'' + item.memberNo}
          width={20}
          height={20}
          alt="avatar"
        />
        {item.memberNo}
      </Link>
      <Link href={`/post/${item.no}`} className="flex flex-col gap-8">
        <div>{CATEGORY[item.category]}</div>
        <div>
          <strong className="text-xl">{item.amount.toLocaleString()}</strong>
          <span className="text-base"> 원</span>
        </div>
        <div className="flex flex-col gap-2">
          {item.content && (
            <div className="line-clamp-2 leading-relaxed">{item.content}</div>
          )}
          <span className="text-sm text-gray-400">상세보기</span>
        </div>
      </Link>
    </article>
  )
}

export default PostItem
