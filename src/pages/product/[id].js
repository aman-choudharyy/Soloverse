import { product } from "../../data/product";
import { useRouter } from "next/router";
import ProductCard from "../components/productcard";
import { useState } from "react";

export default function ProductDetail() {

  const router = useRouter();
  const { id } = router.query;

  const [selectedSize, setSelectedSize] = useState(null);
  const [activeImg, setActiveImg] = useState(null);
  const [fullscreen, setFullscreen] = useState(false)

  if (!id) return <p>Loading...</p>;

  const item = product.find((p) => p.id == id);

  if (!item) return <p>Loading...</p>;

  const otherProducts = product.filter((p) => p.id != id);

  const mainImage = activeImg || item.images?.[0];


  return (
    <div>

     
      <div className="product-description">

        <div className="left-description">

          <div className="big-image">
            <img src={mainImage} 
              alt="shoe"
              width="650"      
              onClick={() => setFullscreen(true)}/>
          </div>

       
          <div className="thumbnail-row">
            {item.images?.map((img, i) => (
              <img
                key={i}
                src={img}
                className="thumb "
                onClick={() => setActiveImg(img)}
              />
            ))}
          </div>

        </div>

        <div className="right-description">

          <h1>{item.name}</h1>
          <h2>₹ {item.price} MRP (Inclusive of all taxes)</h2>

          <h3>{item.colors}</h3>

          <p>
            <span>Product Description</span>
            <br />
            {item.description}
          </p>

          <p>⭐ {item.rating}</p>

          <div className="shoe-size">
            <h3>Select Size</h3>

            <div className="size-options">
              {item.sizes?.map((size) => (
                <button
                  key={size}
                  className={selectedSize === size ? "active-size" : ""}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>

          </div>

        </div>

      </div>

      {/* other products */}

      <h2 className="related-title">You May Also Like...</h2>

      <div className="related-grid">
        {otherProducts.slice(0, 8).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
      {/* FULLSCREEN PREVIEW */}

{fullscreen && (
  <div className="fullscreen-preview" onClick={() => setFullscreen(false)}>
    <img src={mainImage} alt="shoe" />
  </div>
)}

    </div>
  );
}