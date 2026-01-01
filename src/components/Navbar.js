import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav className="navbar">
        {/* Left: Logo */}
        <div className="navbar-left">
          <img src="/companylogo.png" alt="Medicure Hospital" className="logo" />
        </div>

        {/* Hamburger */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Center: Links */}
        <ul className={`navbar-center ${menuOpen ? "show" : ""}`}>
          <li>
            <Link to="/" onClick={handleLinkClick}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={handleLinkClick}>About Us</Link>
          </li>
          <li>
            <Link to="/services" onClick={handleLinkClick}>Services</Link>
          </li>
          <li>
            <Link to="/blog" onClick={handleLinkClick}>Blog</Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleLinkClick}>Contact Us</Link>
          </li>
        </ul>

        {/* Right */}
        <div className="navbar-right">
          <span className="phone">📞 +91 99999 99999</span>
          <button className="appointment-btn">Book Appointment</button>
        </div>
      </nav>

      <style>{`
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 40px;
          background: #fff;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          position: relative;
        }

        .logo {
          height: 55px;
        }

        .navbar-center {
          list-style: none;
          display: flex;
          gap: 28px;
          margin: 0;
          padding: 0;
        }

        .navbar-center li a {
          text-decoration: none;
          color: #333;
          font-size: 16px;
          font-weight: 500;
        }

        .navbar-center li a:hover {
          color: #e63950;
        }

        .navbar-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .phone {
          font-size: 14px;
          color: #444;
        }

        .appointment-btn {
          background: #e63950;
          color: #fff;
          border: none;
          padding: 12px 22px;
          border-radius: 22px;
          cursor: pointer;
        }

        /* Hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          gap: 5px;
        }

        .hamburger span {
          width: 26px;
          height: 3px;
          background: #333;
          border-radius: 2px;
        }

        /* Mobile */
        @media (max-width: 900px) {
          .hamburger {
            display: flex;
          }

          .navbar-center {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: #fff;
            flex-direction: column;
            gap: 18px;
            padding: 20px;
            display: none;
            box-shadow: 0 8px 20px rgba(0,0,0,0.1);
          }

          .navbar-center.show {
            display: flex;
          }

          .navbar-right {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
