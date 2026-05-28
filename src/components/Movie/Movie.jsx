import { Component } from 'react'
import Loader from '@/components/Loader/Loader'
import styles from './Movie.module.scss'
import image from '@/assets/images/no-image.png'

export default class Movie extends Component {
  state = {
    imgLoading: true,
    imgError: false,
  }

  handleError = ({ currentTarget }) => {
    currentTarget.onerror = null
    this.setState({ imgError: true })
  }

  handleLoad = () => {
    this.setState({ imgLoading: false })
  }

  render() {
    return (
      <article className={styles.movie}>
        <div className={styles.imgWrapper}>
          {this.state.imgLoading && (
            <div className={styles.imgLoader}>
              <Loader />
            </div>
          )}
          {!this.state.imgError ? (
            <img
              className={styles.img}
              style={{
                opacity: this.state.imgLoading ? '0' : '1',
              }}
              src={this.props.Poster}
              alt='Movie image'
              onError={this.handleError}
              onLoad={this.handleLoad}
            />
          ) : (
            <>
              <img
                className={styles.img}
                style={{
                  opacity: this.state.imgLoading ? '0' : '1',
                }}
                src={image}
                alt='No Image'
                onLoad={this.handleLoad}
              />
              <p
                className={styles.noImgText}
                style={{
                  opacity: this.state.imgLoading ? '0' : '1',
                }}
              >
                {this.props.Title}
              </p>
            </>
          )}
        </div>
        <footer className={styles.footer}>
          <p className={styles.title}>{this.props.Title}</p>
          <ul className={styles.info}>
            <li>Year: {this.props.Year}</li>
            <li>Type: {this.props.Type}</li>
            <li>
              <a
                className={styles.link}
                href={'https://www.imdb.com/title/' + this.props.imdbID}
              >
                IMDB
              </a>
            </li>
          </ul>
        </footer>
      </article>
    )
  }
}
