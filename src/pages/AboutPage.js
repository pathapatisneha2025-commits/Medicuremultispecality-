import React from 'react';
import {
  FaHeart,
  FaUserShield,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa";

const AboutPage = () => {
  return (
    <div style={styles.container}>
    

      {/* --- Hero Intro Section --- */}
      <section style={styles.heroIntro}>
        <span style={styles.badge}>✨ About Medicure</span>
        <h2 style={styles.mainTitle}>Where Every Woman Feels <span style={{color: '#DE4A5B'}}>Valued & Cared For</span></h2>
        <p style={styles.heroSub}>At Medicure Multi Speciality Hospital, we believe that healthcare should be more than just treatment—it should be a partnership built on trust, respect, and genuine care.</p>
      </section>
    {/* --- Journey Section --- */}
<section style={styles.journeySection}>
  <div style={styles.journeyImageContainer}>
    <img 
      src="Doctor.png" 
      alt="Leading Doctor" 
      style={styles.journeyimg} 
    />
  </div>
  
  <div style={styles.journeyContent}>
    <h2 style={styles.journeyTitle}>A Journey of Healing & Hope</h2>
    
    <p style={styles.journeyParagraph}>
      Medicure Multi Speciality Hospital was founded with a simple yet powerful vision: 
      to create a healthcare space where every woman feels heard, respected, and truly 
      cared for. What started as a small clinic has grown into a trusted name in 
      women's healthcare.
    </p>
    
    <p style={styles.journeyParagraph}>
      Over the years, we have had the privilege of being part of countless beautiful 
      journeys—from the joy of bringing new life into the world to helping women 
      overcome health challenges with grace and strength.
    </p>

    <p style={styles.journeySignature}>
      <span style={{ color: '#DE4A5B' }}>❤️</span> "We Care, We Cure"
    </p>
  </div>
</section>
      {/* --- Mission Section --- */}
     <section style={styles.missionSection}>
  <div style={styles.missionContent}>
    <span style={styles.missionBadge}>OUR MISSION</span>
    <h2 style={styles.missionTitle}>Empowering Women Through Better Health</h2>
    
    <p style={styles.missionDescription}>
      We are committed to providing the highest quality healthcare services to women of all ages. 
      Our mission is to empower women by helping them understand their bodies, make informed 
      decisions, and achieve optimal health.
    </p>

    <ul style={styles.missionList}>
      <li style={styles.missionListItem}>
        <span style={styles.bulletPoint}>●</span> Personalized care tailored to your unique needs
      </li>
      <li style={styles.missionListItem}>
        <span style={styles.bulletPoint}>●</span> State-of-the-art medical technology and facilities
      </li>
      <li style={styles.missionListItem}>
        <span style={styles.bulletPoint}>●</span> A team that treats you like family
      </li>
      <li style={styles.missionListItem}>
        <span style={styles.bulletPoint}>●</span> Continuous support throughout your health journey
      </li>
    </ul>
  </div>

  <div style={styles.imageContainer}>
    <img 
      src="surgeon.png" 
      alt="Hospital Team" 
      style={styles.img} 
    />
  </div>
</section>



      {/* --- Values Section --- */}
      <section style={styles.valuesSection}>
        <div style={{textAlign: 'center', marginBottom: '50px'}}>
            <span style={{color: '#DE4A5B', fontSize: '12px', fontWeight: 'bold'}}>OUR VALUES</span>
            <h2 style={{fontSize: '32px'}}>What We Stand For</h2>
            <p>Our values guide everything we do—from how we treat our patients to how we approach medical care.</p>
        </div>
       <div style={styles.valuesGrid}>
  {[
    {
      title: "Compassionate Care",
      desc: "Every patient is treated with warmth, empathy, and respect.",
      icon: <FaHeart />,
    },
    {
      title: "Complete Privacy",
      desc: "Your health information is sacred. We maintain strict confidentiality.",
      icon: <FaUserShield />,
    },
    {
      title: "Excellence in Medicine",
      desc: "Our doctors stay updated with the latest medical advancements.",
      icon: <FaGraduationCap />,
    },
    {
      title: "Patient-First Approach",
      desc: "We listen, we understand, and we involve you in every decision.",
      icon: <FaUsers />,
    },
  ].map((val, i) => (
    <div key={i} style={styles.valueCard}>
      <div style={styles.valueIcon}>{val.icon}</div>
      <h3>{val.title}</h3>
      <p style={{ fontSize: "14px", color: "#666" }}>{val.desc}</p>
    </div>
  ))}
</div>

      </section>

      {/* --- Stats Section --- */}
      <section style={styles.statsSection}>
        <div style={styles.statItem}><h2>15+</h2><p>Years of Experience</p></div>
        <div style={styles.statItem}><h2>10,000+</h2><p>Happy Patients</p></div>
        <div style={styles.statItem}><h2>5,000+</h2><p>Successful Deliveries</p></div>
        <div style={styles.statItem}><h2>98%</h2><p>Patient Satisfaction</p></div>
      </section>

      {/* --- Call to Action --- */}
      <section style={styles.ctaSection}>
          <h2 style={{fontSize: '32px'}}>Experience Healthcare That Cares</h2>
          <p>Join thousands of women who have trusted Medicure with their health journey.</p>
          <button style={styles.heroBtn}>Book Your Appointment →</button>
      </section>

      {/* --- Footer --- */}
      <footer style={styles.footer}>
        <div style={styles.footerGrid}>
          <div>
            <div style={styles.footerLogo}>MEDICURE</div>
            <p style={{fontSize: '14px', lineHeight: '1.6'}}>Providing compassionate women's healthcare with warmth, expertise, and a personal touch.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <ul style={styles.footerListLinks}>
              <li>Home</li>
              <li style={{color: '#DE4A5B'}}>About Us</li>
              <li>Health Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h4>Our Specialties</h4>
            <ul style={styles.footerListLinks}>
              <li>Obstetrics Care</li>
              <li>Gynecology Services</li>
              <li>Fertility Care</li>
              <li>Laparoscopic Surgery</li>
            </ul>
          </div>
          <div>
            <h4>Contact Info</h4>
            <p style={{fontSize: '13px'}}>📍 Nellore - 524001, Andhra Pradesh</p>
            <p style={{fontSize: '13px'}}>📞 +91 99999 99999</p>
            <p style={{fontSize: '13px'}}>✉️ care@medicurehospital.in</p>
          </div>
        </div>
        <div style={styles.copyright}>
          © 2026 Medicure Multi Speciality Hospital. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

const styles = {
  container: { fontFamily: 'sans-serif', color: '#333' },
  header: { borderBottom: '1px solid #eee' },
  topBar: { textAlign: 'right', padding: '10px 5%', fontSize: '13px', color: '#666' },
  nav: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 5%' },
  logoGroup: { display: 'flex', alignItems: 'center', gap: '10px' },
  logoIcon: { fontSize: '24px' },
  logoText: { margin: 0, fontSize: '20px', color: '#D33B4D' },
  logoSub: { margin: 0, fontSize: '10px', fontWeight: 'bold', color: '#003366' },
  navLinks: { display: 'flex', gap: '20px' },
  link: { textDecoration: 'none', color: '#333', fontSize: '14px', fontWeight: '500' },
  bookBtn: { backgroundColor: '#DE4A5B', color: '#fff', border: 'none', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer' },
  
  heroIntro: { textAlign: 'center', padding: '80px 10%', backgroundColor: '#FFF5F6' },
  badge: { backgroundColor: '#FFE4E6', color: '#DE4A5B', padding: '5px 15px', borderRadius: '20px', fontSize: '12px' },
  mainTitle: { fontSize: '42px', margin: '20px 0' },
  heroSub: { fontSize: '18px', color: '#666', maxWidth: '800px', margin: '0 auto' },

  
  
  journeySection: { 
    display: 'flex', 
    flexWrap: 'wrap', // Ensures it stacks on mobile
    padding: '100px 7%', 
    gap: '60px', 
    alignItems: 'center',
    backgroundColor: '#FFFFFF' 
  },
  
  journeyImageContainer: { 
    flex: '1 1 450px',
    borderRadius: '20px', // Soft rounded corners for the doctor's portrait
    overflow: 'hidden',
    boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
  },
  
  journeyContent: { 
    flex: '1 1 450px' 
  },
  
  journeyTitle: { 
    fontSize: '42px', 
    fontFamily: 'serif', // Matches the screenshot's elegant look
    color: '#1A202C', 
    marginBottom: '30px',
    lineHeight: '1.2'
  },
  
  journeyParagraph: {
    fontSize: '17px',
    lineHeight: '1.8',
    color: '#4A5568', // Subtle grey for readability
    marginBottom: '20px'
  },
  
  journeySignature: {
    fontSize: '18px',
    fontWeight: '700',
    fontStyle: 'italic',
    marginTop: '30px',
    color: '#DE4A5B', // Theme red/pink
    fontFamily: 'serif'
  },

  journeyimg: { 
    width: '100%', 
    height: 'auto', 
    display: 'block',
    objectFit: 'cover'
  },
  valuesSection: { padding: '80px 5%', backgroundColor: '#fff' },
  valuesGrid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '30px' },
  valueCard: { padding: '30px', border: '1px solid #f0f0f0', borderRadius: '15px', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' },
  valueIcon: { fontSize: '30px', marginBottom: '15px' },

  statsSection: { display: 'flex', justifyContent: 'space-around', padding: '60px 5%', backgroundColor: '#fff', borderTop: '1px solid #eee' },
  statItem: { textAlign: 'center', color: '#3FB0AC' },

  ctaSection: { backgroundColor: '#DE4A5B', color: '#fff', textAlign: 'center', padding: '80px 5%' },
  heroBtn: { backgroundColor: '#fff', color: '#DE4A5B', border: 'none', padding: '15px 30px', borderRadius: '5px', fontWeight: 'bold', marginTop: '20px', cursor: 'pointer' },

  footer: { backgroundColor: '#1F2937', color: '#D1D5DB', padding: '60px 5% 20px' },
  footerGrid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '40px' },
  footerLogo: { fontSize: '24px', color: '#fff', fontWeight: 'bold', marginBottom: '20px' },
  footerListLinks: { listStyle: 'none', padding: 0, fontSize: '14px', lineHeight: '2' },
  copyright: { borderTop: '1px solid #374151', marginTop: '40px', paddingTop: '20px', textAlign: 'center', fontSize: '12px' },
 missionSection: {
    display: 'flex',
    flexWrap: 'wrap', // Better for tablet/mobile
    backgroundColor: '#3FB0AC', // The specific Teal from your screenshot
    color: '#FFFFFF',
    minHeight: '500px',
    alignItems: 'stretch',
  },
  missionContent: {
    flex: '1 1 500px', // Content takes 50% width but can grow/shrink
    padding: '80px 5%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  missionBadge: {
    fontSize: '13px',
    letterSpacing: '2px',
    fontWeight: '600',
    marginBottom: '15px',
    display: 'block',
    opacity: '0.9',
  },
  missionTitle: {
    fontSize: '42px',
    lineHeight: '1.2',
    fontWeight: '700',
    marginBottom: '25px',
    fontFamily: 'serif', // Matches the elegant serif font in screenshot
  },
  missionDescription: {
    fontSize: '17px',
    lineHeight: '1.6',
    marginBottom: '30px',
    opacity: '0.95',
  },
  missionList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  missionListItem: {
    display: 'flex',
    alignItems: 'flex-start',
    fontSize: '16px',
    marginBottom: '18px',
    lineHeight: '1.5',
  },
  bulletPoint: {
    color: '#DE4A5B', // The signature Red/Pink for bullets
    fontSize: '20px',
    marginRight: '12px',
    lineHeight: '1',
  },
  imageContainer: {
    flex: '1 1 500px',
    overflow: 'hidden',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
};

export default AboutPage;