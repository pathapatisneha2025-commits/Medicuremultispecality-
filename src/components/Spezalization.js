import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaBaby,
  FaStethoscope,
  FaHeart,
  FaProcedures,
  FaXRay,
  FaShieldAlt,
} from "react-icons/fa";

const Specialties = () => {
  const navigate = useNavigate();

  const items = [
    {
      title: "Obstetrics Care",
      desc: "Complete pregnancy care from conception to delivery with love and expertise.",
      icon: <FaBaby />,
      path: "/obstetrics",
    },
    {
      title: "Gynecology Services",
      desc: "Comprehensive women's health services for every stage of life.",
      icon: <FaStethoscope />,
      path: "/gynecology",
    },
    {
      title: "Fertility Care",
      desc: "Compassionate fertility support with advanced treatment options.",
      icon: <FaHeart />,
      path: "/fertility",
    },
    {
      title: "Laparoscopic Surgery",
      desc: "Minimally invasive procedures for faster recovery and less discomfort.",
      icon: <FaProcedures />,
      path: "/laparoscopic",
    },
    {
      title: "Sonology & Diagnostics",
      desc: "State-of-the-art imaging for accurate diagnosis and peace of mind.",
      icon: <FaXRay />,
      path: "/sonology",
    },
    {
      title: "Preventive Healthcare",
      desc: "Proactive wellness programs to keep you healthy and confident.",
      icon: <FaShieldAlt />,
      path: "/fertility",
    },
  ];

  return (
    <>
      <section className="specialties">
        <div className="specialties-header">
          <span className="tag">OUR SPECIALITIES</span>
          <h2>Comprehensive Women's Healthcare</h2>
          <p>
            From routine checkups to specialized treatments, we offer a complete
            range of services designed specifically for women's unique health
            needs.
          </p>
        </div>

        <div className="specialties-grid">
          {items.map((item, index) => (
            <div
              className="specialty-card"
              key={index}
              onClick={() => navigate(item.path)}
              style={{ cursor: "pointer" }}
            >
              <div className="icon-box">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <span
                className="learn-more"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(item.path);
                }}
              >
                Learn More →
              </span>
            </div>
          ))}
        </div>
      </section>

     
    

      {/* CSS */}
      <style>{`
        .specialties {
          padding: 90px 60px;
          background: linear-gradient(#fff, #fff7f7);
          font-family: Arial, sans-serif;
        }

        .specialties-header {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 70px;
        }

        .tag {
          color: #2a9d8f;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 1px;
        }

        .specialties-header h2 {
          font-size: 42px;
          margin: 16px 0;
          color: #2f3e46;
        }

        .specialties-header p {
          color: #666;
          font-size: 16px;
          line-height: 1.7;
        }

        .specialties-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 34px;
        }

        .specialty-card {
          background: #ffffff;
          padding: 40px 32px;
          border-radius: 20px;
          box-shadow: 0 12px 35px rgba(0,0,0,0.06);
          transition: transform 0.3s ease;
        }

        .specialty-card:hover {
          transform: translateY(-8px);
        }

        .icon-box {
          width: 60px;
          height: 60px;
          background: #eaf7f6;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          margin-bottom: 24px;
        }

        .specialty-card h3 {
          font-size: 20px;
          margin-bottom: 14px;
          color: #2f3e46;
        }

        .specialty-card p {
          font-size: 15px;
          color: #555;
          line-height: 1.6;
          margin-bottom: 22px;
        }

        .learn-more {
          color: #e63950;
          font-weight: 600;
          cursor: pointer;
          font-size: 14px;
        }

        .learn-more:hover {
          text-decoration: underline;
        }

        /* Responsive */
        @media (max-width: 1000px) {
          .specialties-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .specialties {
            padding: 70px 20px;
          }

          .specialties-header h2 {
            font-size: 32px;
          }

          .specialties-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default Specialties;
