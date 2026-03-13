"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";


gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const textRef = useRef(null);

  const splitText = (element) => {
    const text = element.innerText;
    element.innerHTML = text
      .split("")
      .map((char) =>
        char === " "
          ? `<span>&nbsp;</span>`
          : `<span class="char">${char}</span>`
      )
      .join("");
  };
  const [active, setActive] = useState(null);

const toggleAccordion = (index) => {
  setActive(active === index ? null : index);
};

  useEffect(() => {
    const ctx = gsap.context(() => {
      splitText(textRef.current);

      gsap.from(".char", {
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
        y: 80,
        opacity: 0,
        stagger: 0.01,
        duration: 1,
        ease: "power3.out",
      });

      // Image floating
    
 
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="about-container">
    
      <div className="about-content">
        <h1>About Us</h1>
        <p className="subtitle">Crafted for Those Who Move Differently </p>
      </div>

      <div className="about-flex">

        <div className="left-about">
          <p ref={textRef}>
            Born from a vision to merge refined aesthetics with modern
            performance, SoleVerse represents a new era of elevated
            street luxury. Every silhouette we feature embodies precision,
            craftsmanship, and intentional design.
          </p>
        </div>

        <div className="right-about">
          <img
            src="/images/about.png"
            alt="shoe"
            className="about-img"
          />

          {/* <img
            src="/images/about-img1.webp"
            alt="small shoe"
            className="small-shoe" 
          />*/}
        </div>

      </div>

      <div className="about-data">
        {/* <img
           
            alt="shoe"
            className="about"
           /> */}
           
      </div>   
      <div className="about-accordion">

{/* Item 1 */}
<div className="accordion-item">
  <button
    className="accordion-title"
    onClick={() => toggleAccordion(1)}
  >
    Our Story
    <span className="icon">
    {active === 1 ? "−" : "+"}
  </span>
  </button>

  {active === 1 && (
    <div className="accordion-content">
      SoleVerse was founded to blend street culture with premium sneaker craftsmanship.
    </div>
  )}
</div>

{/* Item 2 */}
<div className="accordion-item">
  <button
    className="accordion-title"
    onClick={() => toggleAccordion(2)}
  >
    Our Mission
    <span className="icon">
    {active === 1 ? "−" : "+"}
  </span>
  </button>

  {active === 2 && (
    <div className="accordion-content">
      Our mission is to create sneakers that combine comfort,
      performance, and luxury aesthetics for everyday movement.
    </div>
  )}
</div>

{/* Item 3 */}
<div className="accordion-item">
  <button
    className="accordion-title"
    onClick={() => toggleAccordion(3)}
  >
    Materials & Craftsmanship
    <span className="icon">
    {active === 1 ? "−" : "+"}
  </span>
  </button>

  {active === 3 && (
    <div className="accordion-content">
      We carefully select premium materials to ensure durability,
      comfort, and timeless design in every pair.
    </div>
  )}
</div>

</div>
    </div>
    
  );
}