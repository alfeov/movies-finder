import { useState } from 'react'
import Loader from '@/components/Loader/Loader'
import styles from './Movie.module.scss'
import image from '@/assets/images/no-image.png'

export default function Movie({
  Poster: poster,
  Title: title,
  Type: type,
  Year: year,
  imdbID,
}) {
  const [imgLoading, setImgLoading] = useState(true)
  const [imgError, setImgError] = useState(false)

  const handleError = ({ currentTarget }) => {
    currentTarget.onerror = null
    setImgError(true)
  }

  const handleLoad = () => {
    setImgLoading(false)
  }

  return (
    <article className={styles.movie}>
      <div className={styles.imgWrapper}>
        {imgLoading && (
          <div className={styles.imgLoader}>
            <Loader />
          </div>
        )}
        {!imgError ? (
          <img
            className={styles.img}
            style={{
              opacity: imgLoading ? '0' : '1',
            }}
            src={poster}
            alt='Movie image'
            onError={handleError}
            onLoad={handleLoad}
          />
        ) : (
          <>
            <img
              className={styles.img}
              style={{
                opacity: imgLoading ? '0' : '1',
              }}
              src={image}
              alt='No Image'
              onLoad={handleLoad}
            />
            <p
              className={styles.noImgText}
              style={{
                opacity: imgLoading ? '0' : '1',
              }}
            >
              {title}
            </p>
          </>
        )}
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
