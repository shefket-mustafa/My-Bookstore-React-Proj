import './footer.css'
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="footer_section">
      <div className="container">
        <div className="footer_content">
          {/* Left Side - Quick Links */}
          <div className="footer_links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/books/catalog">Catalog</Link></li>
              <li><Link to="/books/sell">Sell</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Center - Contact Info */}
          <div className="footer_contact">
            <h4>Contact Us</h4>
            <p>Email: shefket.must@gmail.com</p>
            <p>Phone: +359 00 000 000</p>
            <p>Location: 78 Aleksander Malinov Bv, Sofia City</p>
          </div>

          {/* Right Side - Social Media */}
          <div className="footer_social">
            <h4>Follow Us</h4>
            <div className="social_icons">
              <a href="https://facebook.com" target="self"><i className="fa fa-facebook"></i></a>
              <a href="https://x.com" target="self"><i className="fa fa-twitter"></i></a>
              <a href="https://instagram.com" target="self"><i className="fa fa-instagram"></i></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer_bottom">
          <p>© 2025 Bookstore. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
