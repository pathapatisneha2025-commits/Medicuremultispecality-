import React from 'react';

const FertilityPage = () => {
  return (
    <div style={styles.container}>
    
      {/* Hero Section */}
      <section style={styles.headerHero}>
        <div style={styles.iconBox}>
          <span style={{ fontSize: '30px', color: '#3d9a8e' }}>❤️</span>
        </div>
        <h1 style={styles.mainTitle}>Fertility & Infertility Care</h1>
        <p style={styles.accentSub}>Turning your dreams of parenthood into reality</p>
        <p style={styles.mainDescription}>
          We understand that the journey to parenthood can sometimes be challenging. 
          Our fertility specialists provide compassionate, personalized care with 
          the latest treatments to help you achieve your dream of having a baby. 
          You are not alone in this journey.
        </p>
      </section>

      {/* Services Grid */}
      <section style={styles.servicesSection}>
        <p style={styles.sectionLabel}>OUR SERVICES</p>
        <h2 style={styles.sectionHeading}>How We Can Help You</h2>
        
        <div style={styles.gridContainer}>
          {fertilityServices.map((service, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.checkCircle}>
                <span style={styles.checkIcon}>✓</span>
              </div>
              <span style={styles.cardText}>{service}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Teal CTA Banner */}
      <section style={styles.ctaBanner}>
        <div style={styles.ctaHeart}>🤍</div>
        <h3 style={styles.ctaQuote}>
          We know how much having a baby means to you. Our team is dedicated to 
          supporting you with expertise, empathy, and hope throughout your 
          fertility journey.
        </h3>
        <button style={styles.ctaButton}>Schedule a Consultation →</button>
      </section>
    </div>
  );
};

// --- Service Data ---
const fertilityServices = [
  "Comprehensive infertility evaluation for couples",
  "Ovulation induction and cycle monitoring",
  "Follicular study and tracking",
  "Fertility counseling and emotional support",
  "Pre-conception care and health optimization",
  "Male factor infertility assessment",
  "Hormonal imbalance treatment",
  "Treatment of conditions affecting fertility"
];

// --- Styles (CSS-in-JS) ---
const styles = {
  container: {
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    color: '#334155',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 6%',
    backgroundColor: '#fff',
    borderBottom: '1px solid #f1f5f9'
  },
  logoGroup: { lineHeight: '1.1' },
  logoText: { fontSize: '22px', fontWeight: 'bold', color: '#b91c1c' },
  logoSubText: { fontSize: '10px', fontWeight: 'bold', color: '#334155' },
  logoMotto: { fontSize: '10px', fontStyle: 'italic', color: '#b91c1c' },
  navMenu: { display: 'flex', gap: '25px', alignItems: 'center', fontSize: '14px', fontWeight: '500' },
  navBookBtn: {
    backgroundColor: '#e11d48',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '8px',
    cursor: 'pointer'
  },
  headerHero: {
    padding: '70px 15%',
    textAlign: 'center',
    backgroundColor: '#fff5f5', // Very light pink background
  },
  iconBox: {
    backgroundColor: '#fff',
    width: '64px',
    height: '64px',
    borderRadius: '12px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
  },
  mainTitle: { fontSize: '42px', color: '#1e293b', marginBottom: '8px' },
  accentSub: { fontStyle: 'italic', color: '#e11d48', fontSize: '18px', marginBottom: '24px' },
  mainDescription: { color: '#64748b', lineHeight: '1.7', fontSize: '16px' },
  servicesSection: {
    padding: '60px 8%',
    backgroundColor: '#fdfdfd',
    textAlign: 'center'
  },
  sectionLabel: { color: '#3d9a8e', fontWeight: 'bold', letterSpacing: '1.5px', fontSize: '12px' },
  sectionHeading: { fontSize: '32px', marginBottom: '40px', color: '#1e293b' },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
    gap: '20px',
  },
  card: {
    backgroundColor: '#fff',
    padding: '24px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    border: '1px solid #f1f5f9'
  },
  checkCircle: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    border: '2px solid #3d9a8e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '15px',
    flexShrink: 0
  },
  checkIcon: { color: '#3d9a8e', fontSize: '14px', fontWeight: 'bold' },
  cardText: { fontSize: '15px', color: '#475569' },
  ctaBanner: {
    backgroundColor: '#3d9a8e',
    padding: '80px 15%',
    textAlign: 'center',
    color: 'white'
  },
  ctaHeart: { fontSize: '24px', marginBottom: '20px' },
  ctaQuote: { fontWeight: '400', fontStyle: 'italic', fontSize: '22px', marginBottom: '35px', lineHeight: '1.6' },
  ctaButton: {
    backgroundColor: '#e11d48',
    color: 'white',
    border: 'none',
    padding: '16px 32px',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer'
  }
};

export default FertilityPage;