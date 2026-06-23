import styles from './EmptyMessage.module.scss'

export function EmptyMessage({ message }) {
  return <p className={styles.message}>{message}</p>
}
