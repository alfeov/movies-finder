import { useMoviesSuspenseInfiniteQuery } from '@/hooks/useMoviesSuspenseInfiniteQuery'
import { Movie } from '@/components/Movie/Movie'
import { EmptyMessage } from '@/components/EmptyMessage/EmptyMessage'
import styles from './Movies.module.scss'

export function Movies({ search }) {
  const { data, hasNextPage, fetchNextPage, isFetchingNextPage, error } =
    useMoviesSuspenseInfiniteQuery({ search })

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
      <button onClick={fetchNextPage} disabled={!hasNextPage}>
        Load More
      </button>
    </div>
  )
}
