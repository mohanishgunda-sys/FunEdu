import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CheckCircle, Target, Lightbulb, Rocket } from 'lucide-react';

const ScrollAnimation: React.FC = () => {
  const features = [
    {
      icon: <Target size={32} />,
      title: "Personalized Learning Paths",
      description: "Tailored curriculum that adapts to each child's learning style and pace."
    },
    {
      icon: <CheckCircle size={32} />,
      title: "Progress Tracking",
      description: "Real-time monitoring of learning progress with detailed analytics."
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Creative Problem Solving",
      description: "Develop critical thinking skills through interactive challenges."
    },
    {
      icon: <Rocket size={32} />,
      title: "Future-Ready Skills",
      description: "Prepare children for tomorrow with modern digital literacy."
    }
  ];

  return (
    <section className="section-padding">
      <Container>
        {/* Removed align-items-center to stop vertical centering */}
        <Row>
          <Col lg={6} className="mb-lg-0">
            <div className="fade-in-left" style={{ paddingTop: "150px" }}>
              <h2 className="display-5 fw-bold parallax-element" data-speed="0.2" style={{ marginBottom: "8px !important", lineHeight: "1.2" }}>
                Why Choose
                <span className="gradient-text d-block">Our Platform?</span>
              </h2>
              <p className="lead mb-5 fade-in-left stagger-1" style={{ marginBottom: "12px !important", marginTop: "0 !important", color: 'var(--text-light)', lineHeight: "1.4" }}>
                We believe learning should be joyful, engaging, and effective. Our platform combines 
                cutting-edge technology with proven educational methodologies.
              </p>

              <div className="features-list">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className={`d-flex align-items-start mb-4 fade-in-left stagger-${index + 2}`}
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div 
                      style={{
                        background: 'linear-gradient(135deg, var(--primary-peach), var(--accent-coral))',
                        borderRadius: '50%',
                        width: '60px',
                        height: '60px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white'
                      }}
                      className="interactive-logo morphing-shape me-3 flex-shrink-0"
                    >
                      {feature.icon}
                    </div>
                    <div>
                      <h5 className="fw-bold mb-2">{feature.title}</h5>
                      <p className="mb-0" style={{ color: 'var(--text-light)' }}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Col>

          <Col lg={6}>
            <div className="position-relative">
              <div 
                className="animation-container fade-in-right parallax-element"
                data-speed="0.1"
                style={{
                  background: 'linear-gradient(135deg, var(--light-peach), var(--secondary-peach))',
                  borderRadius: '30px',
                  marginTop: '450px',
                  padding: '40px',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                {/* Animated People */}
                <div 
                  className="animated-person"
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    fontSize: '2rem',
                    animationDelay: '0.5s'
                  }}
                >
                  👨‍💻
                </div>
                
                <div 
                  className="animated-person"
                  style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '10px',
                    fontSize: '1.8rem',
                    animationDelay: '1.5s'
                  }}
                >
                  👩‍🎓
                </div>

                {/* Floating elements */}
                <div className="floating-elements">
                  <div 
                    className="floating-animation interactive-logo"
                    style={{
                      position: 'absolute',
                      top: '20px',
                      left: '20px',
                      fontSize: '2rem',
                      animationDelay: '0s'
                    }}
                  >
                    🌟
                  </div>
                  <div 
                    className="floating-animation interactive-logo"
                    style={{
                      position: 'absolute',
                      top: '30px',
                      right: '30px',
                      fontSize: '1.5rem',
                      animationDelay: '1s'
                    }}
                  >
                    🎈
                  </div>
                  <div 
                    className="floating-animation interactive-logo"
                    style={{
                      position: 'absolute',
                      bottom: '40px',
                      left: '40px',
                      fontSize: '1.8rem',
                      animationDelay: '2s'
                    }}
                  >
                    🚀
                  </div>
                  <div 
                    className="floating-animation interactive-logo"
                    style={{
                      position: 'absolute',
                      bottom: '20px',
                      right: '20px',
                      fontSize: '2.2rem',
                      animationDelay: '0.5s'
                    }}
                  >
                    🎯
                  </div>
                </div>

                <div style={{ fontSize: '6rem', marginBottom: '20px' }}>🧠</div>
                <h3 className="fw-bold text-white mb-3">Smart Learning</h3>
                <p className="text-white opacity-75 mb-0">
                  AI-powered education that grows with your child
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ScrollAnimation;
