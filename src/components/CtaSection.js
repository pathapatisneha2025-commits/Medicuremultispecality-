import React from 'react';

const CtaSection = () => {
  return (
    <div style={styles.container}>
      {/* --- Top Utility Bar --- */}
  

      {/* --- Hero Section --- */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <h2 style={styles.heroTitle}>Your Health is Our Priority</h2>
          <p style={styles.heroSubtitle}>
            Don't wait to take care of yourself. Schedule an appointment today and experience 
            healthcare that truly cares about your wellbeing.
          </p>
          
          <div style={styles.buttonGroup}>
            <button style={styles.heroPrimaryBtn}>
              Book Your Appointment <span style={{ marginLeft: '10px' }}>→</span>
            </button>
            <button style={styles.heroSecondaryBtn}>
              Call Us Now
            </button>
          </div>
        </div>
      </section>

      {/* --- Bottom Footer Strip --- */}
      <footer style={styles.footer}>
          {/* Content for footer would go here */}
      </footer>

      {/* CSS Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
        body { margin: 0; font-family: 'Inter', sans-serif; }
      `}</style>
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  topBar: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '8px 5%',
    backgroundColor: '#fff',
  },
  phoneText: {
    fontSize: '14px',
    color: '#555',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 5%',
    backgroundColor: '#fff',
    borderBottom: '1px solid #eee',
  },
  logoSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  logoText: {
    margin: 0,
    fontSize: '22px',
    fontWeight: '800',
    color: '#D33B4D', // Reddish color from logo
    letterSpacing: '1px',
  },
  logoSubtext: {
    margin: 0,
    fontSize: '10px',
    fontWeight: '700',
    color: '#003366', // Deep blue
  },
  tagline: {
    margin: 0,
    fontSize: '10px',
    fontStyle: 'italic',
    color: '#D33B4D',
  },
  navLinks: {
    display: 'flex',
    listStyle: 'none',
    gap: '25px',
    margin: 0,
    padding: 0,
  },
  navLink: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#444',
    cursor: 'pointer',
  },
  bookBtnTop: {
    backgroundColor: '#DE4A5B',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  hero: {
    flex: 1,
    backgroundColor: '#3FB0AC', // Teal background from screenshot
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '100px 20px',
    color: 'white',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: '800px',
  },
  heroTitle: {
    fontSize: '48px',
    fontWeight: '700',
    marginBottom: '20px',
  },
  heroSubtitle: {
    fontSize: '18px',
    lineHeight: '1.6',
    marginBottom: '40px',
    opacity: '0.9',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  heroPrimaryBtn: {
    backgroundColor: '#DE4A5B',
    color: 'white',
    border: 'none',
    padding: '15px 30px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  heroSecondaryBtn: {
    backgroundColor: 'transparent',
    color: 'white',
    border: '2px solid white',
    padding: '15px 40px',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
  },
  footer: {
      backgroundColor: '#2D3748', // Dark charcoal color at the bottom
      height: '80px',
      width: '100%'
  }
};

export default CtaSection;