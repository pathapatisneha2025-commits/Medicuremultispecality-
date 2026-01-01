import React from 'react';

const GynecologyPage = () => {
  return (
    <div style={styles.container}>
    

      {/* Main Title Section */}
      <section style={styles.introSection}>
        <div style={styles.iconContainer}>
          <span style={styles.stethoscopeIcon}>🩺</span>
        </div>
        <h1 style={styles.mainTitle}>Gynecology Services</h1>
        <p style={styles.italicSub}>Caring for women's health at every stage of life</p>
        <p style={styles.descriptionText}>
          From adolescence through menopause and beyond, our gynecology services address all aspects of 
          women's reproductive health. We provide compassionate, confidential care in a comfortable 
          environment where you can discuss any concern openly.
        </p>
      </section>

      {/* Services Grid Section */}
      <section style={styles.servicesGridSection}>
        <p style={styles.overTitle}>OUR SERVICES</p>
        <h2 style={styles.gridHeading}>How We Can Help You</h2>
        
        <div style={styles.grid}>
          {gynecologyServices.map((service, index) => (
            <div key={index} style={styles.serviceCard}>
              <div style={styles.checkCircle}>
                <span style={styles.checkMark}>✓</span>
              </div>
              <span style={styles.serviceName}>{service}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Hero / CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.heartIcon}>🤍</div>
        <h3 style={styles.ctaText}>
          Your gynecological health is important, and no concern is too small. We're 
          here to listen, understand, and provide the care you deserve in a 
          judgment-free environment.
        </h3>
        <button style={styles.scheduleBtn}>Schedule a Consultation →</button>
      </section>
    </div>
  );
};

// --- Data based on images ---
const gynecologyServices = [
  "Menstrual problems and irregular periods treatment",
  "PCOS/PCOD diagnosis and management",
  "Uterine fibroid treatment and care",
  "Ovarian cyst evaluation and treatment",
  "Vaginal and urinary tract infections",
  "Pelvic pain investigation and treatment",
  "Contraception counseling and family planning",
  "Cervical health screening and care"
];

// --- Styles ---
const styles = {
  container: {
    fontFamily: '"Inter", sans-serif',
    color: '#333',
    backgroundColor: '#fff',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 5%',
    borderBottom: '1px solid #eee',
  },
  logoArea: { lineHeight: '1.2' },
  logoMain: { fontSize: '24px', fontWeight: 'bold', color: '#b91c1c' },
  logoSub: { fontSize: '10px', fontWeight: 'bold', color: '#334155' },
  logoTagline: { fontSize: '10px', fontStyle: 'italic', color: '#b91c1c' },
  navLinks: { display: 'flex', gap: '25px', alignItems: 'center' },
  navItem: { fontSize: '14px', cursor: 'pointer', fontWeight: '500' },
  bookBtn: {
    backgroundColor: '#e11d48',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '500'
  },
  introSection: {
    padding: '60px 20%',
    textAlign: 'center',
  },
  iconContainer: {
    backgroundColor: '#f1f5f9',
    width: '70px',
    height: '70px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '15px',
    margin: '0 auto 20px',
  },
  stethoscopeIcon: { fontSize: '32px' },
  mainTitle: { fontSize: '48px', color: '#1e293b', marginBottom: '10px' },
  italicSub: { fontStyle: 'italic', color: '#e11d48', fontSize: '20px', marginBottom: '25px' },
  descriptionText: { color: '#64748b', fontSize: '16px', lineHeight: '1.8' },
  servicesGridSection: {
    backgroundColor: '#f8fafc',
    padding: '60px 10%',
    textAlign: 'center',
  },
  overTitle: { color: '#3d9a8e', fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '10px' },
  gridHeading: { fontSize: '36px', color: '#1e293b', marginBottom: '40px' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '20px',
  },
  serviceCard: {
    backgroundColor: '#fff',
    padding: '25px',
    borderRadius: '16px',
    display: 'flex',
    alignItems: 'center',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
  },
  checkCircle: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    border: '2px solid #3d9a8e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '20px',
    flexShrink: 0
  },
  checkMark: { color: '#3d9a8e', fontSize: '14px', fontWeight: 'bold' },
  serviceName: { fontSize: '16px', color: '#334155', textAlign: 'left' },
  ctaSection: {
    backgroundColor: '#3d9a8e',
    padding: '80px 15%',
    textAlign: 'center',
    color: '#fff'
  },
  heartIcon: { fontSize: '30px', marginBottom: '20px' },
  ctaText: { fontWeight: '400', fontStyle: 'italic', fontSize: '24px', lineHeight: '1.6', marginBottom: '40px' },
  scheduleBtn: {
    backgroundColor: '#e11d48',
    color: 'white',
    border: 'none',
    padding: '18px 36px',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer'
  }
};

export default GynecologyPage;