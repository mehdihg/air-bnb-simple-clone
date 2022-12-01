
import Image from 'next/image'
import styles from './CabinCard.module.css'
import { useHorizontalScroll } from '../../utils/scrollHelper'
const CabinCard = ({cardsData}) => {
  const scrollRef = useHorizontalScroll()
  return (
    <section className={styles.CabinsSection}>
    <h2>Live anywhere</h2>
    <div className={styles.CabinSlider}  ref={scrollRef}>
    {
      cardsData.map(item=>{
        return(
          <div key={item.img} className={styles.CabinCardContainer}>
            <div className={styles.CabinCardImg}>
              <Image
                src={item.img}
                alt={item.title}
                fill
              />
            </div>
            <h3>{item.title}</h3>
          </div>
        )
      })
    }
    </div>
    </section>
  )
}

export default CabinCard






