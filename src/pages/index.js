"use client";
import { color, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { nextSlide } from "@/utils.js/slider";
import Link from "next/link";





export default function Home() {

  const shoes =[
     "/images/id2_1.webp",
     "/images/id3_1.webp",
     "/images/id7_2.avif",
     "/images/id9_1.avif",
     "/images/id12_1.webp"
  ];


  const sneaker = [
    {
      id:15,
      name: "New Balance 574",
      color: "BEIGE/ CREAM",
    
      image: "/images/swipe2.webp",
      description : "‘The most New Balance shoe ever’ says it all, right? No, actually. The 574 might be our unlikeliest icon. The 574 was built to be a reliable shoe that could do a lot of different things well rather than as a platform for revolutionary technology, or as a premium materials showcase. .",
    },
    {
      id:14,
      name: "New Balance 574",
      color: "REFLECTION /WHITE",
    
      image: "/images/swipe.webp",
      description : "‘The most New Balance shoe ever’ says it all, right? No, actually. The 574 might be our unlikeliest icon. The 574 was built to be a reliable shoe that could do a lot of different things well rather than as a platform for revolutionary technology, or as a premium materials showcase. .",
    },

    {
      id:16,
      name: "New Balance 574",
      color: "ALPHA  ORANGE",
    
      image: "/images/swipe3.webp",
      description : "‘The most New Balance shoe ever’ says it all, right? No, actually. The 574 might be our unlikeliest icon. The 574 was built to be a reliable shoe that could do a lot of different things well rather than as a platform for revolutionary technology, or as a premium materials showcase. ",
    },
    {
      id:17,
      name: "New Balance 574",
      color: "BEIGE/WHITE",
    
      image: "/images/swipe4.webp",
      description : "‘The most New Balance shoe ever’ says it all, right? No, actually. The 574 might be our unlikeliest icon. The 574 was built to be a reliable shoe that could do a lot of different things well rather than as a platform for revolutionary technology, or as a premium materials showcase. ",

    }
  ];
  const [selected, setSelected] = useState(0);

  return ( 
    
    
    <div className="main-container">
    <div className="container">
      

      <div className="left-strip">
        <div className="vertical-text">
          STYLE TAKES OVER
        </div>
      </div>

   
      <div className="right-section">

        <h1 className="bg-text">SOLOVERSE</h1>


     
        <div className="shoe">
          <Image
            src="/images/sho-preview (2).png"
            alt="SoleVerse Sneaker"
            width={710}
            height={300}

          />
        </div>
        <div className="right-one-line">
           PERFORMANCE • DESIGN • IDENTITY
        </div>

        <div className="bottom-content">
          <p className="tagline">
             Move different<span color="#003e53"> Walk legendary</span>.
           </p>

  <p className="description">
  
    SoloVerse blends performance innovation with timeless street luxury.
  </p>
  <button className="shop-btn">
  <a
  href="/shop/"
  style={{ color: "white", textDecoration: "none" }}
>  SHOP NOW
</a></button>
</div>

      </div>
   

    </div>
    <div className="drop-section">
      <Image
            src="/images/line.svg"
            alt="SoleVerse Sneaker"
            width={1000}
            height={300}
            className="grid-line"
          />
        <div className="drop-content">
        <h1 className="drop-title">
          <span>STEP INTO</span> STYLE
        </h1>
        <p className="drop-sub">
            Hottest <span>Drip</span> From <span>Around</span> The <span>World.</span> Refreshed <span>Daily</span>.
       </p>
        </div>

        <div className="product-layout">
          <Link href="/product/2" className="product small left1">
          <img src="/images/id2_1.webp" alt="shoe" width="350"/>
          </Link>

          <Link href="/product/3" className="product small left2">
          <img src="/images/id3_1.webp" alt="shoe" width="350"/>
          </Link>

          <Link href="/product/7" className="product center">
          <img src="/images/id7_1.avif" alt="shoe" width="350"/>     
          </Link>

          <Link href="/product/9" className="product small right1">
          <img src="/images/id9_1.avif" alt="shoe" width="350"/>
          </Link>

          <Link href="/product/12" className="product small right2">
          <img src="/images/id12_1.webp" alt="shoe" width="350"/>
          </Link>
          
          <div className="center-shadow"></div>
        </div>               
              </div>   
            
          <div className="brand-section">
            <motion.div
              className="brand-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }} >
                <img src="/images/shoe1.avif"  alt="shoe"width="100"  />
                <div className="brand-overlay"><Link   className="shop-link" href="./shop">SHOE</Link></div>               
            </motion.div>

            <motion.div
              className="brand-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }} >
                <img src="/images/shoe2.avif" alt="shoe"width="200"  />
                <div className="brand-overlay"><Link  className="shop-link" href="./shop">BOOTS</Link></div>               
            </motion.div>

            <motion.div
              className="brand-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.9 }} >
                <img src="/images/shoe3.avif" alt="shoe"width="200"  />
                <div className="brand-overlay"><Link    className="shop-link"href="./shop">SNEAKER</Link></div>               
            </motion.div>

            <motion.div
              className="brand-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.9 }} >
                <img src="/images/shoe4.jpg" alt="shoe"width="200"  />
                <div className="brand-overlay"><Link   className="shop-link" href="./shop">SPORTS</Link></div>               
            </motion.div>

          </div>


          <div className="showcase">
            <div className="image-section">
              {sneaker.map((shoe, index) => (
                <Link key={shoe.id} href={`/product/${shoe.id}`}>
                  <img 
                  src={shoe.image}
                  alt={shoe.color}
                  onClick={() => setSelected(index)}
                  className={selected === index ? "main-img active" : "main-img"}
                  />
                </Link>
               ))}
            </div>
   
             <div className="details">
              <h2>{sneaker[selected].name}</h2>
              <h3>{sneaker[selected].color}</h3>
              <p className="price">{sneaker[selected].price}</p>
              <p className="desc">{sneaker[selected].description}</p>

            <div className="color-thumbs">
              {sneaker.map((shoe, index) => (
              <img
                key={shoe.id}
                src={shoe.image}
                alt=""
                onClick={() => setSelected(index)}
                className={selected === index ? "thumb active-thumb" : "thumb"} />
            ))}
        </div>
      </div>
    </div>     
    <div className="landing">

<div className="landing_hero">


  <div className="landing_content">
    <h1 className="landing_title_left">
      MOVE <br />
      <span>FASTER</span>
    </h1>
    
    

    <div className="landing_stats">
      <p><strong>120K</strong><br />Happy Customers</p>
      <p><strong>100%</strong><br />Premium Quality</p>
    </div>

    <button className="shop-btn">
      <a  href="/shop/"  style={{ color: "white", textDecoration: "none" }}>  SHOP NOW</a>
    </button>
   
   </div>

   <img
    src="/images/nike.webp"
    alt="shoe"
    className="landing_shoe"
   />

  
  <div className="landing_features">
    <div className="features_small">
      <p>Zero Limits</p>
      <p>All-Day Comfort</p>
      <p color="black"><strong>Lightweight Design</strong></p>
      <p>Built to Perform</p>
    </div>

    <h2 className="landing_title_right">
      STEP <br />
      <span>FURTHER</span>
    </h2>
  </div>
</div>
</div>




 </div>
    
  );
}

// export default function Home() {
//     return (
//       <div className="container">
//       <div className="left-container">
//         <h1>Welcome <br/>to  SoloVerse</h1>
//         <p>
//         Own Every Step You Take
//         </p>
//         <button className="shop-btn">Shop Now</button>
//       </div>
    
//       <div className="right-container">
//         <Image
//           src="/images/sneaker1.png"
//           alt="SoleVerse Shoes"
//           width={650}
//           height={500}         
//           priority
//           className="hero-image"
//         />
//       </div>
//     </div>
    
//     );
//   }
  