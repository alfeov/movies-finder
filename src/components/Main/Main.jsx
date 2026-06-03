import { useState, useEffect, useRef } from 'react'
import SearchBar from '@/components/SearchBar/SearchBar'
import Movies from '@/components/Movies/Movies'
import Movie from '@/components/Movie/Movie'
import Loader from '@/components/Loader/Loader'
import styles from './Main.module.scss'

const API_KEY = import.meta.env.VITE_API_KEY

export default function Main() {
  const [isLoading, setIsLoading] = useState(true)
  const [movies, setMovies] = useState([])
  const [isError, setIsError] = useState(false)

  const searchMovies = async (title = 'Matrix', type = '') => {
    setIsLoading(true)
    try {
      const url = `https://www.omdbapi.com/?apikey=${API_KEY}${type !== 'all' ? `&type=${type}` : ''}&s=${title}`
      const response = await fetch(url)
      if (!response.ok) throw new Error('HTTP: ' + response.status)
      const data = await response.json()
      setMovies(data?.Search ?? [])
    } catch (error) {
      setIsError(true)
      setMovies([])
      throw new Error(
        'Network or fetch error in searchMovies: ' + error.message,
        {
          cause: error,
        },
      )
    } finally {
      setIsLoading(false)
    }
  }

  const isFirstRender = useRef(true)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      searchMovies()
    }
  }, [])

  return (
    <main className={styles.main}>
      <SearchBar searchMovies={searchMovies} />
      <Movies>
        {isLoading ? (
          <div className={styles.loader}>
            <Loader />
          </div>
        ) : isError ? (
          <p className={styles.emptyMessage}>Something went wrong</p>
        ) : movies.length === 0 ? (
          <p className={styles.emptyMessage}>
            There are no results for your request
          </p>
        ) : (
          movies.map((movie) => {
            return <Movie key={movie.imdbID} {...movie} />
          })
        )}
      </Movies>
    </main>
  )
}
