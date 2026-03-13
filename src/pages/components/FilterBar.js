"use client";

import { useState } from "react";

export default function FilterBar({ setCategory, setPrice, setColor }) {

  const [openMenu, setOpenMenu] = useState(null);

  return (
    <div className="filter-bar">

      <h2>Filters</h2>

      <div className="dropdown">
        <button onClick={() => setOpenMenu(openMenu === "category" ? null : "category")}>
          Category
        </button>

        {openMenu === "category" && (
          <ul>
            <li onClick={() => {setCategory("all"); setOpenMenu(null)}}>All</li>
            <li onClick={() => {setCategory("sports"); setOpenMenu(null)}}>Sports</li>
            <li onClick={() => {setCategory("sneaker"); setOpenMenu(null)}}>Sneaker</li>
            <li onClick={() => {setCategory("boots"); setOpenMenu(null)}}>Boots</li>
          </ul>
        )}
      </div>

      
      <div className="dropdown">
        <button onClick={() => setOpenMenu(openMenu === "price" ? null : "price")}>
          Price
        </button>

        {openMenu === "price" && (
          <ul>
            <li onClick={() => {setPrice("low"); setOpenMenu(null)}}>Below ₹5000</li>
            <li onClick={() => {setPrice("high"); setOpenMenu(null)}}>Above ₹5000</li>
          </ul>
        )}
      </div>

     
      <div className="dropdown">
        <button onClick={() => setOpenMenu(openMenu === "color" ? null : "color")}>
          Color
        </button>

        {openMenu === "color" && (
          <ul>
        
            <li onClick={() => {setColor("black"); setOpenMenu(null)}}>Black</li>
            <li onClick={() => {setColor("white"); setOpenMenu(null)}}>White</li>
            <li onClick={() => {setColor("grey"); setOpenMenu(null)}}>Grey</li>
            <li onClick={() => {setColor("blue"); setOpenMenu(null)}}>Blue</li>
            <li onClick={() => {setColor("brown"); setOpenMenu(null)}}>Brown</li>
            <li onClick={() => {setColor("green"); setOpenMenu(null)}}>Green</li>
          </ul>
        )}
      </div>

    </div>
  );
}