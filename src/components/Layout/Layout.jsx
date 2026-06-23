import { Link, Outlet } from 'react-router'
import styles from './Layout.module.scss'

export function Layout() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <Link to='/' className={styles.link}>
            Movies Finder
          </Link>
        </div>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>
    </>
  )
}
