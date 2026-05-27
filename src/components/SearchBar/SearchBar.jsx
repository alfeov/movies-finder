import styles from './SearchBar.module.scss'

export default function SearchBar() {
  return (
    <form className={styles.searchBar} role='search'>
      <input
        className={styles.field}
        name='search'
        type='search'
        placeholder='Search Movie'
      />
      <input className={styles.button} type='submit' value='Search' />
    </form>
  )
}
