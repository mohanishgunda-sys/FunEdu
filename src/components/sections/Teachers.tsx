import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Star, Award, Heart } from 'lucide-react';

const Teachers: React.FC = () => {
  const teachers = [
    {
      name: "Sarah Johnson",
      subject: "Creative Arts & Design",
      experience: "8 years",
      rating: 4.9,
      avatar: "👩‍🎨",
      specialty: "Visual Arts",
      color: "var(--accent-pink)"
    },
    {
      name: "Michael Chen",
      subject: "Mathematics & Logic",
      experience: "12 years",
      rating: 4.8,
      avatar: "👨‍🏫",
      specialty: "Problem Solving",
      color: "var(--primary-peach)"
    },
    {
      name: "Emma Williams",
      subject: "Language & Literature",
      experience: "10 years",
      rating: 5.0,
      avatar: "👩‍📚",
      specialty: "Storytelling",
      color: "var(--accent-lavender)"
    },
    {
      name: "David Rodriguez",
      subject: "Science & Discovery",
      experience: "15 years",
      rating: 4.9,
      avatar: "👨‍🔬",
      specialty: "Experiments",
      color: "var(--accent-coral)"
    }
  ];

  return (
    <section className="section-padding" style={{ background: 'var(--soft-gray)' }}>
      <Container>
        <Row>
          <Col lg={8} className="mx-auto text-center mb-5">
            <h2 className="display-5 fw-bold mb-3 fade-in-up">
              Meet Our Amazing
              <span className="gradient-text d-block">Teachers</span>
            </h2>
            <p className="lead fade-in-up stagger-1" style={{ color: 'var(--text-light)' }}>
              Passionate educators dedicated to inspiring young minds every day
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {teachers.map((teacher, index) => (
            <Col lg={3} md={6} key={index}>
              <Card 
                className={`teacher-card border-0 hover-lift scale-in enhanced-hover h-100 stagger-${index + 1}`}
                style={{
                  background: 'white',
                  borderRadius: '25px',
                  boxShadow: '0 5px 20px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <Card.Body className="text-center p-4">
                  <div 
                    className="teacher-avatar mb-3 mx-auto floating-animation interactive-logo glow-effect"
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${teacher.color}, var(--secondary-peach))`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '3rem',
                      boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                      position: 'relative',
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    {teacher.avatar}
                    <div 
                      className="pulse-animation"
                      style={{
                        position: 'absolute',
                        top: '-5px',
                        right: '-5px',
                        background: 'var(--accent-coral)',
                        borderRadius: '50%',
                        width: '30px',
                        height: '30px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <Award color="white" size={16} />
                    </div>
                  </div>

                  <h5 className="fw-bold mb-2">{teacher.name}</h5>
                  <p className="text-primary mb-1 fw-medium" style={{ color: teacher.color + ' !important' }}>
                    {teacher.subject}
                  </p>
                  <p className="small mb-3" style={{ color: 'var(--text-light)' }}>
                    {teacher.experience} • {teacher.specialty}
                  </p>

                  <div className="d-flex align-items-center justify-content-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className={`me-1 ${i < Math.floor(teacher.rating) ? 'text-warning' : 'text-muted'}`}
                        fill={i < Math.floor(teacher.rating) ? 'currentColor' : 'none'}
                      />
                    ))}
                    <span className="ms-2 fw-medium">{teacher.rating}</span>
                  </div>

                  <div 
                    className="specialty-badge"
                    style={{
                      background: `linear-gradient(135deg, ${teacher.color}20, ${teacher.color}10)`,
                      borderRadius: '15px',
                      padding: '8px 16px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      fontSize: '0.9rem',
                      color: teacher.color
                    }}
                  >
                    <Heart size={14} className="me-1" />
                    {teacher.specialty}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Teachers;