import React from 'react';

const ObstetricsPage = () => {
  return (
    <div style={styles.container}>
     

      

      {/* Intro Section */}
      <section style={styles.introSection}>
        <div style={styles.babyIcon}>👶</div>
        <h1 style={styles.mainTitle}>Obstetrics Care</h1>
        <p style={styles.italicSub}>Guiding you through the beautiful journey of motherhood</p>
        <p style={styles.description}>
          Pregnancy is one of life's most precious experiences. At Medicure, we provide comprehensive 
          obstetric care that supports you from the moment you conceive until well after your baby arrives. 
          Our experienced team ensures a safe, healthy, and joyful pregnancy journey.
        </p>
      </section>

      {/* Services Grid Section */}
      <section style={styles.servicesSection}>
        <p style={styles.serviceLabel}>OUR SERVICES</p>
        <h2 style={styles.serviceHeading}>How We Can Help You</h2>
        
        <div style={styles.grid}>
          {services.map((service, index) => (
            <div key={index} style={styles.serviceCard}>
              <span style={styles.checkIcon}>✔</span>
              <span style={styles.serviceText}>{service}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={styles.heroSection}>
        <div style={styles.heroContent}>
          <div style={styles.heartIcon}>🤍</div>
          <h2 style={styles.heroText}>
            Your pregnancy journey deserves the best care. Let us walk beside you
            every step of the way, ensuring you and your baby are healthy, happy, and well-supported.
          </h2>
          <button style={styles.consultBtn}>Schedule a Consultation →</button>
        </div>
      </section>
    </div>
  );
};

// --- Services Data ---
const services = [
  "Antenatal care and regular pregnancy check-ups",
  "High-risk pregnancy management and monitoring",
  "Pregnancy ultrasounds and fetal assessments",
  "Normal delivery with personalized birth plans",
  "Painless delivery options (epidural anesthesia)",
  "Cesarean section (C-section) when necessary",
  "Twin and multiple pregnancy care",
  "Postnatal care for mother and baby"
];

// --- Simple CSS Styles ---
const styles = {
  container: {
    fontFamily: '"Segoe UI", Roboto, sans-serif',
    color: '#333',
    lineHeight: '1.6',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 5%',
    backgroundColor: '#fff',
  },
  logo: { fontWeight: 'bold', fontSize: '20px' },
  tagline: { fontSize: '10px', color: '#666' },
  navLinks: { display: 'flex', gap: '20px', alignItems: 'center', fontSize: '14px' },
  bookBtn: {
    backgroundColor: '#e63946',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '8px',
    cursor: 'pointer'
  },
  heroSection: {
    backgroundColor: '#3d9a8e',
    padding: '80px 10%',
    textAlign: 'center',
    color: 'white',
  },
  heroContent: { maxWidth: '800px', margin: '0 auto' },
  heartIcon: { fontSize: '24px', marginBottom: '20px' },
  heroText: { fontWeight: '400', fontStyle: 'italic', fontSize: '22px', marginBottom: '30px' },
  consultBtn: {
    backgroundColor: '#e63946',
    color: 'white',
    border: 'none',
    padding: '15px 30px',
    borderRadius: '8px',
    fontSize: '16px',
    cursor: 'pointer'
  },
  introSection: {
    padding: '60px 15%',
    textAlign: 'center',
  },
  babyIcon: {
    fontSize: '40px',
    backgroundColor: '#e6f4f1',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12px',
    margin: '0 auto 20px'
  },
  mainTitle: { fontSize: '42px', color: '#1a3a3a', margin: '0' },
  italicSub: { fontStyle: 'italic', color: '#e63946', fontSize: '18px', marginBottom: '20px' },
  description: { color: '#666', fontSize: '16px', maxWidth: '700px', margin: '0 auto' },
  servicesSection: {
    padding: '40px 10% 80px',
    backgroundColor: '#fdfdfd',
    textAlign: 'center',
  },
  serviceLabel: { color: '#3d9a8e', letterSpacing: '2px', fontSize: '12px', fontWeight: 'bold' },
  serviceHeading: { fontSize: '32px', marginBottom: '40px' },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '20px',
  },
  serviceCard: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
    display: 'flex',
    alignItems: 'center',
    textAlign: 'left',
    border: '1px solid #f0f0f0'
  },
  checkIcon: {
    color: '#3d9a8e',
    marginRight: '15px',
    fontSize: '18px',
    border: '1px solid #3d9a8e',
    borderRadius: '50%',
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  serviceText: { color: '#444', fontSize: '15px' }
};

export default ObstetricsPage;