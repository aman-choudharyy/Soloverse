

  import Link from "next/link";

  export default function ProductCard({ product }) {
  
    return (
      <div className="product-card">      

  
 
  
        <div className="product-card">
        <Link href={`/product/${product.id}`} style={{ textDecoration: "none" }}>
          <img src={product.image} width="450"/>  </Link>
          </div>
          <Link href={`/product/${product.id}`} style={{ textDecoration: "none" }}>
        <div className="product-info">
          <h4>{product.name}</h4>
        </div>
              </Link>

        </div>
  

  
    );
  
  }

