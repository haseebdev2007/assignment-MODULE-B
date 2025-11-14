import React from 'react';
import { db } from '../firebase';
import { ref, push } from 'firebase/database';

function Card({ product }) {
  const handleAddToCart = () => {
    if (!product) return; // safety check

    const cartRef = ref(db, "cartItems");

    push(cartRef, {
      name: product.name,
      price: product.price,
      quantity: 1
    })
      .then(() => alert("✅ ADDED TO CART SUCCESSFULLY"))
      .catch((error) => console.error("❌ Error:", error));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "220px",
        padding: "20px",
        margin: "15px",
        textAlign: "center",
        borderRadius: "15px",
        border: "1px solid #ccc",
        background: "linear-gradient(135deg, #f0f0f0, #d9d9d9)",
        boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
        transition: "all 0.3s ease",
        cursor: "pointer"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 15px 25px rgba(0,0,0,0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.1)";
      }}
    >
      <img 
        src={product?.image || ""} 
        alt={product?.name || "Product"} 
        width="100" 
      />
      <h3>{product?.name || "Product Name"}</h3>
      <p>Rs {product?.price || 0}</p>
      <button
        onClick={handleAddToCart}
        style={{
          padding: "10px 15px",
          marginTop: "10px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          transition: "background-color 0.3s ease"
        }}
        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "darkblue"}
        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "blue"}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Card;
