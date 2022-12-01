import Image from "next/image";
import styles from './Header.module.css'
import { AiOutlineSearch } from 'react-icons/ai'
import {HiOutlineGlobeAlt , HiOutlineMenu , HiUserCircle,HiUsers} from 'react-icons/hi'
import Link from 'next/link'
import { useState } from "react";
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";
const Header = () => {
 
  const [location,setLocation] = useState('')
  const [startDate,setStartDate]=useState(new Date())
  const [endDate,setEndDate]=useState(new Date())
  const [guestNumber,setGuestNumber] = useState(1)
  const router=useRouter()
  const handleSelect=(ranges)=>{
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }
  const selectionRange ={
    startDate,
    endDate,
    key: 'selection',
  }
  const resetInput = ()=>{
    setLocation('')
  }
  const searchHandler = ()=>{
    router.push({
      pathname:'/search',
      query:{
        location,
        startDate:startDate.toISOString(),
        endDate:endDate.toISOString(),
        guestNumber
      }
    })
  }
  //const orientation = window.matchMedia("(max-width: 768px)").matches ? 'vertical' : 'horizontal'
  return (
    <div>
    <header className={styles.header}>
      <div className={styles.logoContainer} onClick={()=>router.push('/')}>

        <Image
        src='/logo.png'
        fill
        alt="logo"
        priority='eager'
        sizes="(max-width: 768px) 60vw,
        (max-width: 1200px) 50vw,
        33vw"
        />

      </div>
      <div className={styles.searchContainer}>
        <input type='text' placeholder={"start your search"} value={location} onChange={(e)=>setLocation(e.target.value)}/>
        <AiOutlineSearch/>
      </div>
      <div className={styles.menuContainer}>
        <p className={styles.menuText}>Become a host</p>
        <div className={styles.globalIcon}>
        <HiOutlineGlobeAlt/>
        </div>
        <div className={styles.menuIcons}>
          <HiOutlineMenu/>
          <HiUserCircle/>
        </div>
      </div>
      {
          location &&
          <div className={styles.datePickerContainer}>
            <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={['#FD5B61']}
            onChange={handleSelect}
            
            autoFocus 
            />
            <div className={styles.guestsContainer}>
              <h2>Number of guests</h2>
              <div className={styles.guestsInput}>
              <HiUsers/>
              <input
              type='number'
              value={guestNumber}
              onChange={(e)=>setGuestNumber(e.target.value)}
              min={1}
              />
              </div>
            </div>
            <div className={styles.buttonsDatePicker}>
              <button className={styles.buttonCancel} onClick={resetInput}>Cancel</button>
              <button className={styles.buttonSearch} onClick={searchHandler}>Search</button>
            </div>
          </div>
        }
    </header>

    </div>
  );
};

export default Header;
