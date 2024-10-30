"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 299.99,
      quantity: 1,
      image: "/images/100-euros-banknote-first-series-obverse-1.jpg",
    },
    {
      id: 2,
      name: "Smart Watch Series X",
      price: 399.99,
      quantity: 1,
      image: "/images/100-euros-banknote-first-series-obverse-1.jpg",
    },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = cartItems.length > 0 ? 15.99 : 0;
  const total = subtotal + shipping;

  return (
    <div className={styles.cartContainer}>
      <div className={styles.cartWrapper}>
        <div className={styles.cartHeader}>
          <i className="fa-solid fa-cart-shopping"></i>
          <h1 className={styles.cartTitle}>Shopping Cart</h1>
        </div>

        <div className={styles.cartLayout}>
          <div className={styles.cartItems}>
            {cartItems.length === 0 ? (
              <div className={styles.emptyCart}>
                <p>Your cart is empty</p>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className={styles.cartItem}>
                  <div className={styles.itemImageContainer}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className={styles.itemImage}
                    />
                  </div>
                  <div className={styles.itemDetails}>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    <p className={styles.itemPrice}>Unit Price: ${item.price.toFixed(2)}</p>
                    <div className={styles.quantityControls}>
                      <button
                        className={styles.quantityButton}
                        onClick={() => updateQuantity(item.id, -1)}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                      <span className={styles.quantityDisplay}>{item.quantity}</span>
                      <button
                        className={styles.quantityButton}
                        onClick={() => updateQuantity(item.id, 1)}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                      <button
                        className={styles.removeButton}
                        onClick={() => removeItem(item.id)}
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>
                  <div className={styles.itemTotal}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))
            )}
          </div>

          <div className={styles.summaryCard}>
            <h2 className={styles.summaryTitle}>Order Summary</h2>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Subtotal</span>
              <span className={styles.summaryValue}>${subtotal.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Shipping</span>
              <span className={styles.summaryValue}>${shipping.toFixed(2)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span className={styles.summaryLabel}>Total</span>
              <span className={styles.summaryTotal}>${total.toFixed(2)}</span>
            </div>
            <button className={styles.checkoutButton}>
                <Link href={"/checkout"}>
              Proceed to Checkout
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
