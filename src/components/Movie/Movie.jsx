import styles from './Movie.module.scss'
import image from '../../assets/images/img.webp'

export default function Movie() {
  return (
    <article className={styles.movie}>
      <img className={styles.img} src={image} alt='image' />
      <footer className={styles.footer}>
        <p className={styles.title}>Hello world</p>
        <p className={styles.desc}>Description</p>
      </footer>
    </article>
  )
}
