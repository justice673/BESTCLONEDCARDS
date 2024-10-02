import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';


export default function Page() {
    return (
      <>
      <div>
          <Navbar/>
      </div>
      <div className={styles.container}>
        <section className={styles.section}>
          <h2 className={styles.heading}>Terms and Conditions for Discreet Cloned Cards</h2>
          <p>These terms and conditions (“Terms”) govern your use of the Sweet Georgia Weed website and services. By accessing our website and placing orders, you agree to abide by these Terms. Please read them carefully.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>1. Age Requirement:</h2>
          <p>You must be at least 18 years old to use our website and purchase our products.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>2. Product Information:</h2>
          <p>The information on our website is for general informational purposes.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>3. Ordering and Payment:</h2>
          <p>By placing an order, you confirm that you are allowed to purchase products on our website.
          We accept payments through methods provided on our website&#39;s checkout page</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>4. Product Availability:</h2>
          <p>We do our best to keep product listings up to date. However, product availability may change, and we reserve the right to limit quantities.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>5. Delivery:</h2>
          <p>We offer delivery services worldwide to all locations discreetly</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>6. Privacy and Security:</h2>
          <p>We value your privacy and use secure encryption to protect your personal information.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>7. Returns and Refunds:</h2>
          <p>Please refer to our Refund Policy for details on returns and refunds.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>8. Intellectual Property:</h2>
          <p>All content on our website is protected by intellectual property rights and may not be used without our permission.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>9. Amendments:</h2>
          <p>We reserve the right to amend these Terms as needed. Updates will be posted on our website.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>10. Termination:</h2>
          <p>We may terminate your access to our website and services if you violate these Terms.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>11. Contact Information:</h2>
          <p>For questions or concerns about these Terms, please contact our customer support as listed on our website.</p>
          <p>By using our website and services, you agree to these Terms and acknowledge that any violation may result in legal action. Best Cloned Cards reserves the right to modify these Terms at any time. It is your responsibility to check for updates.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}></h2>
          <p></p>
        </section>
        </div>
        </>
)
}  