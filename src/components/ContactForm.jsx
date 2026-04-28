import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact-form" style={{ backgroundColor: 'var(--color-offwhite)', padding: '40px 0 80px' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--color-emerald-dark)', marginBottom: '16px', fontFamily: '"Playfair Display", serif' }}>Get in Touch</h2>
          <p style={{ color: 'var(--color-gray)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.6' }}>
            Whether you have a question about our products, bulk sourcing orders, or just want to say hello, our team is here for you.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', backgroundColor: 'var(--color-white)', borderRadius: '24px', boxShadow: 'var(--shadow)', overflow: 'hidden', border: '1px solid var(--color-mint)' }}>
          
          {/* Left Column: Contact Information */}
          <div style={{ padding: '40px', backgroundColor: 'var(--color-emerald-dark)', color: 'var(--color-white)' }}>
            <h3 style={{ fontSize: '1.8rem', color: 'var(--color-white)', marginBottom: '32px', fontFamily: '"Playfair Display", serif' }}>Contact Information</h3>
            
            <div style={{ marginBottom: '32px' }}>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--color-mint)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-map-marker-alt"></i> Our Headquarters
              </h4>
              <p style={{ color: 'var(--color-offwhite)', lineHeight: '1.6', paddingLeft: '24px' }}>
                AgriX Global<br />
                6/45, SRI ARUNACHALESWARA COMPLEX<br />
                PALGHAT MAIN ROAD VK PURAM,<br />
                KOVAIPUDUR PIRIVU COIMBATORE - 641008
              </p>
            </div>

            <div style={{ marginBottom: '32px' }}>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--color-mint)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-phone-alt"></i> Phone Number
              </h4>
              <p style={{ color: 'var(--color-offwhite)', lineHeight: '1.6', paddingLeft: '24px' }}>
                <a href="tel:+917810036407" style={{ color: 'var(--color-white)', textDecoration: 'none', fontWeight: 'bold' }}>+91 78100 36407</a><br />
                <a href="tel:+917397736407" style={{ color: 'var(--color-white)', textDecoration: 'none', fontWeight: 'bold' }}>+91 73977 36407</a><br />
                Mon-Fri from 9:00 AM to 6:00 PM
              </p>
            </div>

            <div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--color-mint)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="fas fa-envelope"></i> Email Support
              </h4>
              <p style={{ color: 'var(--color-offwhite)', lineHeight: '1.6', paddingLeft: '24px' }}>
                <a href="mailto:info.agrixglobal@gmail.com" style={{ color: 'var(--color-white)', textDecoration: 'none', fontWeight: 'bold' }}>info.agrixglobal@gmail.com</a><br />
                For wholesale inquiries, please reach out via email.
              </p>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div style={{ padding: '40px', backgroundColor: 'var(--color-white)' }}>
            <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="firstName" style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--color-charcoal)' }}>First Name</label>
                  <input type="text" id="firstName" placeholder="John" style={{ padding: '14px', borderRadius: '8px', border: '1px solid var(--color-lightgray)', outlineColor: 'var(--color-emerald)', fontSize: '1rem', width: '100%' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label htmlFor="lastName" style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--color-charcoal)' }}>Last Name</label>
                  <input type="text" id="lastName" placeholder="Doe" style={{ padding: '14px', borderRadius: '8px', border: '1px solid var(--color-lightgray)', outlineColor: 'var(--color-emerald)', fontSize: '1rem', width: '100%' }} />
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="email" style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--color-charcoal)' }}>Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" style={{ padding: '14px', borderRadius: '8px', border: '1px solid var(--color-lightgray)', outlineColor: 'var(--color-emerald)', fontSize: '1rem', width: '100%' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="subject" style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--color-charcoal)' }}>Subject</label>
                <input type="text" id="subject" placeholder="How can we help you?" style={{ padding: '14px', borderRadius: '8px', border: '1px solid var(--color-lightgray)', outlineColor: 'var(--color-emerald)', fontSize: '1rem', width: '100%' }} />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label htmlFor="message" style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--color-charcoal)' }}>Message</label>
                <textarea id="message" rows="5" placeholder="Tell us more about your inquiry..." style={{ padding: '14px', borderRadius: '8px', border: '1px solid var(--color-lightgray)', outlineColor: 'var(--color-emerald)', fontSize: '1rem', width: '100%', resize: 'vertical' }}></textarea>
              </div>

              <button type="submit" className="btn-hero-primary" style={{ marginTop: '8px', padding: '16px', fontSize: '1.1rem', width: '100%', border: 'none', cursor: 'pointer' }}>
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
