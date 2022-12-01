import Image from "next/image";
import styles from './ExploreCard.module.css'
const ExploreCard = ({ exploreData }) => {

  return (
    <section className={styles.ExploreSection}>
      <h2>Explore Nearby</h2>
      <div className={styles.ExploreCardContainer}>
        {exploreData.map((item) => {
          return (
            <div key={item.img} className={styles.ExploreCardContent}>
              <div className={styles.ExploreImgContainer}>
                <Image
                  src={item.img}
                  alt={item.location}
                  fill
                  priority='lazy'
                  
                />
              </div>
              <div className={styles.ExploreText}>
                <h2>{item.location}</h2>
                <h3>{item.distance}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExploreCard;
