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
              <li><Link to="/catalog">Sell & Buy</Link></li>
              <li><Link to="/exchange">Exchange Books</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          {/* Center - Contact Info */}
          <div className="footer_contact">
            <h4>Contact Us</h4>
            <p>Email: support@bookstore.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Location: 123 Book Street, Library City</p>
          </div>

          {/* Right Side - Social Media */}
          <div className="footer_social">
            <h4>Follow Us</h4>
            <div className="social_icons">
              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-instagram"></i></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer_bottom">
          <p>© {new Date().getFullYear()} Bookstore. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
