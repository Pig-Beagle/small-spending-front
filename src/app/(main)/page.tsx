import { API_BASE_URL, POST_LIST_SIZE } from '@/constants'
import PostsContainer from '@/containers/(main)/posts'

const getPostList = async (page: number = 1) => {
  'use server'

  const url =
    API_BASE_URL + '/post/list' + `?page=${page}&size=${POST_LIST_SIZE}`

  const res = await fetch(url, { cache: 'no-cache' })

  const { data: list } = await res.json()

  return list
}

const Main = async () => {
  const list = await getPostList()
  return (
    <>
      <PostsContainer initialList={list} fetchList={getPostList} />
    </>
  )
}

export default Main
