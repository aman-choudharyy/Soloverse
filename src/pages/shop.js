"use client";

import { useState } from "react";
import { product} from "./product";
import FilterBar from "./components/FilterBar";
import ProductCard from "./components/productcard";

export default function ShopPage() {
  const [category, setCategory] = useState("all");
  const [price, setPrice] = useState("all");
  const [color, setColor] = useState("all");

  let filteredProducts = product;

  if (category !== "all") {
    filteredProducts = filteredProducts.filter(p => p.category === category);
  }

  if (color !== "all") {
    filteredProducts = filteredProducts.filter(p => p.color === color);
  }

  if (price === "low") {
    filteredProducts = filteredProducts.filter(p => p.price < 5000);
  }

  if (price === "high") {
    filteredProducts = filteredProducts.filter(p => p.price >= 5000);
  }

  return (
    <div className="shop-container">

      <FilterBar
        setCategory={setCategory}
        setPrice={setPrice}
        setColor={setColor}
      />

      <div className="shop-img" style={{
       
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "10px",
        padding: "20px"
      }}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
}