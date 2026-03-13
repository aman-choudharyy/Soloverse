import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <nav className="navbar">
       <div className="left">
      <div className="logo">
        <Link  href="/">
      <Image
          src="/images/header-logo.png"
          alt="logo"   width={0}
          height={0}
          sizes="100vw"
          style={{ width: "190px", height: "auto" }}
        />
        </Link>
      </div>
     
      <ul className="navlinks">
        <li className="item"><Link href="/">Home</Link></li>

      <li className="item dropdown">
        <span className="dropdownTitle"><Link href="/shop/">Shop</Link></span>
        {/* <ul className="dropdownMenu">
         <li><Link href="/shop/">Sneakers</Link></li>
         <li><Link href="/shop/">Sports</Link></li>
         <li><Link href="/shop/">Boots</Link></li>
        </ul> */}
      </li>

          
        <li  className="item"><Link href="/about">About</Link></li>
        <li  className="item"><Link href="/contact">Contact</Link></li>
      </ul>
      </div>

      <div className="rightSection">
      <div className="searchBox">
       {/* <input type="text" placeholder="Search..." /> */}
      </div>
 
     </div>
    </nav>
  );
}

