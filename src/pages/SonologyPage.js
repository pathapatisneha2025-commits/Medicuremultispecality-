import React from 'react';

const SonologyPage = () => {
  return (
    <div style={styles.container}>
     

      {/* Hero / Intro Section */}
      <section style={styles.heroIntro}>
        <div style={styles.iconContainer}>
          <span style={{ fontSize: '30px', color: '#3d9a8e' }}>🔍</span>
        </div>
        <h1 style={styles.heroTitle}>Sonology & Diagnostic Services</h1>
        <p style={styles.heroSubline}>Clear insights for confident care decisions</p>
        <p style={styles.heroParagraph}>
          Accurate diagnosis is the foundation of effective treatment. Our state-of-the-art 
          ultrasound and diagnostic imaging services provide detailed insights into your 
          health, helping us create the best treatment plan for you while keeping you 
          comfortable throughout.
        </p>
      </section>

      {/* Services Grid Section */}
      <section style={styles.gridSection}>
        <p style={styles.gridLabel}>OUR SERVICES</p>
        <h2 style={styles.gridHeading}>How We Can Help You</h2>
        
        <div style={styles.gridBody}>
          {diagnosticServices.map((service, index) => (
            <div key={index} style={styles.serviceItem}>
              <div style={styles.checkCircle}>
                <span style={styles.checkIcon}>✓</span>
              </div>
              <span style={styles.serviceLabelText}>{service}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Teal CTA Banner */}
      <section style={styles.ctaBanner}>
        <div style={styles.ctaHeartIcon}>🤍</div>
        <h3 style={styles.ctaMessage}>
          We combine advanced technology with a gentle approach, ensuring you 
          feel comfortable and reassured during every scan while receiving the most 
          accurate diagnostic information.
        </h3>
        <button style={styles.ctaActionBtn}>Schedule a Consultation →</button>
      </section>
    </div>
  );
};

// --- Diagnostic Services Data ---
const diagnosticServices = [
  "Early pregnancy confirmation and dating scan",
  "NT (Nuchal Translucency) screening",
  "Anomaly scan (detailed fetal assessment)",
  "Growth scan for fetal development",
  "Doppler scan for blood flow assessment",
  "3D/4D ultrasound imaging"
];

// --- Inline Styles ---
const styles = {
  container: {
    fontFamily: '"Inter", sans-serif',
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
  logoSection: { lineHeight: '1.2' },
  brandPrimary: { fontSize: '24px', fontWeight: 'bold', color: '#b91c1c' },
  brandSecondary: { fontSize: '10px', fontWeight: 'bold', color: '#334155' },
  brandMotto: { fontSize: '10px', fontStyle: 'italic', color: '#b91c1c' },
  navLinks: { display: 'flex', gap: '25px', alignItems: 'center', fontSize: '14px' },
  appointmentBtn: {
    backgroundColor: '#e11d48',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600'
  },
  heroIntro: {
    padding: '80px 15%',
    textAlign: 'center',
    backgroundColor: '#fff9f9', // Soft light pink
  },
  iconContainer: {
    backgroundColor: '#fff',
    width: '64px',
    height: '64px',
    borderRadius: '16px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
  },
  heroTitle: { fontSize: '48px', color: '#1e293b', marginBottom: '8px' },
  heroSubline: { fontStyle: 'italic', color: '#e11d48', fontSize: '20px', marginBottom: '25px' },
  heroParagraph: { color: '#64748b', fontSize: '17px', lineHeight: '1.8' },
  gridSection: {
    padding: '70px 10%',
    textAlign: 'center',
  },
  gridLabel: { color: '#3d9a8e', fontSize: '12px', fontWeight: 'bold', letterSpacing: '2px' },
  gridHeading: { fontSize: '36px', color: '#1e293b', marginBottom: '45px' },
  gridBody: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '24px',
  },
  serviceItem: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    padding: '24px',
    borderRadius: '16px',
    textAlign: 'left'
  },
  checkCircle: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    border: '2px solid #3d9a8e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '18px',
    flexShrink: 0
  },
  checkIcon: { color: '#3d9a8e', fontSize: '14px', fontWeight: 'bold' },
  serviceLabelText: { fontSize: '16px', color: '#334155', fontWeight: '500' },
  ctaBanner: {
    backgroundColor: '#3d9a8e',
    padding: '90px 15%',
    textAlign: 'center',
    color: 'white'
  },
  ctaHeartIcon: { fontSize: '28px', marginBottom: '20px' },
  ctaMessage: { fontWeight: '400', fontStyle: 'italic', fontSize: '24px', lineHeight: '1.6', marginBottom: '45px' },
  ctaActionBtn: {
    backgroundColor: '#e11d48',
    color: 'white',
    border: 'none',
    padding: '18px 40px',
    borderRadius: '12px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer'
  }
};

export default SonologyPage;