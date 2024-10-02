'use client';
import Navbar from "@/components/Navbar/Navbar";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";

export default function Page() {
  const [sortOption, setSortOption] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    {
      id: 1,
      image: "/images/x-box2.jpeg",
      name: "Counterfeit €5 Euro Bills",
      price: 310,
      rating: 4,
      popularity: 90,
      sale: 5
    },
    {
      id: 2,
      image: "/images/samsunglappi-1.jpg",
      name: "Counterfeit €10 Euro Bills",
      price: 500,
      rating: 4,
      popularity: 85,
      sale: 10
    },
    {
      id: 3,
      image: "/images/iphone14pro-1.jpg",
      name: "Counterfeit €20 Euro Bills",
      price: 200,
      rating: 5,
      popularity: 70,
      sale: 15
    },
    {
      id: 4,
      image: "/images/ps5-1.jpg",
      name: "Counterfeit €50 Euro Bills",
      price: 1000,
      rating: 4.5,
      popularity: 95,
      sale: 20
    },
    {
      id: 5,
      image: "/images/iphone14pro-1.jpg",
      name: "Counterfeit €100 Euro Bills",
      price: 700,
      rating: 5,
      popularity: 75,
      sale: 25
    }
  ];

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Sorting logic based on the selected option
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

  // Filtering products based on search query
  const filteredProducts = sortedProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className={styles.navbar}>
        {/* Pass searchQuery and setSearchQuery to Navbar */}
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
        {/* Display filtered products */}
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className={styles.cart1} key={product.id}>
              <Image src={product.image} width={250} height={250} alt={product.name} />
              <h4>{product.name}</h4>
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
      <Footer />
    </div>
  );
}
