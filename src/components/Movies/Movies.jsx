import { useSuspenseQuery } from '@tanstack/react-query'
import { getMovies } from '@/api/getMovies'
import { Movie } from '@/components/Movie/Movie'
import styles from './Movies.module.scss'
import { EmptyMessage } from '../EmptyMessage/EmptyMessage'

export function Movies({ search }) {
  const { data } = useSuspenseQuery({
    queryKey: ['movies', search],
    queryFn: () => getMovies(search),
    staleTime: Infinity,
  })

  const movies = data?.Search ?? []
  const totalMovies = data?.totalResults ?? 0

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
    </div>
  )
}
