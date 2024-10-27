import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.logoSection}>
          {/* <img src="/logo.png" alt="Logo" className={styles.logo} /> */}
          <p>Los Angeles, California</p>
          <p>CA, United States | About us</p>
          <p>Email: info@bestclonecards.com</p>
          <p>Phone: +1 </p>
        </div>

        <div className={styles.linksSection}>
          <div className={styles.column}>
            <h3>Our Category</h3>
            <ul>
              {/* <li><Link href={"/clonecard"}>Clone Card</Link></li> */}
              <li><Link href={"/undetectablebanknotes"}>Undetectable Banknotes</Link></li>
              <li><Link href={"/eurobills"}>Euro Bills</Link></li>
              <li><Link href={"/usdbills"}>USD Bills</Link></li>
              <li><Link href={"/gbpbills"}>GPB Bills</Link></li>
              <li><Link href={"/cadbills"}>CAD Bills</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3>Site Support</h3>
            <ul>
              <li><Link href={"/trackyourorders"}>Track your order</Link></li>
              <li><Link href={"/faq"}>FAQ</Link></li>
              <li><Link href={"/products"}>Shop</Link></li>
              <li><Link href="#">Customer Reviews</Link></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3>Our Policy</h3>
            <ul>
              <li><Link href={"/privacypolicy"}>Privacy policy</Link></li>
              <li><Link href={"/shipping"}>Shipping and Return</Link></li>
              <li><Link href={"/termsandconditions"}>Terms and Conditions</Link></li>
              <li><Link href={"/contact"}>Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
      </div>
      <div className={styles.copyright}>
      <p>Copyright 2024 © Best Cloned Cards</p>
      </div>
    </footer>
  );
}
