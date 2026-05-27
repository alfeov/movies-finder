import styles from './Movies.module.scss'

export default function Movies({ children }) {
  return <div className={styles.movies}>{children}</div>
}
