'use client';
import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.mainNav}>
      <Link href={"/"}>BESTCLONECARDS</Link>
      <nav>
        <Link href={"/cart"}>
          <i className={`fa-solid fa-magnifying-glass ${styles.icon}`}></i>
        </Link>
        <Link href={"/cart"}>
          <i className={`fa-solid fa-cart-shopping ${styles.icon}`}></i>
        </Link>
      </nav>
      <div className={styles.mainNav2}>
        <Link href={"/login"}>Login</Link>
        <Link href={"/signup"}>Sign Up</Link>
      </div>
    </div>
  );
}
