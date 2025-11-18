// components/PublicHeader.tsx
import Link from "next/link";
import Image from "next/image";

export default function PublicHeader() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        {/* Logo area */}
        <div className="logo-area">
          <Link href="/">
            <Image
              src="/img/CHFinance UK Logo.jpg"
              alt="CHFinance logo"
              width={44}
              height={44}
              className="logo-img"
            />
          </Link>
          <span className="logo-text">CHFINANCE</span>
        </div>

        {/* Main nav */}
        <nav className="main-nav">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/solutions" className="nav-link">
            Solutions
          </Link>
          <Link href="/our-vision" className="nav-link">
            Our Vision
          </Link>
          <Link href="/contact-us" className="nav-link">
            Contact Us
          </Link>
          <Link href="/blog" className="nav-link">
            Blog
          </Link>
        </nav>
      </div>
    </header>
  );
}
