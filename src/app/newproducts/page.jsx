"use client";
import React, { useState } from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar/Navbar';

const Page = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imagePreview, setImagePreview] = useState(null);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    if (file) {
      setImagePreview(URL.createObjectURL(file)); // Create a preview URL for the image
    }
  };

  return (
    <>
        <div className={styles.navbar}>
          <Navbar/>
        </div>
        <div className={styles.mainLeft}>
          <form onSubmit={handleSubmit}>
            <h1 className={styles.new}>New Product</h1>
            <label className={styles.inputStyles1}>Product name</label>
            <input 
              className={styles.inputStyles} 
              type="text" 
              placeholder='Product name' 
              value={title} 
              onChange={e => setTitle(e.target.value)} 
            />
            <label className={styles.inputStyles1}>Photo</label>
            <div className={styles.photo}>
              <label className={styles.addPhoto}>
                {/* Image Preview */}
                {imagePreview ? (
                  <Image src={imagePreview} alt="Selected preview" className={styles.previewImage}  width={200}  height={200}  />
                ) : (
                  <div>
                    <i className="fa-solid fa-upload" style={{ color: "#d1d5db3", marginRight: "6px" }}></i>
                    Upload
                  </div>
                )}
                <input 
                  type="file" 
                  style={{ display: "none" }} 
                  onChange={handleImageChange} // Attach the event handler
                />
              </label>
            </div>
            <label className={styles.inputStyles1}>Description</label>
            <textarea 
              className={styles.inputStyles2} 
              placeholder='Description' 
              value={description} 
              onChange={e => setDescription(e.target.value)} 
            />
            <label className={styles.inputStyles1}>Price (in USD)</label>
            <input 
              className={styles.inputStyles} 
              type="number" 
              placeholder='Price' 
              value={price} 
              onChange={e => setPrice(e.target.value)} 
            />
          </form>
            <button className={styles.saveButton} type="submit">Save</button>
        </div>
    </>
  );
};

export default Page;
