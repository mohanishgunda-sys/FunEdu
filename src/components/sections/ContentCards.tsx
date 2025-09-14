import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BookOpen, Users, Trophy, Gamepad2, Palette, Music } from 'lucide-react';

const ContentCards: React.FC = () => {
  const cards = [
    {
      icon: <BookOpen size={40} />,
      title: "Interactive Learning",
      description: "Engaging lessons that make learning fun and memorable",
      color: "var(--primary-peach)",
      emoji: "📚"
    },
    {
      icon: <Users size={40} />,
      title: "Social Learning",
      description: "Connect with peers and learn together in a safe environment",
      color: "var(--accent-pink)",
      emoji: "👫"
    },
    {
      icon: <Trophy size={40} />,
      title: "Achievement System",
      description: "Earn badges and rewards as you progress through your journey",
      color: "var(--accent-lavender)",
      emoji: "🏆"
    },
    {
      icon: <Gamepad2 size={40} />,
      title: "Educational Games",
      description: "Learn through play with our collection of educational games",
      color: "var(--accent-coral)",
      emoji: "🎮"
    },
    {
      icon: <Palette size={40} />,
      title: "Creative Arts",
      description: "Express creativity through digital art and design projects",
      color: "var(--secondary-peach)",
      emoji: "🎨"
    },
    {
      icon: <Music size={40} />,
      title: "Music & Rhythm",
      description: "Discover the joy of music with interactive instruments",
      color: "var(--accent-pink)",
      emoji: "🎵"
    }
  ];

  return (
    <section className="section-padding" style={{ background: 'var(--soft-gray)' }}>
      <Container>
        <Row>
          <Col lg={8} className="mx-auto text-center mb-5">
            <h2 className="display-5 fw-bold mb-3 fade-in-up">
              Discover Amazing
              <span className="gradient-text d-block">Learning Features</span>
            </h2>
            <p className="lead fade-in-up stagger-1" style={{ color: 'var(--text-light)' }}>
              Every feature is designed to spark curiosity and make learning an adventure
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {cards.map((card, index) => (
            <Col lg={4} md={6} key={index}>
              <Card 
                className={`h-100 border-0 hover-lift scale-in enhanced-hover stagger-${index + 1}`}
                style={{
                  background: 'white',
                  borderRadius: '20px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                  transition: 'all 0.3s ease',
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <Card.Body className="p-4 text-center">
                  <div 
                    className="icon-wrapper mb-4 mx-auto floating-animation interactive-logo glow-effect"
                    style={{
                      background: `linear-gradient(135deg, ${card.color}, var(--secondary-peach))`,
                      borderRadius: '50%',
                      width: '80px',
                      height: '80px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      position: 'relative',
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    {card.icon}
                    <span 
                      style={{
                        position: 'absolute',
                        top: '-10px',
                        right: '-10px',
                        fontSize: '1.5rem'
                      }}
                    >
                      {card.emoji}
                    </span>
                  </div>
                  <Card.Title className="h5 fw-bold mb-3">{card.title}</Card.Title>
                  <Card.Text style={{ color: 'var(--text-light)' }}>
                    {card.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default ContentCards;