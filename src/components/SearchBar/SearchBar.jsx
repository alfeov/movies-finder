import { Component, createRef } from 'react'
import styles from './SearchBar.module.scss'

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.searchRef = createRef()
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const searchValue = this.searchRef.current.value.trim()
    this.props.searchMovies(searchValue)
  }

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className={styles.searchBar}
        role='search'
        autoComplete='off'
      >
        <input
          className={styles.field}
          name='search'
          type='search'
          ref={this.searchRef}
          placeholder='Search Movie'
        />
        <input className={styles.button} type='submit' value='Search' />
        {/* <input type='radio' name='' id='' />
				<input type='radio' name='' id='' />
				<input type='radio' name='' id='' /> */}
      </form>
    )
  }
}
