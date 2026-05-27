import SearchBar from '@/components/SearchBar/SearchBar'
import Movies from '@/components/Movies/Movies'
import Movie from '@/components/Movie/Movie'
import styles from './Main.module.scss'

const movies = [0, 1, 2, 3, 4, 5]

export default function Main() {
  return (
    <main className={styles.main}>
      <SearchBar />
      <Movies>
        {movies.map((movie) => (
          <Movie />
        ))}
      </Movies>
    </main>
  )
}
