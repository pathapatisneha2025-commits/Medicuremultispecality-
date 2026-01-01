import React from 'react';
import { Link } from "react-router-dom";
import { Baby, Scissors, Heart, ShieldCheck, Scan, Stethoscope, ArrowRight } from 'lucide-react';

const ServiceCard = ({ service }) => {

  return (
    <div className="service-card">
      <div className="icon-wrapper">
        {service.icon}
      </div>
      <h2>{service.title}</h2>
      <h3>{service.subtitle}</h3>
      
      <p className="description">
        {service.description}
      </p>

         {/* Link navigation */}
      <Link to={service.path} className="read-more-btn">
        Read More <ArrowRight size={16} />
      </Link>
    </div>
  );
};

const ServicePage = () => {
  const services = [
    {
      title: "Obstetrics Care",
      subtitle: "Guiding you through the beautiful journey of motherhood",
      path: "/obstetrics",
      description: "Comprehensive obstetric care that supports you from the moment you conceive until well after your baby arrives.",
      icon: <Baby size={32} className="icon-green" />,
    },
    {
      title: "Gynecology Services",
      subtitle: "Caring for women's health at every stage of life",
      path: "/gynecology",
      description: "From adolescence through menopause and beyond, our gynecology services address all aspects of women's reproductive health.",
      icon: <Stethoscope size={32} className="icon-green" />,
    },
    {
      title: "Fertility & Infertility Care",
      subtitle: "Turning your dreams of parenthood into reality",
      path: "/fertility",
      description: "Compassionate, personalized care with the latest treatments to help you achieve your dream of having a baby.",
      icon: <Heart size={32} className="icon-green" />,
    },
    {
      title: "Laparoscopic Surgery",
      subtitle: "Minimally invasive care for maximum comfort",
      path: "/laparoscopic",
      description: "Advanced surgical procedures mean smaller incisions, less pain, and faster recovery using state-of-the-art equipment.",
      icon: <Scissors size={32} className="icon-green" />,
    },
    {
      title: "Sonology & Diagnostic Services",
      subtitle: "Clear insights for confident care decisions",
      path: "/sonology",
      description: "Accurate diagnosis is the foundation of effective treatment. Our state-of-the-art ultrasound provides detailed insights.",
      icon: <Scan size={32} className="icon-green" />,
    },
    {
      title: "Preventive Women's Healthcare",
      subtitle: "Protecting your health today for a brighter tomorrow",
      path: "/specialties/preventive",
      description: "Our preventive healthcare services are designed to catch potential health issues early and empower your choices.",
      icon: <ShieldCheck size={32} className="icon-green" />,
    }
  ];

  return (
    <div className="medicure-container">
      <style>{`
        .medicure-container {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #fffafb;
          padding: 60px 20px;
          color: #333;
        }

        .header-section {
          text-align: center;
          margin-bottom: 50px;
        }

        .header-section h1 {
          font-size: 2.5rem;
          color: #1a2e35;
          margin-bottom: 10px;
        }

        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 30px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .service-card {
          background: white;
          padding: 40px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .service-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }

        .icon-wrapper {
          background-color: #f0f7f6;
          padding: 20px;
          border-radius: 12px;
          margin-bottom: 25px;
        }

        .icon-green { color: #6fbab1; }

        .service-card h2 {
          font-size: 1.8rem;
          color: #1a2e35;
          margin-bottom: 15px;
        }

        .service-card h3 {
          font-size: 1.1rem;
          color: #d66d75;
          font-style: italic;
          margin-bottom: 20px;
        }

        .description {
          font-size: 1rem;
          line-height: 1.6;
          color: #666;
          margin-bottom: 25px;
          /* Keep text height consistent */
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .read-more-btn {
          background: #d66d75;
          border: none;
          color: white;
          padding: 10px 24px;
          border-radius: 25px;
          cursor: pointer;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          transition: background 0.3s ease;
          margin-top: auto;
        }

        .read-more-btn:hover {
          background-color: #b5565e;
        }

        @media (max-width: 768px) {
          .services-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="header-section">
        <p style={{ color: '#d66d75', fontWeight: 'bold', textTransform: 'uppercase' }}>Our Specialties</p>
        <h1>Comprehensive Healthcare Services</h1>
      </div>

      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicePage;