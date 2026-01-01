import React from 'react';

const Footer = () => {
  return (
    <div style={styles.container}>
      {/* --- Top Utility Bar --- */}
     
     

      {/* --- Footer Section (From New Screenshot) --- */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          {/* Column 1: About */}
          <div style={styles.footerCol}>
            <div style={styles.footerLogoPlaceholder}></div>
            <p style={styles.footerAboutText}>
              Providing compassionate women's healthcare with warmth, expertise, and a personal touch. We care, we cure.
            </p>
            <p style={{ ...styles.tagline, color: '#DE4A5B', fontSize: '14px' }}>❤️ We Care, We Cure</p>
          </div>

          {/* Column 2: Quick Links */}
          <div style={styles.footerCol}>
            <h4 style={styles.footerHeading}>Quick Links</h4>
            <ul style={styles.footerList}>
              <li style={styles.footerListItem}>Home</li>
              <li style={{ ...styles.footerListItem, color: '#DE4A5B' }}>About Us</li>
              <li style={styles.footerListItem}>Health Blog</li>
              <li style={styles.footerListItem}>Contact Us</li>
            </ul>
          </div>

          {/* Column 3: Specialties */}
          <div style={styles.footerCol}>
            <h4 style={styles.footerHeading}>Our Specialties</h4>
            <ul style={styles.footerList}>
              <li style={styles.footerListItem}>Obstetrics Care</li>
              <li style={styles.footerListItem}>Gynecology Services</li>
              <li style={styles.footerListItem}>Fertility Care</li>
              <li style={styles.footerListItem}>Laparoscopic Surgery</li>
              <li style={styles.footerListItem}>Sonology & Diagnostics</li>
              <li style={styles.footerListItem}>Preventive Healthcare</li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div style={styles.footerCol}>
            <h4 style={styles.footerHeading}>Contact Info</h4>
            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>📍</span>
              <p style={styles.contactText}>Main Road, Near Bus Stand, Nellore - 524001, Andhra Pradesh</p>
            </div>
            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>📞</span>
              <p style={styles.contactText}>+91 99999 99999</p>
            </div>
            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>✉️</span>
              <p style={styles.contactText}>care@medicurehospital.in</p>
            </div>
            <div style={styles.contactItem}>
              <span style={styles.contactIcon}>🕒</span>
              <p style={styles.contactText}>
                Mon - Sat: 9:00 AM - 8:00 PM<br/>
                Sunday: 10:00 AM - 2:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div style={styles.copyrightBar}>
          © 2026 Medicure Multi Speciality Hospital. All rights reserved.
        </div>
      </footer>

      <style>{`
        body { margin: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
      `}</style>
    </div>
  );
};

const styles = {
  container: { display: 'flex', flexDirection: 'column', minHeight: '100vh' },
  topBar: { display: 'flex', justifyContent: 'flex-end', padding: '8px 5%', backgroundColor: '#fff' },
  phoneText: { fontSize: '14px', color: '#666' },
  navbar: {
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '10px 5%', borderBottom: '1px solid #eee', backgroundColor: '#fff'
  },
  logoSection: { display: 'flex', alignItems: 'center', gap: '10px' },
  logoIcon: { fontSize: '30px' },
  logoText: { margin: 0, fontSize: '20px', color: '#D33B4D', fontWeight: 'bold' },
  logoSubtext: { margin: 0, fontSize: '10px', color: '#003366', fontWeight: 'bold' },
  tagline: { margin: 0, fontSize: '10px', fontStyle: 'italic' },
  navLinks: { display: 'flex', listStyle: 'none', gap: '20px', margin: 0 },
  navLink: { cursor: 'pointer', fontWeight: '500', fontSize: '15px' },
  bookBtnTop: {
    backgroundColor: '#DE4A5B', color: 'white', border: 'none',
    padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold'
  },
  
  /* Footer Styles */
  footer: { backgroundColor: '#263238', color: '#cfd8dc', padding: '60px 5% 20px 5%' },
  footerContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '40px',
    marginBottom: '40px'
  },
  footerCol: { display: 'flex', flexDirection: 'column', gap: '15px' },
  footerLogoPlaceholder: { width: '180px', height: '60px', backgroundColor: '#fff', borderRadius: '4px' },
  footerAboutText: { fontSize: '14px', lineHeight: '1.6', color: '#b0bec5' },
  footerHeading: { color: '#fff', fontSize: '18px', marginBottom: '10px', fontWeight: '600' },
  footerList: { listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' },
  footerListItem: { fontSize: '14px', cursor: 'pointer' },
  contactItem: { display: 'flex', gap: '12px', alignItems: 'flex-start' },
  contactIcon: { color: '#DE4A5B', fontSize: '16px' },
  contactText: { fontSize: '14px', margin: 0, lineHeight: '1.4' },
  copyrightBar: {
    borderTop: '1px solid #37474f',
    paddingTop: '20px',
    textAlign: 'center',
    fontSize: '13px',
    color: '#90a4ae'
  }
};

export default Footer;