import Image from "next/image"
import styles from './Banner.module.css'

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
        <Image
        src='/banner.webp'
        alt="banner"
        fill
        priority='lazy'
        />
        <div className={styles.bannerContent}>
            <p>Not sure where to go?</p>
            <button>Find me</button>
        </div>
    </div>
  )
}

export default Banner