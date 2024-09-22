import Navbar from '@/components/Navbar/Navbar';
import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

export default function page() {
  return (
    <>
      <Navbar/>
    <div>
         <div className={styles.logincontainer}>
            <Link href={"/"}>
      <div className={styles.closeButton}>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
          <line x1="0" y1="0" x2="20" y2="20" stroke="skyblue" stroke-width="6"/>
          <line x1="20" y1="0" x2="0" y2="20" stroke="skyblue" stroke-width="6"/>
        </svg>
      </div>     
      </Link>           
      <h2>Log In</h2>
      <form>
          <input type="email" name="email"  placeholder='Email' required className={styles.inputstyle} />
          <input type="password" name="password"  placeholder='Password' required className={styles.inputstyle}/>
        <button type="submit"  style={{ backgroundColor: 'skyblue', color: 'white' }} className={styles.buttonstyle}>LOG IN</button>
      </form>
      <a href="#">Forgot password?</a>
      <div className={styles.separator}>
          <span>or log in with</span>
      </div>
      <button  style={{ backgroundColor: '#3b5998', color: 'white' }} className={styles.buttonstyle}>Facebook </button>
      <button  style={{ backgroundColor: 'white', color: 'grey', border: '1px solid #ddd' }} className={styles.buttonstyle}>Google</button>
      <p>Need an account? <Link href={"/signup"}>Sign up</Link></p>
    </div>
    </div>
    </>
  )
}
