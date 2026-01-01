import React from "react";

const AboutSection = () => {
  return (
    <>
      <section className="about">
        {/* Left Image */}
        <div className="about-image">
          <img
            src="/surgeon.png"
            alt="Medicure Hospital Team"
          />
          {/* Experience Badge */}
          <div className="experience-badge">
            <span className="years">15+</span>
            <span className="text">Years of Experience</span>
          </div>
        </div>

        {/* Right Content */}
        <div className="about-content">
          <span className="about-tag">ABOUT MEDICURE</span>

          <h2>A Legacy of Caring for Women</h2>

          <p>
            For over 15 years, Medicure Multi Speciality Hospital has been a
            trusted name in women's healthcare. Our team of experienced doctors
            and caring staff are dedicated to providing comprehensive,
            compassionate care in a comfortable environment.
          </p>

          <p>
            We understand that visiting a gynecologist can feel intimidating.
            That's why we've created a warm, welcoming space where you can feel
            safe discussing your health concerns openly and honestly.
          </p>

          <div className="about-stats">
            <div className="stat">
              <span className="icon">👥</span>
              <span>10,000+ Happy Patients</span>
            </div>

            <div className="stat">
              <span className="icon">🏆</span>
              <span>Award-Winning Care</span>
            </div>
          </div>

          <button className="about-btn">
            Read Our Story →
          </button>
        </div>
      </section>

      {/* CSS */}
      <style>{`
        .about {
          display: flex;
          gap: 60px;
          padding: 90px 60px;
          background: #ffffff;
          font-family: Arial, sans-serif;
          align-items: center;
          position: relative;
        }

        .about-image {
          position: relative;
        }

        .about-image img {
          width: 100%;
          max-width: 520px;
          border-radius: 24px;
          object-fit: cover;
        }

        /* Experience Badge */
        .experience-badge {
          position: absolute;
          bottom: -20px;
          left: -10px;
          background: #2a9d8f;
          color: white;
          padding: 18px 22px;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .experience-badge .years {
          font-size: 24px;
          font-weight: bold;
        }

        .experience-badge .text {
          font-size: 12px;
        }

        .about-content {
          max-width: 560px;
        }

        .about-tag {
          color: #e63950;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .about-content h2 {
          font-size: 42px;
          margin: 16px 0 20px;
          color: #2f3e46;
        }

        .about-content p {
          font-size: 16px;
          color: #555;
          line-height: 1.7;
          margin-bottom: 18px;
        }

        .about-stats {
          display: flex;
          gap: 30px;
          margin: 28px 0;
        }

        .stat {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 15px;
          color: #2f3e46;
          font-weight: 600;
        }

        .stat .icon {
          font-size: 20px;
          color: #2a9d8f;
        }

        .about-btn {
          background: #2a9d8f;
          color: #fff;
          border: none;
          padding: 14px 28px;
          border-radius: 30px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
        }

        .about-btn:hover {
          background: #238b80;
        }

        /* Responsive */
        @media (max-width: 1000px) {
          .about {
            flex-direction: column;
            padding: 70px 20px;
          }

          .about-image img {
            max-width: 100%;
          }

          .about-content h2 {
            font-size: 32px;
          }

          .about-stats {
            flex-direction: column;
            gap: 14px;
          }

          .experience-badge {
            bottom: -15px;
            left: 50%;
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
};

export default AboutSection;
