import React from 'react';
import styles from './Footer.module.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.container}>
            <div className={styles.footer1}>
                <h3>Download Our App</h3>
                <p>Download App for Android and ios mobile phone</p>
                <div className={styles.appLogo}>
                    <Image src="/images/google-play-badge-logo.svg" width={50} height={50}/>
                    <Image src="/images/images.png" width={50} height={17}/>
                </div>
            </div>
            <div className={styles.footer2}>
                <h3>Download Our App</h3>
                <p>Shoptech is a tech-focused e-commerce platform that offers a wide range of products with an easy comparison system and fast, user-friendly experience. It caters to tech enthusiasts by providing quick support and reliable product information.</p>
            </div>
            <div className={styles.footer3}>
                <h3>Useful Links</h3>
                <ul>
                    <li>Coupons</li>
                    <li>Blog Post</li>
                    <li>Return Policy</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className={styles.footer4}>
                <h3>Follow Us</h3>
                <ul>
                    <li>Youtube</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
            </div>
        </div>
    </div>
  )
}
