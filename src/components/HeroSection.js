import React from "react";

const HeroSection = () => {
  return (
    <>
      <section className="hero">
        {/* Left Content */}
        <div className="hero-left">
          <span className="hero-badge">❤️ We Care, We Cure</span>

          <h1 className="hero-title">
            Compassionate Care <br />
            for <span>Every Woman</span>
          </h1>

          <p className="hero-desc">
            At Medicure Multi Speciality Hospital, we provide gentle,
            personalized healthcare for women at every stage of life. From
            adolescence to menopause and beyond, we're here to support your
            journey with expertise and love.
          </p>

          <div className="hero-buttons">
            <button className="btn primary">
              Book Appointment →
            </button>
            <button className="btn secondary">
              Learn About Us
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="hero-right">
          <img
            src="/Doctor.png"
            alt="Doctor"
          />
        </div>
      </section>

      {/* CSS */}
      <style>{`
        .hero {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 80px 60px;
          background: linear-gradient(to right, #fff7f7, #ffffff);
          font-family: Arial, sans-serif;
        }

        .hero-left {
          max-width: 55%;
        }

        .hero-badge {
          display: inline-block;
          background: #fdebed;
          color: #e63950;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 14px;
          margin-bottom: 20px;
        }

        .hero-title {
          font-size: 52px;
          font-weight: 700;
          color: #2f3e46;
          margin-bottom: 20px;
          line-height: 1.2;
        }

        .hero-title span {
          color: #e63950;
        }

        .hero-desc {
          font-size: 16px;
          color: #555;
          line-height: 1.7;
          max-width: 520px;
          margin-bottom: 30px;
        }

        .hero-buttons {
          display: flex;
          gap: 18px;
        }

        .btn {
          padding: 14px 26px;
          border-radius: 30px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          border: none;
        }

        .btn.primary {
          background: #e63950;
          color: #fff;
        }

        .btn.primary:hover {
          background: #d62f45;
        }

        .btn.secondary {
          background: #fff;
          color: #333;
          border: 1px solid #ddd;
        }

        .btn.secondary:hover {
          border-color: #e63950;
          color: #e63950;
        }

        .hero-right img {
          max-width: 420px;
          border-radius: 24px;
        }

        /* Responsive */
        @media (max-width: 900px) {
          .hero {
            flex-direction: column;
            padding: 50px 20px;
            text-align: center;
          }

          .hero-left {
            max-width: 100%;
          }

          .hero-buttons {
            justify-content: center;
          }

          .hero-right img {
            margin-top: 40px;
            width: 100%;
            max-width: 320px;
          }
        }
      `}</style>
    </>
  );
};

export default HeroSection;
