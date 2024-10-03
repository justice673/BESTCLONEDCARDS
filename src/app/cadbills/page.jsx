"use client";
import Navbar from "@/components/Navbar/Navbar";
import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";

export default function Page() {
  const [sortOption, setSortOption] = useState("default");
  //   const [searchTerm, setSearchTerm] = useState(""); // Search term state
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    {
      id: 1,
      image: "/images/x-box2.jpeg",
      name: "Counterfeit $5 CAD Bills",
      price: 500,
      rating: 4,
      popularity: 90,
      sale: 5,
    },
    {
      id: 2,
      image: "/images/samsunglappi-1.jpg",
      name: "Counterfeit $10 CAD Bills",
      price: 1000,
      rating: 4,
      popularity: 85,
      sale: 10,
    },
    {
      id: 3,
      image: "/images/iphone14pro-1.jpg",
      name: "Counterfeit $20 CAD Bills",
      price: 2000,
      rating: 5,
      popularity: 70,
      sale: 15,
    },
    {
      id: 4,
      image: "/images/ps5-1.jpg",
      name: "Counterfeit $50 CAD Bills",
      price: 5000,
      rating: 4.5,
      popularity: 95,
      sale: 20,
    },
    {
      id: 5,
      image: "/images/iphone14pro-1.jpg",
      name: "Counterfeit $100 CAD Bills",
      price: 7000,
      rating: 5,
      popularity: 75,
      sale: 25,
    },
  ];

  // Handle sort option change
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Handle search input change
  //   const handleSearchChange = (e) => {
  //     setSearchTerm(value.toLowerCase());
  //   };

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
  // Filter and sort products based on search query
  const filteredProducts = sortedProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <div className={styles.navbar}>
        {/* Pass handleSearchChange to Navbar if the search input is inside Navbar */}
        <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      </div>
      <div className={styles.main}>
        <h1 className={styles.mainh}>Counterfeit CAD Bills</h1>
      </div>
      <div className={styles.main2}>
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
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className={styles.cart1} key={product.id}>
              <Image
                src={product.image}
                width={250}
                height={250}
                alt={product.name}
              />
              <h4>{product.name}</h4>
              <p>${product.price.toLocaleString("en-CA")} CAD</p>
              <div className={styles.rating}>
                {[...Array(5)].map((_, i) => (
                  <i
                    key={i}
                    className={
                      i < product.rating
                        ? "fa-solid fa-star"
                        : "fa-regular fa-star"
                    }
                  ></i>
                ))}
              </div>
              <button className={styles.shopBtn}>
                <i className="fa-solid fa-cart-shopping" /> SHOP NOW
              </button>
            </div>
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
      <div className={styles.container}>
        <section className={styles.section}>
          <h2 className={styles.heading}>Counterfeit Money / Prop Money</h2>
          <p>
            Canadian Counterfeit Banknotes are currencies produced without the
            legal sanction of a state or government, usually in a deliberate
            attempt to imitate that currency and to deceive its recipient. It
            can also be defined as currency that is produced without the legal
            sanction of the state or government to resemble some official form
            of currency closely enough that it may be confused for genuine
            currency. Producing or using counterfeit money is a form of fraud or
            forgery, and is illegal.
          </p>
          <p>
            The business of counterfeiting money is almost as old as money
            itself: plated copies (known as Fourrées) have been found of Lydian
            coins, which are thought to be among the first Western coins. Before
            the introduction of paper money, the most prevalent method of
            counterfeiting involved mixing base metals with pure gold or silver.
            Another form of counterfeiting is the production of documents by
            legitimate printers in response to fraudulent instructions. Today
            some of the finest <span> counterfeit banknotes </span> are called{" "}
            <span> Superdollars </span> because of their high quality and
            imitation of the real <span> CAD dollar </span>. There has been
            significant counterfeiting of <span> Euro banknotes </span> and
            coins since the launch of the currency in 2002, but considerably
            less than that of the US dollar.{" "}
            <Link href={"/"}> buy cloned credit cards online. </Link>
            {" "}
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>
            Effects / Penalties of Using Canadian Counterfeit Banknotes
          </h2>
          <p>
            {" "}
            One of the effects counterfeit money has on society is a reduction
            in the value of real money i.e. inflation due to more money getting
            circulated in the economy. An unauthorized artificial increase in
            the money supply; a decrease in the acceptability of paper money;
            and losses, when traders are not reimbursed for counterfeit money
            detected by banks, even if it is confiscated. Traditionally,
            anti-counterfeiting measures involved including fine detail with
            raised intaglio printing on bills which allows non-experts to easily
            spot forgeries. On coins, milled or reeded (marked with parallel
            grooves) edges are used to show that none of the valuable metal has
            been scraped off. The use of counterfeit currency can violate both
            federal and state law. A person suspected of passing fake money may
            be charged with one or more crimes, including forgery, fraud, or
            other theft-related offenses.{" "}
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>
            How to spot Canadian Counterfeit Banknotes / CAD Bill
          </h2>
          <p>
            The best way the difference between{" "}
            <span>Canadian Counterfeit Banknotes</span> and real is in the
            texture. Genuine Canadian Banknotes money have distinctive texture.
            Canadian bills are printed on a special polymer paper that feels
            smooth and like plastic.{" "}
            <span>
              If you touch a bill and it doesn&#39;t feel right or familiar, it
              might be a counterfeit.
            </span>
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>
            Payment methods used to buy counterfeit CAD bills online
          </h2>
          <p>
            We have compiled a list of payment methods you can use to purchase
            CAD bills online. These methods are secured and depend on your
            location as not all locations/countries support these methods, we
            have done our best to make we cover for some countries. Please click
            here to read on <span> payment methods </span>
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>
            How does Canadian Counterfeit Banknotes work / Uses of counterfeit
            money
          </h2>
          <p>
            The allure of counterfeiting is obvious. If you could do it without
            getting caught, you would be able to print your own money and buy
            whatever you want with it. Counterfeiting is the ultimate technology
            for people who want to get something for nothing.
          </p>
          <p>
            In the not-too-distant past, counterfeiting was a difficult and
            expensive endeavor. It required large printing presses and the
            ability to cut intricate designs by hand into metal plates. Today,
            it&#39;s much easier to create counterfeit bills. As thousands of
            teenagers discover every year, if you&#39;re willing to break the law,
            you can create fake money with a computer, a scanner and a color
            printer in about 10 minutes. Though whether it will pass muster is
            another story.
          </p>
          <p>
            Let&#39;s say that you would like to start a life of crime by
            creating your own counterfeit currency. The easiest way to print
            your own money is to use your computer. If you own a scanner and a
            printer, it is pretty easy to get started.
          </p>
          <p>
            The first thing you would do is put a $20 bill on your scanner. Then
            you would set the scanner for its highest resolution — perhaps 2,500
            or 4,000 dpi — and scan an image of the bill. Your scanner would
            drop a file on your hard drive, which you&#39;d print out to use as
            money.
          </p>
          <p>
            However, your stint as a counterfeiter wouldn&#39;t be very
            successful. The $20 bill that&#39;s been in circulation in the
            United States since late 2003 is one of the high-tech
            counterfeit-proof bills from the U.S. Treasury. If you zoom in on
            different areas of the bill and look at them closely, you can see a
            number of features designed to deter “casual counterfeiting.” But
            first, we&#39;ll look at the printing of bills.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>
            Why Buy counterfeit CAD bills from Counterfeit sales?
          </h2>
          <p>
            <span> At Counterfeit Sales </span>, you will find a wide range of{" "}
            <span> counterfeit money </span> For Sale at good rates. Counterfeit
            money is money where you get exact copy of original currency like{" "}
            <span> dollar, pounds, euros and many more currencies. </span>
          </p>
          <p></p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>
            Where to buy Canadian Counterfeit Banknotes online?
          </h2>
          <p>
            <span> Buy fake money online from the best suppliers </span>. You
            can use them for doing any kind of payment without thinking of being
            caught. No banker or any scanner machine will be able to detect it
            as they are <span> undetectable counterfeit money </span>.{" "}
            <span>
              {" "}
              Buy counterfeit dollar bills, Buy counterfeit euro bills, Buy
              counterfeit GBP banknotes
            </span>{" "}
            and other currencies from number one suppliers in the Market.
          </p>
          <p>
            {" "}
            <span> Note </span> We are not responsible for what you use our prop
            money for.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
}