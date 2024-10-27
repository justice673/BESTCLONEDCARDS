"use client";
import { useState } from 'react';
import styles from './page.module.css';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      services: checked
        ? [...prevData.services, name]
        : prevData.services.filter((service) => service !== name),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (

    <div className={styles.container}>
       
            <Link href={"/"} className={styles.backButton}>
            Back to home
            </Link>

        <h1>CONTACT US</h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.nameFields}>
          <div className={styles.inputGroup}>
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First name"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="lastName">Last name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last name"
            />
          </div>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="you@company.com"
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Leave us a message..."
          ></textarea>
        </div>

        <button type="submit" className={styles.submitButton}>
          Send message
        </button>
      </form>
    </div>
  );
}