import styles from './Header.module.scss'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <a href='#' className={styles.link}>
          Movies Finder
        </a>
      </div>
    </header>
  )
}

export default Header
