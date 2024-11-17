"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Navbar from "@/components/Navbar/Navbar";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";

const notyf = new Notyf({
  position: {
    x: "right",
    y: "top",
  },
  duration: 3000, // Adjust duration if needed
  dismissible: true,
});

const Page = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [IsLoading, setIsLoading] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();

    const postData = {
      title,
      price,
      description,
      image,
      category,
    };

    try {
      const res = await fetch("/api/addProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (res.status === 200) {
        notyf.success("Product created successfully!");
      } else if (res.status === 400) {
        notyf.error("Check information");
      } else if (res.status === 500) {
        notyf.error("Server error");
      }
    } catch (error) {
      console.error("Error:", error);
      notyf.error("An error occurred while creating the post.");
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
        <button className={styles.products} href={"/products"}>
          All Products
        </button>
        <form>
          <h1 className={styles.new}>New Product</h1>
          <label className={styles.inputStyles1}>Product name</label>
          <input
            className={styles.inputStyles}
            type="text"
            placeholder="Product name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <div>
            <label className={styles.inputStyles1}>Category</label>
            <select
              name="category"
              id="category"
              className={styles.inputStyles}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="usd">USD BILLS</option>
              <option value="cad">CAD BILLS</option>
              <option value="gbp">GBP BILLS</option>
              <option value="euro">EURO BILLS</option>
            </select>
          </div>
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
                  <i
                    className="fa-solid fa-upload"
                    style={{ color: "#d1d5db3", marginRight: "6px" }}
                  ></i>
                  Upload
                </div>
              )}
              <input
                type="file"
                style={{ display: "none" }}
                onChange={handleImageChange}
              />
            </label>
          </div>
          <label className={styles.inputStyles1}>Description</label>
          <textarea
            className={styles.inputStyles2}
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <label className={styles.inputStyles1}>Price (in USD)</label>
          <input
            className={styles.inputStyles}
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </form>
        <button className={styles.saveButton} onClick={handleSubmit}>
          {IsLoading ? "Saving..." : "Save"}
        </button>
      </div>
    </>
  );
};

export default Page;
