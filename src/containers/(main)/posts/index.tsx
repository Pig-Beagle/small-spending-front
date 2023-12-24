'use client'

import { Post } from '@/types'
import { useRef, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroller'

interface Props {
  initialList: Post[]
  fetchList: (page?: number) => Promise<Post[]>
}

const PostsContainer = ({ initialList, fetchList }: Props) => {
  const [pages, setPages] = useState([initialList])

  const isEnd = useRef(false)
  const isFetching = useRef(false)

  const items = pages.flatMap((page) => page)

  const loadMore = async (page: number) => {
    if (isFetching.current) {
      return
    }

    try {
      isFetching.current = true

      const list = await fetchList(page)

      if (!list.length) {
        isEnd.current = true
      }

      setPages((prev) => [...prev, list])
    } finally {
      isFetching.current = false
    }
  }

  return (
    <div>
      <InfiniteScroll
        pageStart={1}
        hasMore={!isEnd.current}
        loadMore={loadMore}
        loader={<span key={0}>Loading...</span>}
        element="ul"
      >
        {items.map((item) => (
          <div key={item.no} className="h-96">
            {item.amount}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  )
}

export default PostsContainer
