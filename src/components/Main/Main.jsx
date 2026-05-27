import { Component } from 'react'
import SearchBar from '@/components/SearchBar/SearchBar'
import Movies from '@/components/Movies/Movies'
import Movie from '@/components/Movie/Movie'
import Loader from '@/components/Loader/Loader'
import styles from './Main.module.scss'

export default class Main extends Component {
  state = {
    movies: [],
    isLoading: true,
  }

  componentDidMount() {
    this.searchMovies()
  }

  searchMovies = async (movieTitle = 'Matrix') => {
    try {
      const url = `http://www.omdbapi.com/?apikey=dc7efa44&s=${movieTitle}`
      const response = await fetch(url)
      if (!response.ok) throw new Error('HTTP: ' + response.status)
      const data = await response.json()
      this.setState({ movies: data.Search, isLoading: false })
    } catch (error) {
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
            <Loader />
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
