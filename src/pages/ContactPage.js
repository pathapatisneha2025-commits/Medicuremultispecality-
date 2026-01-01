import React, { useState } from 'react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaHeart,
  FaPaperPlane,
} from "react-icons/fa";
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={styles.container}>
      {/* --- Contact Hero Header --- */}
      <section style={styles.contactHero}>
        <span style={styles.heroBadge}>CONTACT US</span>
        <h2 style={styles.heroTitle}>
          We're Here to <span style={{ color: "#3FB0AC" }}>Help You</span>
        </h2>
        <p style={styles.heroSubtitle}>
          Have questions or ready to schedule an appointment? Reach out to us with confidence.
          Our caring team is here to support you every step of the way.
        </p>
      </section>

      {/* --- Main Contact Section --- */}
      <section style={styles.mainContactSection}>
        {/* Left Side */}
        <div style={styles.infoColumn}>
          <h2 style={styles.sectionHeading}>Get in Touch</h2>

          <div style={styles.infoCard}>
            <div style={{ ...styles.iconBox, backgroundColor: "#E6F6F5" }}>
              <FaMapMarkerAlt color="#3FB0AC" />
            </div>
            <div>
              <h4 style={styles.infoLabel}>Our Location</h4>
              <p style={styles.infoText}>
                Main Road, Near Bus Stand,
                <br />
                Nellore - 524001, Andhra Pradesh
              </p>
            </div>
          </div>

          <div style={styles.infoCard}>
            <div style={{ ...styles.iconBox, backgroundColor: "#FFF5F6" }}>
              <FaPhoneAlt color="#DE4A5B" />
            </div>
            <div>
              <h4 style={styles.infoLabel}>Phone Number</h4>
              <p style={styles.infoText}>
                +91 99999 99999
                <br />
                +91 88888 88888
              </p>
            </div>
          </div>

          <div style={styles.infoCard}>
            <div style={{ ...styles.iconBox, backgroundColor: "#EBF4FF" }}>
              <FaEnvelope color="#3182CE" />
            </div>
            <div>
              <h4 style={styles.infoLabel}>Email Address</h4>
              <p style={styles.infoText}>
                care@medicurehospital.in
                <br />
                appointments@medicurehospital.in
              </p>
            </div>
          </div>

          <div style={styles.infoCard}>
            <div style={{ ...styles.iconBox, backgroundColor: "#FFF9E6" }}>
              <FaClock color="#D69E2E" />
            </div>
            <div>
              <h4 style={styles.infoLabel}>Working Hours</h4>
              <p style={styles.infoText}>
                Mon - Sat: 9:00 AM - 8:00 PM
                <br />
                Sunday: 10:00 AM - 2:00 PM
              </p>
            </div>
          </div>

          <div style={styles.noteBox}>
            <p style={styles.noteTitle}>
              <FaHeart style={{ marginRight: "6px" }} /> A Note From Us
            </p>
            <p style={styles.noteText}>
              "We understand that reaching out about your health can feel vulnerable.
              Please know that whatever your concern, we're here to listen without judgment
              and support you with compassion."
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div style={styles.formColumn}>
          <div style={styles.formCard}>
            <h3 style={styles.formTitle}>Book an Appointment</h3>
            <p style={styles.formSubtitle}>
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Your Name *</label>
              <input type="text" name="name" style={styles.input} onChange={handleChange} />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Phone Number *</label>
              <input type="text" name="phone" style={styles.input} onChange={handleChange} />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Email Address</label>
              <input type="email" name="email" style={styles.input} onChange={handleChange} />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Your Message</label>
              <textarea
                name="message"
                style={{ ...styles.input, height: "120px", resize: "none" }}
                onChange={handleChange}
              />
            </div>

            <button style={styles.submitBtn}>
              <FaPaperPlane /> Send Message
            </button>

            <p style={styles.confidentialText}>
              Your information is completely confidential and secure.
            </p>
          </div>
        </div>
      </section>

      {/* --- Urgent Care Bar --- */}
      <section style={styles.urgentBar}>
        <h3 style={styles.urgentTitle}>Need Urgent Care?</h3>
        <p style={styles.urgentSubtitle}>
          If you're experiencing a medical emergency, please call us immediately or visit our hospital directly.
        </p>
        <div style={styles.urgentPhoneBox}>
          <FaPhoneAlt style={{ marginRight: "10px" }} /> Call: +91 99999 99999
        </div>
      </section>
    </div>
  );
};



const styles = {
  container: { fontFamily: "'Inter', sans-serif", color: '#2D3748' },
  
  contactHero: { textAlign: 'center', padding: '80px 10% 40px', backgroundColor: '#fff' },
  heroBadge: { color: '#DE4A5B', fontSize: '13px', fontWeight: 'bold', letterSpacing: '1.5px' },
  heroTitle: { fontSize: '48px', margin: '20px 0', fontFamily: 'serif', color: '#1A202C' },
  heroSubtitle: { fontSize: '18px', color: '#718096', maxWidth: '850px', margin: '0 auto', lineHeight: '1.6' },

  mainContactSection: { display: 'flex', flexWrap: 'wrap', padding: '40px 8% 100px', gap: '60px', backgroundColor: '#FDFCFD' },
  infoColumn: { flex: '1 1 400px' },
  sectionHeading: { fontSize: '32px', marginBottom: '30px', fontFamily: 'serif' },
  
  infoCard: { display: 'flex', gap: '20px', marginBottom: '25px', alignItems: 'center' },
  iconBox: { width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' },
  infoLabel: { margin: '0 0 5px 0', fontSize: '16px', fontWeight: '700' },
  infoText: { margin: 0, fontSize: '15px', color: '#718096', lineHeight: '1.5' },

  noteBox: { backgroundColor: '#FFF5F6', padding: '30px', borderRadius: '15px', marginTop: '40px', borderLeft: '4px solid #DE4A5B' },
  noteTitle: { color: '#DE4A5B', fontWeight: 'bold', marginBottom: '10px' },
  noteText: { fontStyle: 'italic', color: '#4A5568', lineHeight: '1.6', fontSize: '15px' },

  formColumn: { flex: '1.2 1 500px' },
  formCard: { backgroundColor: '#fff', padding: '45px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', border: '1px solid #edf2f7' },
  formTitle: { fontSize: '24px', marginBottom: '10px' },
  formSubtitle: { color: '#718096', marginBottom: '30px', fontSize: '15px' },
  
  inputGroup: { marginBottom: '20px' },
  label: { display: 'block', marginBottom: '8px', fontSize: '14px', fontWeight: '600', color: '#4A5568' },
  input: { width: '100%', padding: '15px', borderRadius: '10px', border: '1px solid #E2E8F0', backgroundColor: '#F7FAFC', fontSize: '15px' },
  submitBtn: { width: '100%', backgroundColor: '#DE4A5B', color: '#fff', border: 'none', padding: '18px', borderRadius: '10px', fontSize: '16px', fontWeight: 'bold', cursor: 'pointer', marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '10px' },
  confidentialText: { textAlign: 'center', fontSize: '12px', color: '#A0AEC0', marginTop: '15px' },

  urgentBar: { backgroundColor: '#DE4A5B', color: '#fff', textAlign: 'center', padding: '70px 10%' },
  urgentTitle: { fontSize: '32px', marginBottom: '15px' },
  urgentSubtitle: { fontSize: '17px', opacity: '0.9', marginBottom: '30px' },
  urgentPhoneBox: { backgroundColor: '#fff', color: '#DE4A5B', display: 'inline-block', padding: '15px 40px', borderRadius: '12px', fontWeight: 'bold', fontSize: '20px' },
};

export default ContactPage;