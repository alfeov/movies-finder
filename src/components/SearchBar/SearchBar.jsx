import { useState } from 'react'
import styles from './SearchBar.module.scss'

export default function SearchBar({ searchMovies }) {
  const [search, setSearch] = useState('')
  const [type, setType] = useState('all')

  const handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = search.trim()
    const searchType = type
    if (searchValue) searchMovies(searchValue, searchType)
  }

  const handleFieldChange = (e) => {
    setSearch(e.target.value)
  }

  const handleRadioChange = (e) => {
    setType(e.target.value)
  }

  const handleFocus = (e) => {
    e.target.parentElement.classList.toggle('active', true)
  }

  const handleBlur = (e) => {
    e.target.parentElement.classList.toggle('active', false)
  }

  return (
    <form
      onSubmit={handleSubmit}
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
          value={search}
          onChange={handleFieldChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
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
            checked={type === 'all'}
            onChange={handleRadioChange}
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
            checked={type === 'movie'}
            onChange={handleRadioChange}
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
            checked={type === 'series'}
            onChange={handleRadioChange}
          />
          Series
        </label>
      </div>
    </form>
  )
}
