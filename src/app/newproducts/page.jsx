"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import Navbar from "@/components/Navbar/Navbar";
import { Notyf } from "notyf";
import 'notyf/notyf.min.css';


const Page = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5000000) { // 5MB limit
        alert("File is too large. Please select an image under 5MB");
        return;
      }
      
      setIsLoading(true); // Set loading while reading the image


      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setIsLoading(false); // End loading after reading the image
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const notyf = new Notyf({
      position: { x: "right", y: "top" },
      duration: 3000
    });

    // Validation
    if (!title || !description || !price || !image) {
      notyf.error("All fields are required");
      return;
    }

    setIsLoading(true);
    setError("");

    const postData = {
      title: title.trim(),
      description: description.trim(),
      price: Number(price),
      image
    };

    try {
      const res = await fetch("/api/addProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      const result = await res.json();

      if (res.ok) {
        notyf.success("Product created successfully!");
        // Clear form
        setTitle("");
        setDescription("");
        setPrice("");
        setImage(null);
        // Redirect to products page
        router.push('/products');
      } else {
        console.log("Response status:", res.status);
        console.log("Response data:", result);
        notyf.error(result.error || "Failed to create product");   
         }
    } catch (error) {
      console.error("Error:", error);
      notyf.error(error.message || "An error occurred while creating the product");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={styles.navbar}>
        <Navbar />
      </div>
      <div className={styles.mainLeft}>
        <Link href="/products" className={styles.products}>
          All Products
        </Link>
        <form onSubmit={handleSubmit}>
          <h1 className={styles.new}>New Product</h1>
          
          <div className={styles.formGroup}>
            <label className={styles.inputStyles1}>Product name</label>
            <input
              className={styles.inputStyles}
              type="text"
              placeholder="Product name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={isLoading}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.inputStyles1}>Photo</label>
            <div className={styles.photo}>
              <label className={styles.addPhoto}>
                {image ? (
                  <Image
                    src={image}
                    alt="Selected preview"
                    className={styles.previewImage}
                    width={200}
                    height={200}
                  />
                ) : (
                  <div>
                    <i className="fa-solid fa-upload" style={{ marginRight: "6px" }}></i>
                    Upload
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                  disabled={isLoading}
                />
              </label>
            </div>
          </div>

          <div className={styles.formGroup}>
            <label className={styles.inputStyles1}>Description</label>
            <textarea
              className={styles.inputStyles2}
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              disabled={isLoading}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.inputStyles1}>Price (in USD)</label>
            <input
              className={styles.inputStyles}
              type="number"
              min="0"
              step="0.01"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              disabled={isLoading}
              required
            />
          </div>

          <button 
            type="submit" 
            className={styles.saveButton}
            disabled={isLoading}
          >
            {isLoading ? "Saving..." : "Save"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Page;