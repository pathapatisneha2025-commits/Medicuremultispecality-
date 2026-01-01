import React from 'react';

const LaparoscopicPage = () => {
  return (
    <div style={styles.container}>
    

      {/* Hero Header Section */}
      <section style={styles.heroHeader}>
        <div style={styles.iconWrapper}>
          <span style={{ fontSize: '28px', color: '#3d9a8e' }}>✂️</span>
        </div>
        <h1 style={styles.heroTitle}>Laparoscopic Surgery</h1>
        <p style={styles.heroTagline}>Minimally invasive care for maximum comfort</p>
        <p style={styles.heroDescription}>
          Our advanced laparoscopic surgical procedures mean smaller incisions, less pain, and faster 
          recovery. Using state-of-the-art equipment and techniques, we perform complex surgeries with 
          precision while prioritizing your comfort and quick return to normal life.
        </p>
      </section>

      {/* How We Can Help Section */}
      <section style={styles.servicesGridSection}>
        <p style={styles.preTitle}>OUR SERVICES</p>
        <h2 style={styles.gridTitle}>How We Can Help You</h2>
        
        <div style={styles.grid}>
          {laparoscopicServices.map((service, index) => (
            <div key={index} style={styles.serviceCard}>
              <div style={styles.checkCircle}>
                <span style={styles.checkIcon}>✓</span>
              </div>
              <span style={styles.serviceText}>{service}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Banner */}
      <section style={styles.ctaBanner}>
        <div style={styles.ctaHeart}>🤍</div>
        <h3 style={styles.ctaQuote}>
          Advanced surgery doesn't mean a long recovery. With our minimally 
          invasive techniques, you'll experience less discomfort and get back to your 
          life faster, with the same excellent outcomes.
        </h3>
        <button style={styles.scheduleButton}>Schedule a Consultation →</button>
      </section>
    </div>
  );
};

// --- Laparoscopic Services Data ---
const laparoscopicServices = [
  "Laparoscopic hysterectomy (uterus removal)",
  "Ovarian cyst removal (cystectomy)",
  "Fibroid removal (myomectomy)",
  "Endometriosis diagnosis and treatment",
  "Ectopic pregnancy management",
  "Diagnostic laparoscopy for pelvic conditions",
  "Treatment of chronic pelvic pain",
  "Minimally invasive fertility-enhancing surgeries"
];

// --- Simple Inline CSS Styles ---
const styles = {
  container: {
    fontFamily: '"Segoe UI", Arial, sans-serif',
    color: '#334155',
    backgroundColor: '#fff',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 5%',
    borderBottom: '1px solid #f1f5f9'
  },
  logoContainer: { lineHeight: '1.2' },
  brandName: { fontSize: '22px', fontWeight: 'bold', color: '#b91c1c' },
  hospitalType: { fontSize: '10px', fontWeight: 'bold', color: '#475569' },
  motto: { fontSize: '10px', fontStyle: 'italic', color: '#b91c1c' },
  navLinks: { display: 'flex', gap: '20px', alignItems: 'center', fontSize: '14px' },
  bookButton: {
    backgroundColor: '#e11d48',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '500'
  },
  heroHeader: {
    padding: '80px 18%',
    textAlign: 'center',
    backgroundColor: '#fff8f8', // Light pink background
  },
  iconWrapper: {
    backgroundColor: '#fff',
    width: '60px',
    height: '60px',
    borderRadius: '12px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '25px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
  },
  heroTitle: { fontSize: '46px', color: '#1e293b', margin: '0 0 10px 0' },
  heroTagline: { fontStyle: 'italic', color: '#e11d48', fontSize: '19px', marginBottom: '25px' },
  heroDescription: { color: '#64748b', fontSize: '16px', lineHeight: '1.8' },
  servicesGridSection: {
    padding: '60px 10%',
    textAlign: 'center',
    backgroundColor: '#fff'
  },
  preTitle: { color: '#3d9a8e', fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px' },
  gridTitle: { fontSize: '34px', color: '#1e293b', marginBottom: '40px' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '20px',
  },
  serviceCard: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    padding: '24px',
    borderRadius: '15px',
    textAlign: 'left',
    transition: 'transform 0.2s'
  },
  checkCircle: {
    width: '26px',
    height: '26px',
    borderRadius: '50%',
    border: '2px solid #3d9a8e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '15px',
    flexShrink: 0
  },
  checkIcon: { color: '#3d9a8e', fontSize: '14px', fontWeight: 'bold' },
  serviceText: { fontSize: '16px', color: '#334155' },
  ctaBanner: {
    backgroundColor: '#3d9a8e',
    padding: '90px 15%',
    textAlign: 'center',
    color: 'white'
  },
  ctaHeart: { fontSize: '26px', marginBottom: '20px' },
  ctaQuote: { fontWeight: '400', fontStyle: 'italic', fontSize: '24px', lineHeight: '1.6', marginBottom: '40px' },
  scheduleButton: {
    backgroundColor: '#e11d48',
    color: 'white',
    border: 'none',
    padding: '18px 36px',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
};

export default LaparoscopicPage;