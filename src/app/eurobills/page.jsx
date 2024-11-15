'use client';
import Navbar from "@/components/Navbar/Navbar";
import React, { useState, useEffect } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";

export default function Page() {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch products from the database
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/addProduct");
        if (res.ok) {
          const data = await res.json();
          setProducts(data);
        } else {
          console.error("Failed to fetch products");
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Sort products based on selected option
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOption) {
      case "price":
        return a.price - b.price;
      case "rating":
        return b.rating - a.rating;
      case "popularity":
        return b.popularity - a.popularity;
      case "sale":
        return b.sale - a.sale;
      default:
        return 0;
    }
  });

  // Filter products based on search query
  const filteredProducts = sortedProducts.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className={styles.navbar}>
        <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      </div>
      <div className={styles.main}>
        <h1 className={styles.mainh}>Counterfeit Euro Bills</h1>
      </div>
      <div className={styles.main2}>
        <select className={styles.select} value={sortOption} onChange={handleSortChange}>
          <option value="default">Default sorting</option>
          <option value="price">Sort by price</option>
          <option value="rating">Sort by rating</option>
          <option value="popularity">Sort by popularity</option>
          <option value="sale">Sort by sale</option>
        </select>
      </div>
      <div className={styles.cart}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className={styles.cart1} key={product._id}>
              <Image src={product.image} width={250} height={250} alt={product.title} />
              <h4>{product.title}</h4>
              <p>${product.price}</p>
              <div className={styles.rating}>
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={i < product.rating ? "fa-solid fa-star" : "fa-regular fa-star"}
                  ></i>
                ))}
              </div>
              <button className={styles.shopBtn}>
                <i className="fa-solid fa-cart-shopping" /> SHOP NOW
              </button>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
      <div className={styles.container}>
        {/* Additional sections here */}
      </div>
      <Footer />
    </div>
  );
}
