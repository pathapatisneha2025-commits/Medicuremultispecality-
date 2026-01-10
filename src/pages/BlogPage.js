import React, { useState, useEffect } from 'react';

const BlogPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch('https://medicurehospitaldatabase.onrender.com/blogs');
        const data = await res.json();
        setBlogPosts(data);
      } catch (err) {
        console.error('Failed to fetch blogs:', err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div style={styles.container}>
      {/* --- Blog Hero Section --- */}
      <header style={styles.blogHero}>
        <span style={styles.heroBadge}>HEALTH BLOG</span>
        <h2 style={styles.heroTitle}>Empowering Women with <span style={{color: '#3FB0AC'}}>Health Knowledge</span></h2>
        <p style={styles.heroSubtitle}>
          Stay informed about women's health topics, learn about prevention, and discover tips for a healthier, happier life. Knowledge is your greatest health asset.
        </p>
      </header>

      {/* --- Blog Grid --- */}
      <section style={styles.blogGridSection}>
        <div style={styles.gridContainer}>
          {blogPosts.map((post) => (
            <div key={post.id} style={styles.blogCard}>
              <div style={styles.imagePlaceholder}>
                {post.image ? (
                  <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <div style={styles.iconOverlay}>📖</div>
                )}
              </div>
              <div style={styles.cardContent}>
                <span style={styles.categoryBadge}>{post.category}</span>
                <h3 style={styles.cardTitle}>{post.title}</h3>
                <p style={styles.cardExcerpt}>{post.description}</p>
                <div style={styles.cardFooter}>
                  <div style={styles.metaInfo}>
                    <span>📅 {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                    <span>🕒 {post.read_time || post.readTime}</span>
                  </div>
                  <div style={styles.authorSection}>
                    <span style={styles.authorName}>👤 {post.author}</span>
                    <button style={styles.readMoreBtn}>Read More →</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Newsletter Section --- */}
      <section style={styles.newsletterSection}>
        <h2 style={styles.newsletterTitle}>Stay Updated on Women's Health</h2>
        <p style={styles.newsletterSubtitle}>Subscribe to our newsletter for the latest health tips, articles, and wellness advice delivered directly to your inbox.</p>
        <div style={styles.inputGroup}>
          <input type="email" placeholder="Enter your email" style={styles.emailInput} />
          <button style={styles.subscribeBtn}>Subscribe</button>
        </div>
      </section>
    </div>
  );
};



const styles = {
  container: { fontFamily: "'Inter', sans-serif", color: '#2D3748', backgroundColor: '#fff' },
  navbar: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '15px 7%', borderBottom: '1px solid #eee' },
  logoGroup: { display: 'flex', alignItems: 'center', gap: '10px' },
  logoIcon: { fontSize: '24px' },
  logoText: { margin: 0, fontSize: '20px', color: '#D33B4D', fontWeight: 'bold' },
  logoSub: { margin: 0, fontSize: '10px', fontWeight: 'bold', color: '#003366' },
  navLinks: { display: 'flex', gap: '25px' },
  link: { textDecoration: 'none', color: '#4A5568', fontSize: '15px', fontWeight: '500' },
  bookBtn: { backgroundColor: '#DE4A5B', color: '#fff', border: 'none', padding: '10px 22px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' },

  blogHero: { textAlign: 'center', padding: '80px 10% 60px', backgroundColor: '#fff' },
  heroBadge: { color: '#DE4A5B', letterSpacing: '2px', fontSize: '12px', fontWeight: 'bold' },
  heroTitle: { fontSize: '48px', margin: '20px 0', color: '#1A202C', fontFamily: 'serif' },
  heroSubtitle: { fontSize: '18px', color: '#718096', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' },

  blogGridSection: { padding: '40px 7% 80px', backgroundColor: '#FDFCFD' },
  gridContainer: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' },
  blogCard: { backgroundColor: '#fff', borderRadius: '16px', overflow: 'hidden', border: '1px solid #edf2f7', transition: 'transform 0.3s ease', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' },
  imagePlaceholder: { height: '180px', backgroundColor: '#FFF5F6', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  iconOverlay: { fontSize: '40px', opacity: '0.2' },
  cardContent: { padding: '25px' },
  categoryBadge: { backgroundColor: '#FFF5F6', color: '#DE4A5B', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '600' },
  cardTitle: { fontSize: '22px', margin: '15px 0', lineHeight: '1.3', color: '#1A202C', fontFamily: 'serif' },
  cardExcerpt: { color: '#718096', fontSize: '15px', lineHeight: '1.6', marginBottom: '20px' },
  cardFooter: { borderTop: '1px solid #edf2f7', paddingTop: '15px' },
  metaInfo: { display: 'flex', gap: '15px', fontSize: '13px', color: '#A0AEC0', marginBottom: '15px' },
  authorSection: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  authorName: { fontSize: '14px', color: '#4A5568', fontWeight: '500' },
  readMoreBtn: { color: '#DE4A5B', background: 'none', border: 'none', fontWeight: '600', cursor: 'pointer', fontSize: '14px' },

  newsletterSection: { backgroundColor: '#3FB0AC', color: '#fff', textAlign: 'center', padding: '80px 10%' },
  newsletterTitle: { fontSize: '32px', marginBottom: '15px' },
  newsletterSubtitle: { fontSize: '17px', marginBottom: '35px', opacity: '0.9', maxWidth: '700px', margin: '0 auto 35px' },
  inputGroup: { display: 'flex', justifyContent: 'center', gap: '15px', maxWidth: '500px', margin: '0 auto' },
  emailInput: { flex: 1, padding: '15px 20px', borderRadius: '8px', border: 'none', fontSize: '16px' },
  subscribeBtn: { backgroundColor: '#DE4A5B', color: '#fff', border: 'none', padding: '0 30px', borderRadius: '8px', fontWeight: 'bold', cursor: 'pointer' },

  footer: { backgroundColor: '#1A202C', color: '#A0AEC0', textAlign: 'center', padding: '30px', fontSize: '14px' }
};

export default BlogPage;