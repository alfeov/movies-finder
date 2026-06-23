import { useSuspenseInfiniteQuery } from '@tanstack/react-query'
import { getMovies } from '@/api/getMovies'

export function useMoviesSuspenseInfiniteQuery({ search }) {
  return useSuspenseInfiniteQuery({
    queryKey: ['movies', search],
    queryFn: ({ pageParam }) => getMovies(search, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, _, lastPageParam) => {
      // For prevent more loading and setting hasNextPage to false
      if (
        lastPage?.Response === 'False' ||
        // For less loadings (API has limit 10)
        lastPage?.Search.length < 10
      ) {
        return undefined
      }
      return lastPageParam + 1
    },
    staleTime: Infinity,
  })
}
