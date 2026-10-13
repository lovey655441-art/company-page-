import "./Navbar.css";
import logo from "../assets/logo.svg";
function Navbar() {
  return (
    <nav className="navbar">
      <a href="/" className="logo">
      <img src={logo} alt="Logo"></img>
      </a>
      <div className="nav-links">
         <a href="/ai-solutions">AI Solutions</a>
        <a href="/about">About</a>
        <a href="/products">Products</a>
        <a href="/services">Services</a>
      </div>

      <a href="/contact" className="contact-btn">
        Contact Us ↗
      </a>
    </nav>
  );
}

export default Navbar;