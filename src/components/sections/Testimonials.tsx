import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Jennifer Martinez",
      role: "Parent of Emma (Age 8)",
      content: "My daughter absolutely loves the interactive lessons! She's learned more in 3 months than she did all year. The teachers are amazing and the platform is so engaging.",
      rating: 5,
      avatar: "👩‍💼",
      color: "var(--accent-pink)"
    },
    {
      name: "Robert Thompson",
      role: "Parent of Alex (Age 10)",
      content: "The progress tracking feature is incredible. I can see exactly how Alex is improving, and he's so motivated by the achievement system. Highly recommend!",
      rating: 5,
      avatar: "👨‍💻",
      color: "var(--primary-peach)"
    },
    {
      name: "Lisa Chen",
      role: "Parent of Sophie (Age 7)",
      content: "Sophie was struggling with math, but the gamified approach here made all the difference. She actually asks to do her 'homework' now!",
      rating: 5,
      avatar: "👩‍⚕️",
      color: "var(--accent-lavender)"
    },
    {
      name: "Mark Wilson",
      role: "Parent of Jake (Age 9)",
      content: "The creativity tools are outstanding. Jake has discovered a love for digital art and storytelling. This platform nurtures the whole child.",
      rating: 5,
      avatar: "👨‍🎨",
      color: "var(--accent-coral)"
    }
  ];

  return (
    <section className="section-padding" style={{ background: 'var(--soft-gray)' }}>
      <Container>
        <Row>
          <Col lg={8} className="mx-auto text-center mb-5">
            <h2 className="display-5 fw-bold mb-3 fade-in-up">
              What Parents
              <span className="gradient-text d-block">Are Saying</span>
            </h2>
            <p className="lead fade-in-up stagger-1" style={{ color: 'var(--text-light)' }}>
              Real stories from real families who've experienced the magic of learning
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {testimonials.map((testimonial, index) => (
            <Col lg={6} key={index}>
              <Card 
                className={`testimonial-card border-0 hover-lift fade-in-up enhanced-hover h-100 stagger-${index + 1}`}
                style={{
                  background: 'white',
                  borderRadius: '25px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  animationDelay: `${index * 0.1}s`,
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div 
                  className="quote-bg"
                  style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    width: '100px',
                    height: '100px',
                    background: `linear-gradient(135deg, ${testimonial.color}20, ${testimonial.color}10)`,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: 0.5
                  }}
                >
                  <Quote size={40} style={{ color: testimonial.color }} />
                </div>

                <Card.Body className="p-4">
                  <div className="d-flex align-items-center mb-3">
                    <div 
                      className="avatar-container me-3 floating-animation interactive-logo"
                      style={{
                        width: '60px',
                        height: '60px',
                        borderRadius: '50%',
                        background: `linear-gradient(135deg, ${testimonial.color}, var(--secondary-peach))`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.8rem',
                        animationDelay: `${index * 0.2}s`
                      }}
                    >
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">{testimonial.name}</h6>
                      <small style={{ color: 'var(--text-light)' }}>
                        {testimonial.role}
                      </small>
                    </div>
                  </div>

                  <div className="d-flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className="text-warning me-1"
                        fill="currentColor"
                      />
                    ))}
                  </div>

                  <blockquote className="mb-0">
                    <p 
                      className="mb-0 fst-italic"
                      style={{ 
                        color: 'var(--text-dark)',
                        lineHeight: '1.6'
                      }}
                    >
                      "{testimonial.content}"
                    </p>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;