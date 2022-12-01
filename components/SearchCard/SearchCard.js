import { useRouter } from "next/router";
import styles from "./SearchCard.module.css";
import { format } from "date-fns";
import Moment from "react-moment";
import "moment-timezone";

import InfoCard from "../InfoCard/InfoCard";
import MapContainer from "../Map/MapContainer";
const SearchCard = ({searchRes}) => {

  const router = useRouter();
  const { location, startDate, endDate, guestNumber } = router.query;

  return (
    <main className={styles.SeachCardMain}>
      <section className={styles.SeachContentCard}>
        <p className={styles.SeachCardDetail}>
          300+ Stays - <Moment format="ddd/MMM/yy">{startDate}</Moment> -{" "}
          <Moment format="ddd/MMM/yy">{endDate}</Moment> - for {guestNumber}{" "}
          number of guests
        </p>
        <h1 className={styles.SeachCardTitle}>Stays in {location}</h1>
        <div className={styles.SeachCardFilter}>
          <p>Cancelation Flexbility</p>
          <p>Type of Place</p>
          <p>Price</p>
          <p>Rooms and Beds</p>
          <p>More filters</p>
        </div>
        <div>
          {
            searchRes.map(item=>{
              return(          
                  <InfoCard key={item.img} item={item}/>

              )
            })
          }

        </div>
      </section>
      
      <MapContainer searchRes={searchRes}/>
    </main>
  );
};
export default SearchCard;
