import { useMoviesSuspenseInfiniteQuery } from '@/hooks/useMoviesSuspenseInfiniteQuery'
import { Movie } from '@/components/Movie/Movie'
import { EmptyMessage } from '@/components/EmptyMessage/EmptyMessage'
import styles from './Movies.module.scss'
import { useRef } from 'react'
import { Loader } from '@/components/Loader/Loader'
import { useInfiniteScrollObserver } from '@/hooks/useInfiniteScrollObserver'

export function Movies({ search }) {
  const observableEntry = useRef(null)
  const { data, hasNextPage, fetchNextPage, isFetching } =
    useMoviesSuspenseInfiniteQuery({ search })
  useInfiniteScrollObserver(
    fetchNextPage,
    observableEntry,
    hasNextPage && !isFetching,
    [hasNextPage, isFetching],
    { rootMargin: '800px' },
  )

  const movies = data?.pages?.map((page) => page?.Search || []).flat() ?? []
  const totalMovies = data?.pages?.[0]?.totalResults ?? 0

  return (
    <div>
      <p className={styles.total}>Total found: {totalMovies}</p>
      {movies.length === 0 && (
        <EmptyMessage message='There are no results for your request' />
      )}
      <div className={styles.movies}>
        {movies?.map((movie) => {
          return <Movie key={movie.imdbID} {...movie} />
        })}
      </div>
      <div ref={observableEntry}></div>
      {isFetching && <Loader margin='8rem auto' isLabel={true} />}
    </div>
  )
}
