import { Component } from 'react'
import SearchBar from '@/components/SearchBar/SearchBar'
import Movies from '@/components/Movies/Movies'
import Movie from '@/components/Movie/Movie'
import Loader from '@/components/Loader/Loader'
import styles from './Main.module.scss'

const API_KEY = import.meta.env.VITE_API_KEY

export default class Main extends Component {
  state = {
    movies: [],
    isLoading: true,
    isError: false,
  }

  componentDidMount() {
    this.searchMovies()
  }

  searchMovies = async (title = 'Matrix', type = '') => {
    this.setState({ isLoading: true })
    try {
      const url = `https://www.omdbapi.com/?apikey=${API_KEY}${type !== 'all' ? `&type=${type}` : ''}&s=${title}`
      const response = await fetch(url)
      if (!response.ok) throw new Error('HTTP: ' + response.status)
      const data = await response.json()
      this.setState({ movies: data?.Search ?? [], isLoading: false })
    } catch (error) {
      this.setState({ movies: [], isLoading: false, isError: true })
      throw new Error(
        'Network or fetch error in searchMovies: ' + error.message,
        {
          cause: error,
        },
      )
    }
  }

  render() {
    return (
      <main className={styles.main}>
        <SearchBar searchMovies={this.searchMovies} />
        <Movies>
          {this.state.isLoading ? (
            <div className={styles.loader}>
              <Loader />
            </div>
          ) : this.state.isError ? (
            <p className={styles.emptyMessage}>Something went wrong</p>
          ) : this.state.movies.length === 0 ? (
            <p className={styles.emptyMessage}>
              There are no results for your request
            </p>
          ) : (
            this.state.movies.map((movie) => {
              return <Movie key={movie.imdbID} {...movie} />
            })
          )}
        </Movies>
      </main>
    )
  }
}
