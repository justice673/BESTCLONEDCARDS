"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import { Notyf } from "notyf";

const Page = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);
  const [IsLoading, setIsLoading] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
    const nowDate = new Date();
  };

  const handleSubmit = async (e) => {
    const notyf = new Notyf({
      position: {
        x: "right",
        y: "top",
      },
    });
    setIsLoading(true);
    e.preventDefault();

    const postData = {
      title,
      price,
      description,
      image,
    };
    console.log({
      title,
      price,
      description,
      image,
    });

    console.log("Submitting data:", postData);

    try {
      const res = await fetch("/api/addProduct", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      console.log("Response status:", res.status);
      const result = await res.json();
      console.log("Response data:", result);

      if (res.status === 200) {
        setIsLoading(false);
        notyf.success("Product created successfully!");
        // navigation.push(`/pd-page/allpd`);
      } else if (res.status === 400) {
        setIsLoading(false);
        notyf.error("Check information");
      } else if (res.status === 500) {
        setIsLoading(false);
        notyf.error("Server error");
      }
    } catch (error) {
      setIsLoading(false);
      console.error("Error:", error);
      notyf.error("An error occurred while creating the post.");
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
          <label className={styles.inputStyles1}>Photo</label>
          <div className={styles.photo}>
            <label className={styles.addPhoto}>
              {/* Image Preview */}
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
                onChange={handleImageChange} // Attach the event handler
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
