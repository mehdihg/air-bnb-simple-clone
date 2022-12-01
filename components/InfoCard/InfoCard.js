import React from "react";
import Image from "next/image";
import styles from "./InfoCard.module.css";
import { AiOutlineHeart,AiFillStar } from 'react-icons/ai';
const InfoCard = ({ item }) => {
  return (
    <div className={styles.InfoCardContainer}>
      <div className={styles.InfoCardImg}>
        <Image src={item.img} fill alt={item.title}/>
      </div>
      <div className={styles.InfoCardContent}>
        <div className={styles.InfoCardLocation}>
            <p>{item.location}</p>
            <AiOutlineHeart/>
        </div>
        <h4 className={styles.InfoCardTitle}>{item.title}</h4>
        <div className={styles.InfoCardBorder}></div>
        <p className={styles.InfoCardDesc}>{item.description}</p>
        <div className={styles.InfoCardDetail}>
            <div className={styles.InfoCardRate}>
            <AiFillStar/>
            <p>
                {item.star}
            </p>
            </div>
            <div className={styles.InfoCardPrices}>
                <p>{item.price}</p>
                <h5>{item.total}</h5>
            </div>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
