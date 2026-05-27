import styles from './Movie.module.scss'
import image from '@/assets/images/no-image.png'

export default function Movie({
  Poster: posterUrl,
  Title: title,
  Type: type,
  Year: year,
  imdbID,
}) {
  const changeImgSrc = ({ currentTarget }) => {
    currentTarget.onerror = null
    currentTarget.src = image
    const p = document.createElement('p')
    p.className = styles.noImgText
    p.textContent = title
    currentTarget.insertAdjacentElement('afterend', p)
  }

  return (
    <article className={styles.movie}>
      <div className={styles.imgWrapper}>
        <img
          className={styles.img}
          src={posterUrl}
          alt='Movie image'
          onError={changeImgSrc}
        />
      </div>
      <footer className={styles.footer}>
        <p className={styles.title}>{title}</p>
        <ul className={styles.info}>
          <li>Year: {year}</li>
          <li>Type: {type}</li>
          <li>
            <a
              className={styles.link}
              href={'https://www.imdb.com/title/' + imdbID}
            >
              IMDB
            </a>
          </li>
        </ul>
      </footer>
    </article>
  )
}
