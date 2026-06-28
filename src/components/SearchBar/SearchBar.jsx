import { useForm } from 'react-hook-form'
import styles from './SearchBar.module.scss'
import { useIsFetching } from '@tanstack/react-query'

export function SearchBar({ search, setSearchParams }) {
  const isFetching = useIsFetching()

  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    getValues,
  } = useForm({
    mode: 'onBlur',
    defaultValues: { title: search.title, type: search.type },
  })

  const performSearch = (data) => {
    const title = data.title.trim()
    const type = data.type
    if (title) {
      setSearchParams({ title, type })
    } else {
      setError('title', { type: 'custom', message: 'At least one character' })
    }
  }

  const onSubmit = (data) => {
    performSearch(data)
  }

  const handleChange = () => {
    const values = getValues()
    performSearch(values)
  }

  const handleFocus = (e) => {
    e.target.parentElement.classList.toggle('active', true)
  }

  const handleBlur = (e) => {
    e.target.parentElement.classList.toggle('active', false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete='off'>
      <fieldset className={styles.fieldset} disabled={isFetching > 0}>
        <div className={styles.searchGroup}>
          <div className={styles.searchInputGroup}>
            <input
              className={styles.field}
              type='search'
              onFocus={handleFocus}
              {...register('title', {
                required: 'This field is required',
                pattern: {
                  value: /^['\dA-Za-z\s]+$/,
                  message: 'Only latin characters, numbers and apostrophe',
                },
                onBlur: handleBlur,
              })}
              placeholder='Search Movie'
            />
            <input className={styles.button} type='submit' value='Search' />
          </div>
          {errors?.title && (
            <div className='error-message'>
              <p>{errors?.title?.message}</p>
            </div>
          )}
        </div>

        <div className={styles.typeGroup}>
          <p className={styles.text}>Type: </p>

          <label className={styles.label}>
            <input
              className={styles.radio}
              type='radio'
              value='all'
              {...register('type', { onChange: handleChange })}
            />
            All
          </label>
          <label className={styles.label}>
            <input
              className={styles.radio}
              type='radio'
              value='movie'
              {...register('type', { onChange: handleChange })}
            />
            Movies
          </label>
          <label className={styles.label}>
            <input
              className={styles.radio}
              type='radio'
              value='series'
              {...register('type', { onChange: handleChange })}
            />
            Series
          </label>
        </div>
      </fieldset>
    </form>
  )
}
