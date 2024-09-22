"use client";
import React, { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';

export default function Page() {
  const [showPassword, setShowPassword] = useState(true);
  const [showCPassword, setShowCPassword] = useState(true);

  return (
    <div>
      <div className={styles.pageContainer}>
        <div className={styles.formcontainer}>
          <h2>Sign Up</h2>
          <form>
            <input
              type="text"
              id="name"
              placeholder="Name"
            />
            <input
              type="email"
              id="email"
              placeholder="email@gmail.com"
            />
            <div className={styles.inputIcon}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="********"
              />
              <button
                type="button"
                className={styles.iconButton}
                onClick={() => setShowPassword(!showPassword)}
              >
                <i className={`fa-solid ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
              </button>
            </div>

            <div className={styles.inputIcon}>
              <input
                type={showCPassword ? "text" : "password"}
                id="confirm-password"
                placeholder="********"
              />
              <button
                type="button"
                className={styles.iconButton}
                onClick={() => setShowCPassword(!showCPassword)}
              >
                <i className={`fa-solid ${showCPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
              </button>
            </div>
            <button type="submit" className={styles.submitbtn}>
              SIGN UP
            </button>
          </form>
          <div className={styles.separator}>
            <span>or sign up with</span>
          </div>
          <div className={styles.sociallogin}>
            <button className={styles.facebook}>
              <i className="fa-brands fa-facebook-f"></i> Facebook
            </button>
            <button className={styles.google}>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    width="24px"
    height="24px"
  >
    <path
      fill="#4285F4"
      d="M 47.614582,24.521914 C 47.614582,23.6008 47.533197,22.707462 47.388724,21.840008 H 24.481849 V 27.568971 H 37.445156 C 36.884818,30.28753 35.385035,32.604617 33.197087,34.01676 V 37.451365 H 40.931112 C 45.116671,33.639472 47.614582,29.520514 47.614582,24.521914 Z"
    />
    <path
      fill="#34A853"
      d="M 24.481849,48 C 29.437675,48 33.603207,46.329907 36.776074,43.354855 L 29.197381,37.451365 C 27.647803,38.498746 25.662045,39.108044 23.475503,39.108044 C 18.741661,39.108044 14.869758,35.84165 13.46689,31.475723 H 5.479552 V 34.991746 C 8.737302,42.11976 16.075544,48 24.481849,48 Z"
    />
    <path
      fill="#FBBC05"
      d="M 13.46689,31.475723 C 12.088716,27.757826 12.088716,24.241588 13.46689,20.52369 V 16.907631 H 5.479552 C 1.830511,24.327519 1.830511,31.671895 5.479552,39.091783 Z"
    />
    <path
      fill="#EA4335"
      d="M 24.481849,8.891956 C 26.78909,8.891956 28.877294,9.674497 30.545275,11.236413 L 37.137352,4.644337 C 33.601576,1.332035 29.437675,0 24.481849,0 16.075544,0 8.737302,5.880241 5.479552,13.008254 L 13.46689,16.524277 C 14.869758,12.15835 18.741661,8.891956 24.481849,8.891956 Z"
    />
  </svg>
  Google
</button>

          </div>
          <p>
            Already have an account? <Link href="/login">Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
