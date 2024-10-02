'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar({ searchQuery, onSearchChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const cartItemCount = 0; // Example number of items in the cart

  return (
    <>
      <div className={styles.mainNav}>
        <Link href="/" className={styles.logo}>
          BESTCLONEDCARDS
        </Link>

        <div className={styles.searchContainer}>
          {/* Update input to use searchQuery and onSearchChange */}
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <i className={`fa-solid fa-magnifying-glass ${styles.searchIcon}`}></i>
        </div>

        <div className={styles.mainNav2}>
          <Link href="/cart" className={styles.cartIconContainer}>
            <i className={`fa-solid fa-cart-shopping ${styles.icon}`}></i>
            {cartItemCount >= 0 && (
              <span className={styles.cartBadge}>{cartItemCount}</span>
            )}
          </Link>
          <p>$0.00</p>
        </div>

        {/* Hamburger Menu Icon */}
        <div
          className={`${styles.menu} ${menuOpen ? styles.open : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i
            className={`fa-solid ${menuOpen ? 'fa-times' : 'fa-bars'}`}
            style={{ color: '#4682B4', fontSize:'20px'  }}
          ></i>
        </div>
      </div>

      {/* Navigation Links */}
      <div
        className={`${styles.navLinksContainer} ${menuOpen ? styles.active : ''}`}
      >
        {/* Search Bar inside Sidebar */}
        <div className={styles.searchContainer1}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <i className={`fa-solid fa-magnifying-glass ${styles.searchIcon}`}></i>
        </div>

        <nav>
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/cloned-cards">Cloned Cards</Link>
          <Link href="/undetectable-banknotes">Undetectable Banknotes</Link>
          <Link href="/eurobills">Euro Bills</Link>
          <Link href="/usdbills">USD Bills</Link>
          <Link href="/cadbills">CAD Bills</Link>
          <Link href="/gbpbills">GBP Bills</Link>
          <Link href="/reviews">Reviews</Link>
          <Link href="/proof-of-delivery">Proof of Delivery</Link>
        </nav>
      </div>
    </>
  );
}
