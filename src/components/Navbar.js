import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        {/* Left: Logo */}
        <div className="navbar-left">
          <img
            src="/companylogo.png"
            alt="Medicure Hospital"
            className="logo"
          />
        </div>

        {/* Center: Links */}
        <ul className="navbar-center">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
                    <li><a href="/services">Services</a></li>

          <li><a href="/blog">Blog</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>

        {/* Right: Contact + Button */}
        <div className="navbar-right">
          <span className="phone">📞 +91 99999 99999</span>
          <button className="appointment-btn">Book Appointment</button>
        </div>
      </nav>

      {/* CSS */}
      <style>{`
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 40px;
          background: #fff;
          box-shadow: 0 2px 10px rgba(0,0,0,0.05);
          font-family: Arial, sans-serif;
        }

        .navbar-left .logo {
          height: 55px;
        }

        .navbar-center {
          list-style: none;
          display: flex;
          gap: 28px;
          margin: 0;
          padding: 0;
        }

        .navbar-center li a,
        .navbar-center li span {
          text-decoration: none;
          color: #333;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
        }

        .navbar-center li a:hover,
        .navbar-center li span:hover {
          color: #e63950;
        }

        .dropdown span {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .navbar-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .phone {
          font-size: 14px;
          color: #444;
          white-space: nowrap;
        }

        .appointment-btn {
          background: #e63950;
          color: #fff;
          border: none;
          padding: 12px 22px;
          border-radius: 22px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }

        .appointment-btn:hover {
          background: #d62f45;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .navbar-center {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
