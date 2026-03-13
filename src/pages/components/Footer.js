import Link from "next/link";

export default function Footer() {
    return (
      <footer className="footer">
          <div className="footer-container">
            <div className="footer-col">
            <img src="/images/header-logo.png" alt="shirt"width="200"  />
              <p>Move Fast. Step Further</p>
            </div>

            <div className="footer-col">
              <h4>Quick Links</h4>
              <ul className="nav-links">
              <li className="item"><Link className="foot" href="/">Home</Link></li>
              <li  className="item"><Link className="foot" href="/about">About</Link></li>
              <li  className="item"><Link className="foot" href="/shop">shoe</Link></li>
              </ul>
            </div>
            <div className="footer-col">
      <h4>Follow Us</h4>
      <div className="social-icons">
      <img src="/images/instagram.png" alt="shirt"width="25"  />
      <img src="/images/twitter.png" alt="shirt"width="25"  />
      <img src="/images/social-media.png" alt="shirt"width="25"  />
      </div>
    </div>

  </div>

  <div className="footer-bottom">
    © 2026 SoloVerse. All Rights Reserved.
  </div>
      </footer>
    );
  }
  