"use client";
import Navbar from "@/components/Navbar/Navbar";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

export default function Page() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOption, setSortOption] = useState("default");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/addProduct", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Fetched products:", data); // Debug log
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSortOption(value);
    
    const sortedProducts = [...products].sort((a, b) => {
      switch (value) {
        case 'price':
          return a.price - b.price;
        // Add other sorting cases as needed
        default:
          return 0;
      }
    });
    
    setProducts(sortedProducts);
  };

  return (
    <>
      <Navbar />
      <div className={styles.main}>
        <div className={styles.main2}>
          <h2>All Products</h2>
          <select
            className={styles.select}
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="default">Default sorting</option>
            <option value="price">Sort by price</option>
            <option value="rating">Sort by rating</option>
            <option value="popularity">Sort by popularity</option>
            <option value="sale">Sort by sale</option>
          </select>
        </div>

        <div className={styles.cart}>
          {loading ? (
            <p>Loading products...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : products.length > 0 ? (
            products.map((product) => (
              <div key={product._id} className={styles.cart1}>
                <Image 
                  src={product.image} 
                  alt={product.title} 
                  width={250} 
                  height={250}
                  priority={true}
                  onError={(e) => {
                    console.log('Image error:', e);
                    e.target.src = '/placeholder.jpg'; // Add a placeholder image
                  }}
                />
                <h4>{product.title}</h4>
                <p>${product.price.toFixed(2)}</p>
                <div className={styles.rating}>
                  {Array.from({ length: 5 }, (_, index) => (
                    <i
                      key={index}
                      className={`fa-star ${
                        index < (product.rating || 0) ? "fa-solid" : "fa-regular"
                      }`}
                    ></i>
                  ))}
                </div>
                <button className={styles.shopBtn}>
                  <Link href={"/addtocart"}>
                  <i className="fa-solid fa-cart-shopping" /> SHOP NOW
                  </Link>
                </button>
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}