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
      <div className={styles.container}>
        <section className={styles.section}>
          <h2 className={styles.heading}>High-Quality Euro Fake Bank Notes for Sale  Counterfeit Euro Bills for sale</h2>
          <p>
          In search of authentic-looking counterfeit Euro banknotes that closely mirror the real currency? Your quest concludes with our premium-grade Euro fake banknotes! Crafted with precision and meticulous attention to detail, our counterfeit Euro bills boast a genuine look and feel.
          </p>
          <p>Cutting-Edge Printing Techniques:</p>
          <p>Our counterfeit Euro notes are produced using state-of-the-art printing techniques, ensuring an uncanny resemblance to authentic Euro notes in terms of appearance, texture, and security features. Whether you require fake Euro bills for personal or professional purposes, our counterfeit money offers the perfect solution.</p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>Euro Counterfeit Money For Sale</h2>
          <p>Versatile Denominations:</p>
          <p>Available in a range of denominations, including 5, 10, 20, 50, 100, and 200 Euro bills, each note undergoes careful craftsmanship to meet our stringent standards of quality and authenticity. Order now and indulge in the authentic look and feel of Euro banknotes without straining your budget!</p>
          <p>Product Details:</p>
          <p> <span>Product Type: </span> Counterfeit Euro banknotes</p>
          <p>Our counterfeit Euro banknotes are characterized by the following specifications:</p>
          <ul>
            <li>Printed on high-quality paper using precision printing techniques.</li>
            <li>Security features, including watermarks, security threads, and holograms, are incorporated.</li>
            <li>Available in denominations of 5, 10, 20, 50, and 100 Euro bills.</li>
            <li>Each note undergoes meticulous inspection and quality testing before shipping.</li>
            <li>Dimensions: Vary depending on denomination.</li>
         </ul>
         <p>If you&#39;re in search of remarkably realistic and high-quality counterfeit Euro banknotes, your search ends here. Our fake Euro notes are virtually indistinguishable from the genuine ones and are offered in various denominations to cater to your specific needs. Place your order now and revel in the authentic look and feel of Euro banknotes without straining your finances.</p>
        </section>
      </div>
      <Footer />
    </div>
  );
}
