import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.FooterContainer}>
        <div className={styles.FooterContent}>
          <h5>ABOUT</h5>
          <p>How airbnb works.</p>
          <p>Newsroom</p>
          <p>Airbnb plus</p>
          <p>Investors</p>
          <p>Airbnb luxe</p>
        </div>
        <div className={styles.FooterContent}>
          <h5>COMMUNITY</h5>
          <p>How airbnb works.</p>

          <p>Newsroom</p>
          <p>Airbnb plus</p>
          <p>Investors</p>
          <p>Airbnb luxe</p>
        </div>
        <div className={styles.FooterContent}>
          <h5>HOST</h5>
          <p>How airbnb works.</p>

          <p>Newsroom</p>
          <p>Airbnb plus</p>
          <p>Investors</p>
          <p>Airbnb luxe</p>
        </div>
        <div className={styles.FooterContent}>
          <h5>SUPPORT</h5>
          <p>How airbnb works.</p>

          <p>Newsroom</p>
          <p>Airbnb plus</p>
          <p>Investors</p>
          <p>Airbnb luxe</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
