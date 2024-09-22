import Navbar from '@/components/Navbar/Navbar';
import React from 'react';
import styles from './page.module.css';

export default function Page() {
  return (
    <div>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.main}>
        <h1 className={styles.mainh}>BUY CLONED CREDIT CARDS ONLINE FROM BESTCLONEDCARDS</h1>
        <p className={styles.mainp}>
          Clone cards work in the same way as your original ATM card, allowing you to access funds and conduct transactions. These cards are accepted <br /> worldwide and can be used in any ATM machine. This is the best place for you to buy cloned cards online discreetly.
        </p>
        <div className={styles.btns}>
          <button className={styles.shopBtn}>
            <i className="fa-solid fa-cart-shopping" /> SHOP NOW
          </button>
          <button className={styles.proofBtn}>PROOF OF DELIVERY</button>
        </div>
      </div>
      <div className={styles.featured}>
          <h2 className={styles.title}>Featured Products</h2>
          <h1>BUY CLONED CARDS ONLINE</h1>
          <p>Are you looking for Cloned Cards For Sale? Then you are in the right place. We also have cards that; don’t link with a bank account or person. However, is therefore the safest cards to use. These cards can cost; a little more expensive than Cloned Credit Cards because we&#39;ve already cleared the cloned card and transferred money to a prepaid card. Again, With this card, you can enjoy all the possibilities of shopping in stores and withdrawals along with peace of mind.</p>
      </div>

    </div>
  );
}
