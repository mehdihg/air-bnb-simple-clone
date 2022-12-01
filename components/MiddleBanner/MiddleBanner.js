import Image from "next/image"
import styles from './MiddleBanner.module.css'

const MiddleBanner = () => {
  return (
    <section className={styles.MiddleBannerSection}>
        <div className={styles.MiddleBannerImg}>
            <Image
                src='/middlebanner.webp'
                alt="middlebanner"
                fill
            />
        </div>
        <div className={styles.MiddleBannerContent}>
            <h3>The Greatest Outdoors</h3>
            <h4>Wishlists curated by Airbnb.</h4>
            <button>Get inspired</button>
        </div>
    </section>
  )
}

export default MiddleBanner