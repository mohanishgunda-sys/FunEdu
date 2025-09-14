import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';
import { Users, BookOpen, Trophy, Clock } from 'lucide-react';

const Stats: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    {
      icon: <Users size={40} />,
      number: 25000,
      label: "Happy Students",
      suffix: "+",
      color: "var(--primary-peach)",
      emoji: "👨‍🎓"
    },
    {
      icon: <BookOpen size={40} />,
      number: 1200,
      label: "Interactive Lessons",
      suffix: "+",
      color: "var(--accent-coral)",
      emoji: "📚"
    },
    {
      icon: <Trophy size={40} />,
      number: 98,
      label: "Success Rate",
      suffix: "%",
      color: "var(--accent-pink)",
      emoji: "🏆"
    },
    {
      icon: <Clock size={40} />,
      number: 5,
      label: "Years Experience",
      suffix: "+",
      color: "var(--accent-lavender)",
      emoji: "⭐"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('stats-section');
      if (element) {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible && !isVisible) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  return (
    <section id="stats-section" className="section-padding gradient-bg">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto text-center mb-5">
            <h2 className="display-5 fw-bold mb-3 text-white fade-in-up">
              Our Impact in Numbers
            </h2>
            <p className="lead text-white opacity-75 fade-in-up stagger-1">
              Join thousands of families who trust us with their children's education
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {stats.map((stat, index) => (
            <Col lg={3} md={6} key={index}>
              <div 
                className={`stat-card text-center p-4 scale-in enhanced-hover stagger-${index + 1}`}
                style={{
                  background: 'rgba(255, 255, 255, 0.15)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  transition: 'all 0.3s ease',
                  animationDelay: `${index * 0.1}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.25)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                }}
              >
                <div 
                  className="icon-container mb-3 mx-auto floating-animation interactive-logo glow-effect"
                  style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    position: 'relative',
                    animationDelay: `${index * 0.2}s`
                  }}
                >
                  {stat.icon}
                  <span 
                    style={{
                      position: 'absolute',
                      top: '-5px',
                      right: '-5px',
                      fontSize: '1.5rem'
                    }}
                  >
                    {stat.emoji}
                  </span>
                </div>

                <div className="stat-number mb-2">
                  <span 
                    className="display-4 fw-bold text-white"
                    style={{
                      textShadow: '0 2px 10px rgba(0,0,0,0.1)'
                    }}
                  >
                    {isVisible && (
                      <CountUp
                        end={stat.number}
                        duration={2.5}
                        delay={index * 0.2}
                      />
                    )}
                    {stat.suffix}
                  </span>
                </div>

                <p className="mb-0 text-white fw-medium">
                  {stat.label}
                </p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Stats;