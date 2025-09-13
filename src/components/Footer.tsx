import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer 
      className="footer-section"
      style={{
        background: 'linear-gradient(135deg, var(--text-dark) 0%, var(--text-light) 100%)',
        color: 'white',
        paddingTop: '60px',
        paddingBottom: '20px'
      }}
    >
      <Container>
        <Row className="g-4">
          <Col lg={4} md={6}>
            <div className="footer-brand mb-4">
              <div className="d-flex align-items-center mb-3">
                <BookOpen size={32} className="me-2" style={{ color: 'var(--primary-peach)' }} />
                <h4 className="gradient-text fw-bold mb-0">EduFun</h4>
              </div>
              <p className="opacity-75 mb-4">
                Making learning magical and accessible for every child. Join our community of young explorers and discover the joy of education.
              </p>
              <div className="social-links d-flex gap-3">
                {[
                  { icon: <Facebook size={20} />, color: 'var(--accent-pink)' },
                  { icon: <Twitter size={20} />, color: 'var(--primary-peach)' },
                  { icon: <Instagram size={20} />, color: 'var(--accent-coral)' },
                  { icon: <Youtube size={20} />, color: 'var(--accent-lavender)' }
                ].map((social, index) => (
                  <div
                    key={index}
                    className="social-icon floating-animation"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: social.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      animationDelay: `${index * 0.1}s`
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px) scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    }}
                  >
                    {social.icon}
                  </div>
                ))}
              </div>
            </div>
          </Col>

          <Col lg={2} md={6}>
            <h6 className="fw-bold mb-3" style={{ color: 'var(--primary-peach)' }}>Quick Links</h6>
            <ul className="list-unstyled">
              {['About Us', 'Our Courses', 'Teachers', 'Pricing', 'Contact'].map((link, index) => (
                <li key={index} className="mb-2">
                  <a 
                    href="#" 
                    className="text-decoration-none opacity-75 hover-link"
                    style={{ color: 'white', transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--primary-peach)';
                      e.currentTarget.style.paddingLeft = '5px';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.paddingLeft = '0';
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          <Col lg={2} md={6}>
            <h6 className="fw-bold mb-3" style={{ color: 'var(--primary-peach)' }}>Learning</h6>
            <ul className="list-unstyled">
              {['Math Games', 'Science Fun', 'Art Studio', 'Music Room', 'Reading Zone'].map((link, index) => (
                <li key={index} className="mb-2">
                  <a 
                    href="#" 
                    className="text-decoration-none opacity-75 hover-link"
                    style={{ color: 'white', transition: 'all 0.3s ease' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--accent-coral)';
                      e.currentTarget.style.paddingLeft = '5px';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.paddingLeft = '0';
                    }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </Col>

          <Col lg={4} md={6}>
            <h6 className="fw-bold mb-3" style={{ color: 'var(--primary-peach)' }}>Get in Touch</h6>
            <div className="contact-info">
              {[
                { icon: <Mail size={18} />, text: 'hello@edufun.com' },
                { icon: <Phone size={18} />, text: '+1 (555) 123-4567' },
                { icon: <MapPin size={18} />, text: '123 Learning Street, Education City' }
              ].map((contact, index) => (
                <div key={index} className="d-flex align-items-center mb-3">
                  <div 
                    className="contact-icon me-3"
                    style={{
                      width: '35px',
                      height: '35px',
                      borderRadius: '8px',
                      background: 'var(--accent-pink)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    {contact.icon}
                  </div>
                  <span className="opacity-75">{contact.text}</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>

        <hr className="my-4 opacity-25" />

        <Row>
          <Col md={6}>
            <p className="mb-0 opacity-75">
              © 2025 EduFun. All rights reserved. Made with ❤️ for young learners.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <div className="footer-links">
              <a href="#" className="text-decoration-none me-3 opacity-75" style={{ color: 'white' }}>
                Privacy Policy
              </a>
              <a href="#" className="text-decoration-none me-3 opacity-75" style={{ color: 'white' }}>
                Terms of Service
              </a>
              <a href="#" className="text-decoration-none opacity-75" style={{ color: 'white' }}>
                Cookies
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;