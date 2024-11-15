"use client";
import Navbar from "@/components/Navbar/Navbar";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";

export default function Page() {
  const [products, setProducts] = useState([]);
  const [sortOption, setSortOption] = useState("default");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/addProduct"); // Replace with your actual endpoint
        const data = await response.json();
        setProducts(data);
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
        <h1 className={styles.mainh}>Counterfeit GBP Bills</h1>
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
      <section className={styles.section}>
          <h2 className={styles.heading}>
            {" "}
            Counterfeit Money / Prop Money / GBP Counterfeit Banknotes
          </h2>
          <p>
            GBP Counterfeit Banknotes are currencies produced without the legal
            sanction of a state or government, usually in a deliberate attempt
            to imitate that currency and so as to deceive its recipient. It can
            also be defined as a currency that is produced without the legal
            sanction of the state or government to resemble some official form
            of currency closely enough that it may be confused for genuine
            currency. Producing or using counterfeit money is a form of fraud or
            forgery, and is illegal.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>GBP Counterfeit Banknote</h2>
          <p>
            The business of counterfeiting money is almost as old as money
            itself: plated copies (known as Fourrées) have been found of Lydian
            coins, which are thought to be among the first Western coins. Before
            the introduction of paper money, the most prevalent method of
            counterfeiting involved mixing base metals with pure gold or silver.
            Another form of counterfeiting is the production of documents by
            legitimate printers in response to fraudulent instructions. Today
            some of the finest counterfeit banknotes are called Superdollars
            because of their high quality and imitation of the real US dollar.
            There has been significant counterfeiting of Euro banknotes and
            coins since the launch of the currency in 2002, but considerably
            less than that of the US dollar. Get your{" "}
            <span> clone credit cards online </span> today from us as well.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>
            Effects / Penalties of Using GBP Counterfeit Banknotes
          </h2>
          <p>
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
            been scraped off.
          </p>
          <p>
            The use of counterfeit currency can violate both federal and state
            law. A person suspected of passing fake money may be charged with
            one or more crimes, including forgery, fraud, or other theft-related
            offenses. Examples of state penalties are below. Maryland law, for
            example, prohibits a person from knowingly possessing or issuing,
            with unlawful intent, counterfeit U.S. currency. Violation of this
            statute is a misdemeanor carrying up to three years&#39;imprisonment
            and a $1,000 fine.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>
            How to Buy Fake GBP Bills / GBP Counterfeit Banknotes
          </h2>
          <p>
            Due to the legality situation of prop money and counterfeit AUD
            bills people have to learn How to Buy Euro bills Online Securely.
            This is because counterfeit sector is a tricky one when it comes to
            payments online. There are so many problems a consumer might face
            when trying to buy cannabis online. This includes:
          </p>
          <p>
            Legal Issues: In many countries and states, counterfeit bills are
            not legal, and carrying them with the intent to deceive any receiver
            is punishable by law when proven. Fraud: Because counter Euro bills
            are illegal, this has made it a breathing ground for scammers and
            fraudsters. This is often the case when you try to purchase fake
            Euro Banknotes online.
          </p>
          <p>
            Credit Card and Bank Details Theft: This is also a rising issue of
            concern in the counterfeit money for sale industry as many websites
            out there are more of phishing websites. Owners of such websites
            trick individuals into putting in their bank and credit details.
          </p>
          <p>
            The few points listed above are just a few of some of the dangers
            associated with purchasing Euro banknotes online. In this article,
            we teach you how buy prop AUD bills online securely. This will cover
            the best payment method when buying prop money. So how do you
            protect yourself when buying fake money online?
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>
            How to spot GBP Counterfeit Banknotes / GBP Bill
          </h2>
          <p>
            On the front of the polymer notes (the side with raised print), the
            value can be identified by the number of clusters of raised dots in
            the top left corner. The £5 has none, the £10 has two, the £20 has
            three and the £50 has four clusters.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>
            Payment methods used to buy counterfeit British Pound bills online
          </h2>
          <p>
            We have compiled a list of payment methods you can use to purchase
            AUD bills online. These methods are secured and depend on your
            location as not all locations/countries support these methods, we
            have done our best to make we cover for some countries. Please click
            here to read on payment methods
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>
            How does GBP Counterfeit Banknotes work / Uses of counterfeit money
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
            In this article, we will look at the technology of counterfeiting.
            You&#39;ll learn about the techniques that you might use if you wanted
            to create your own counterfeit bills. We&#39;ll also discuss the
            punishment that you will receive when you get caught trying out
            these techniques. In the process, you will learn how to detect
            “funny money” yourself and discover whether the U.S. money supply is
            vulnerable to collapse from a sea of counterfeit bills.
          </p>
          <p>
            Let&#39;s say that you would like to start a life of crime by creating
            your own counterfeit currency. The easiest way to print your own
            money is to use your computer. If you own a scanner and a printer,
            it is pretty easy to get started.
          </p>
          <p>
            The first thing you would do is put a $20 bill on your scanner. Then
            you would set the scanner for its highest resolution — perhaps 2,500
            or 4,000 dpi — and scan an image of the bill. Your scanner would
            drop a file on your hard drive, which you&#39;d print out to use as
            money.
          </p>
          <p>
            However, your stint as a counterfeiter wouldn&#39;t be very successful.
            The $20 bill that&#39;s been in circulation in the United States since
            late 2003 is one of the high-tech counterfeit-proof bills from the
            U.S. Treasury. If you zoom in on different areas of the bill and
            look at them closely, you can see a number of features designed to
            deter “casual counterfeiting.” But first, we&#39;ll look at the printing
            of bills
          </p>
          <p>
            Why Buy counterfeit British Pound bills from Discreet Cloned Cards?
          </p>
          <p>
            At Best Cloned Cards, you will find a wide range of counterfeit
            money For Sale at good rates. Counterfeit money is money where you
            get exact copy of original currency like dollar, pounds, euros and
            many more currencies.
          </p>
        </section>
        <section className={styles.section}>
          <h2 className={styles.heading}>
            Where to buy GBP Counterfeit Banknotes online?
          </h2>
          <p>
            Buy fake money online from the best suppliers. You can use them for
            doing any kind of payment without thinking of being caught. No
            banker or any scanner machine will be able to detect it as they are
            undetectable counterfeit money. Buy counterfeit dollar bills, Buy
            counterfeit euro bills, Buy counterfeit GBP banknotes and other
            currencies from number one suppliers in the Market.
          </p>
        </section>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
