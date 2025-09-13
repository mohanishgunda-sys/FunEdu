import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Sparkles, Heart, Star, Zap, Users, BookOpen, Award } from 'lucide-react';

const Hero: React.FC = () => {
  const handlePersonClick = (person: string) => {
    console.log(`Clicked on ${person}!`);
    // Add fun interaction here
  };

  return (
    <section id="home" className="hero-section" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
      <Container>
        <Row className="align-items-center min-vh-75">
          <Col lg={6} className="text-center text-lg-start position-relative">
            {/* Animated People */}
            <div 
              className="animated-person"
              style={{
                top: '80%',
                left: '60%',
                fontSize: '4rem',
                animationDelay: '0s'
              }}
              onClick={() => handlePersonClick('teacher')}
            >
              👩‍🏫
            </div>
            
            <div 
              className="animated-person"
              style={{
                top: '-20%',
                left: '40%',
                fontSize: '4.5rem',
                animationDelay: '1s'
              }}
              onClick={() => handlePersonClick('student')}
            >
              👨‍🎓
            </div>

            <div 
              className="animated-person"
              style={{
                top: '30%',
                right: '5%',
                fontSize: '3rem',
                animationDelay: '2s'
              }}
              onClick={() => handlePersonClick('child')}
            >
              🧒
            </div>

            <div className="hero-content fade-in-left">
              <h1 className="display-3 fw-bold mb-4 mt-2">
                Learning Made
                <span className="gradient-text d-block">Magical!</span>
              </h1>
              <p className="lead mb-4" style={{ color: 'var(--text-light)', fontSize: '1.2rem' }}>
                "Every child is a different kind of flower, and all together make this world a beautiful garden."
              </p>
              <div className="d-flex gap-3 justify-content-center justify-content-lg-start flex-wrap">
                <Button className="custom-btn enhanced-hover">
                  <Sparkles size={18} className="me-2" />
                  Start Learning
                </Button>
                <Button variant="outline-primary" className="border-2 enhanced-hover" style={{
                  borderColor: 'var(--accent-coral)',
                  color: 'var(--accent-coral)',
                  borderRadius: '25px',
                  padding: '12px 30px'
                }}>
                  Watch Demo
                </Button>
              </div>
            </div>
          </Col>
          
          <Col lg={6} className="text-center">
            <div className="hero-animations position-relative fade-in-right">
              <div className="floating-character" style={{
                position: 'absolute',
                top: '20%',
                left: '10%',
                animation: 'float 3s ease-in-out infinite',
                animationDelay: '0s'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, var(--accent-pink), var(--primary-peach))',
                  borderRadius: '50%',
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 5px 15px rgba(255, 182, 193, 0.33)'
                }}
                className="interactive-logo glow-effect">
                  <Heart color="white" size={28} />
                </div>
              </div>

              <div className="floating-character" style={{
                position: 'absolute',
                top: '10%',
                right: '15%',
                animation: 'float 3s ease-in-out infinite',
                animationDelay: '1s'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, var(--accent-lavender), var(--secondary-peach))',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 5px 15px rgba(230, 230, 250, 0.3)'
                }}
                className="interactive-logo">
                  <Star color="white" size={24} />
                </div>
              </div>

              <div className="floating-character" style={{
                position: 'absolute',
                bottom: '30%',
                left: '20%',
                animation: 'float 3s ease-in-out infinite',
                animationDelay: '2s'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, var(--primary-peach), var(--accent-coral))',
                  borderRadius: '50%',
                  width: '70px',
                  height: '70px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 5px 15px rgba(255, 207, 158, 0.3)'
                }}
                className="interactive-logo morphing-shape">
                  <Zap color="white" size={32} />
                </div>
              </div>

              <div className="main-character" style={{
                background: 'linear-gradient(135deg, var(--primary-peach), var(--secondary-peach))',
                borderRadius: '20px',
                padding: '40px',
                margin: '0 auto',
                maxWidth: '300px',
                boxShadow: '0 20px 40px rgba(255, 207, 158, 0.52)',
                animation: 'pulse 2s ease-in-out infinite'
              }}>
                <div style={{
                  fontSize: '4rem',
                  textAlign: 'center',
                  marginBottom: '20px'
                }}>
                  🎓
                </div>
                <h4 className="text-center text-white mb-0">Ready to Learn?</h4>
              </div>

              <div className="floating-character" style={{
                position: 'absolute',
                bottom: '20%',
                right: '10%',
                animation: 'float 3s ease-in-out infinite',
                animationDelay: '0.5s'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, var(--accent-coral), var(--accent-pink))',
                  borderRadius: '50%',
                  width: '55px',
                  height: '55px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 5px 15px rgba(255, 154, 139, 0.3)'
                }}
                className="interactive-logo glow-effect">
                  <Sparkles color="white" size={26} />
                </div>
              </div>

              {/* Additional floating educational icons */}
              <div className="floating-character parallax-element" data-speed="0.3" style={{
                position: 'absolute',
                top: '70%',
                left: '5%',
                animation: 'float 4s ease-in-out infinite',
                animationDelay: '1.5s'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, var(--secondary-peach), var(--light-peach))',
                  borderRadius: '50%',
                  width: '45px',
                  height: '45px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 5px 15px rgba(255, 219, 190, 0.3)'
                }}
                className="interactive-logo">
                  <BookOpen color="white" size={22} />
                </div>
              </div>

              <div className="floating-character parallax-element" data-speed="0.4" style={{
                position: 'absolute',
                top: '15%',
                left: '70%',
                animation: 'float 3.5s ease-in-out infinite',
                animationDelay: '2.5s'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, var(--accent-pink), var(--accent-lavender))',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 5px 15px rgba(255, 182, 193, 0.3)'
                }}
                className="interactive-logo">
                  <Award color="white" size={20} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;