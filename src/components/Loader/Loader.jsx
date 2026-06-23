import { TailSpin } from 'react-loader-spinner'
import styles from './Loader.module.scss'

export function Loader({ margin = 'auto', isLabel = false }) {
  return (
    <div className={styles.container} style={{ margin: margin }}>
      <TailSpin
        visible={true}
        height='80'
        width='80'
        color='currentColor'
        ariaLabel='tail-spin-loading'
        radius='1'
        wrapperStyle={{}}
        wrapperClass=''
      />
      {isLabel && <p className={styles.label}>Loading...</p>}
    </div>
  )
}
