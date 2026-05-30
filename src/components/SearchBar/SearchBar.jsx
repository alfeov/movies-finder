import { Component } from 'react'
import styles from './SearchBar.module.scss'

export default class SearchBar extends Component {
  state = {
    search: 'Matrix',
    type: 'all',
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = this.state.search.trim()
    const searchType = this.state.type
    if (searchValue) this.props.searchMovies(searchValue, searchType)
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleFocus = (e) => {
    e.target.parentElement.classList.toggle('active', true)
  }

  handleBlur = (e) => {
    e.target.parentElement.classList.toggle('active', false)
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className={styles.form}
        role='search'
        autoComplete='off'
      >
        <div className={styles.searchGroup}>
          <input
            className={styles.field}
            name='search'
            type='search'
            placeholder='Search Movie'
            value={this.state.search}
            onChange={this.handleChange}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
          />
          <input className={styles.button} type='submit' value='Search' />
        </div>

        <div className={styles.typeGroup}>
          <p className={styles.text}>Type: </p>
          <label className={styles.label} htmlFor='all'>
            <input
              id='all'
              className={styles.radio}
              type='radio'
              name='type'
              value='all'
              checked={this.state.type === 'all'}
              onChange={this.handleChange}
            />
            All
          </label>
          <label className={styles.label} htmlFor='movies'>
            <input
              id='movies'
              className={styles.radio}
              type='radio'
              name='type'
              value='movie'
              checked={this.state.type === 'movie'}
              onChange={this.handleChange}
            />
            Movies
          </label>
          <label className={styles.label} htmlFor='series'>
            <input
              id='series'
              className={styles.radio}
              type='radio'
              name='type'
              value='series'
              checked={this.state.type === 'series'}
              onChange={this.handleChange}
            />
            Series
          </label>
        </div>
      </form>
    )
  }
}
