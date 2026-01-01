import React from "react";
import { FaAward, FaHeart, FaMicroscope, FaUserShield } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <>
      <section className="why-section">
        {/* Heading */}
        <div className="why-header">
          <span className="why-tag">WHY CHOOSE US</span>
          <h2>Healthcare Built on Trust</h2>
          <p>
            We believe every woman deserves care that respects her individuality,
            honors her concerns, and celebrates her journey through life.
          </p>
        </div>

        {/* Cards */}
        <div className="why-cards">
          <div className="why-card">
            <div className="icon">
              <FaAward />
            </div>
            <h3>Years of Experience</h3>
            <p>
              Decades of trusted expertise in women's healthcare with thousands
              of successful treatments.
            </p>
          </div>

          <div className="why-card">
            <div className="icon">
              <FaHeart />
            </div>
            <h3>Gentle, Compassionate Care</h3>
            <p>
              We treat every patient like family, with warmth, respect, and
              understanding.
            </p>
          </div>

          <div className="why-card">
            <div className="icon">
              <FaMicroscope />
            </div>
            <h3>Modern Technology</h3>
            <p>
              Advanced medical equipment and techniques for the best possible
              outcomes.
            </p>
          </div>

          <div className="why-card">
            <div className="icon">
              <FaUserShield />
            </div>
            <h3>Privacy & Trust</h3>
            <p>
              Complete confidentiality and a safe space where you can share
              openly.
            </p>
          </div>
        </div>
      </section>

      {/* CSS */}
      <style>{`
        .why-section {
          padding: 80px 60px;
          background: #ffffff;
          font-family: Arial, sans-serif;
          text-align: center;
        }

        .why-header {
          max-width: 700px;
          margin: 0 auto 60px;
        }

        .why-tag {
          color: #e63950;
          font-size: 14px;
          letter-spacing: 1px;
          font-weight: 600;
        }

        .why-header h2 {
          font-size: 42px;
          margin: 16px 0;
          color: #2f3e46;
        }

        .why-header p {
          color: #666;
          font-size: 16px;
          line-height: 1.7;
        }

        .why-cards {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 30px;
        }

        .why-card {
          background: #fffaf7;
          padding: 40px 30px;
          border-radius: 18px;
          text-align: left;
          box-shadow: 0 10px 30px rgba(0,0,0,0.04);
          transition: transform 0.3s ease;
        }

        .why-card:hover {
          transform: translateY(-6px);
        }

        .why-card .icon {
          width: 56px;
          height: 56px;
          background: #fdebed;
          color: #e63950;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          margin-bottom: 24px;
        }

        .why-card h3 {
          font-size: 20px;
          margin-bottom: 14px;
          color: #2f3e46;
        }

        .why-card p {
          font-size: 15px;
          color: #555;
          line-height: 1.6;
        }

        /* Responsive */
        @media (max-width: 1000px) {
          .why-cards {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .why-section {
            padding: 60px 20px;
          }

          .why-header h2 {
            font-size: 32px;
          }

          .why-cards {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default WhyChooseUs;
