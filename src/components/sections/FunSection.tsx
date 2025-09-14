import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Play, Pause, RotateCcw, CheckCircle } from 'lucide-react';

const FunSection: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const quizQuestions = [
    {
      question: "What color do you get when you mix red and yellow?",
      answer: "Orange! 🧡",
      emoji: "🎨"
    },
    {
      question: "How many legs does a spider have?",
      answer: "Eight legs! 🕷️",
      emoji: "🕸️"
    },
    {
      question: "What do bees make?",
      answer: "Honey! 🍯",
      emoji: "🐝"
    }
  ];

  const handleNextQuestion = () => {
    setCurrentQuestion((prev) => (prev + 1) % quizQuestions.length);
    setShowAnswer(false);
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="section-padding">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto text-center mb-5">
            <h2 className="display-5 fw-bold mb-3 fade-in-up">
              Fun Learning
              <span className="gradient-text d-block">Zone</span>
            </h2>
            <p className="lead fade-in-up stagger-1" style={{ color: 'var(--text-light)' }}>
              Interactive activities to spark curiosity and make learning memorable
            </p>
          </Col>
        </Row>

        <Row className="g-4">
          {/* Quiz Game */}
          <Col lg={6}>
            <Card 
              className="fun-card border-0 hover-lift fade-in-left enhanced-hover h-100"
              style={{
                background: 'linear-gradient(135deg, var(--primary-peach), var(--secondary-peach))',
                borderRadius: '25px',
                boxShadow: '0 10px 30px rgba(255, 207, 158, 0.3)'
              }}
            >
              <Card.Body className="p-4 text-center text-white">
                <h4 className="fw-bold mb-4">🧩 Quick Quiz</h4>
                
                {/* Animated person for quiz section */}
                <div 
                  className="animated-person"
                  style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    fontSize: '2rem'
                  }}
                >
                  🤔
                </div>
                
                <div 
                  className="question-container mb-4"
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '15px',
                    padding: '20px',
                    minHeight: '120px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                  }}
                >
                  <div className="emoji mb-3" style={{ fontSize: '2.5rem' }}>
                    {quizQuestions[currentQuestion].emoji}
                  </div>
                  <p className="mb-0 fw-medium">
                    {quizQuestions[currentQuestion].question}
                  </p>
                </div>

                {showAnswer && (
                  <div 
                    className="answer-reveal mb-3 pulse-animation"
                    style={{
                      background: 'rgba(255, 255, 255, 0.3)',
                      borderRadius: '15px',
                      padding: '15px'
                    }}
                  >
                    <CheckCircle className="mb-2" size={24} />
                    <p className="mb-0 fw-bold">
                      {quizQuestions[currentQuestion].answer}
                    </p>
                  </div>
                )}

                <div className="d-flex gap-2 justify-content-center">
                  {!showAnswer ? (
                    <Button 
                      className="custom-btn enhanced-hover interactive-logo"
                      onClick={handleShowAnswer}
                      style={{ background: 'rgba(255, 255, 255, 0.2)', border: 'none' }}
                    >
                      Show Answer
                    </Button>
                  ) : (
                    <Button 
                      className="custom-btn enhanced-hover interactive-logo"
                      onClick={handleNextQuestion}
                      style={{ background: 'rgba(255, 255, 255, 0.2)', border: 'none' }}
                    >
                      <RotateCcw size={18} className="me-2" />
                      Next Question
                    </Button>
                  )}
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Interactive Music Player */}
          <Col lg={6}>
            <Card 
              className="fun-card border-0 hover-lift fade-in-right enhanced-hover h-100"
              style={{
                background: 'linear-gradient(135deg, var(--accent-pink), var(--accent-lavender))',
                borderRadius: '25px',
                boxShadow: '0 10px 30px rgba(255, 182, 193, 0.3)'
              }}
            >
              <Card.Body className="p-4 text-center text-white">
                <h4 className="fw-bold mb-4">🎵 Music Corner</h4>
                
                {/* Animated person for music section */}
                <div 
                  className="animated-person"
                  style={{
                    position: 'absolute',
                    top: '10px',
                    left: '10px',
                    fontSize: '2rem'
                  }}
                >
                  🎤
                </div>
                
                <div 
                  className={`music-visualizer mb-4 ${isPlaying ? 'playing' : ''}`}
                  style={{
                    background: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '15px',
                    padding: '30px',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div className="music-emoji" style={{ fontSize: '3rem', marginBottom: '10px' }}>
                    🎼
                  </div>
                  
                  <div className="music-bars d-flex justify-content-center align-items-end gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`music-bar ${isPlaying ? 'animate' : ''}`}
                        style={{
                          width: '8px',
                          height: `${20 + Math.random() * 20}px`,
                          background: 'white',
                          borderRadius: '4px',
                          animation: isPlaying ? `musicBar 0.${5 + i}s infinite ease-in-out alternate` : 'none',
                          animationDelay: `${i * 0.1}s`
                        }}
                      />
                    ))}
                  </div>

                  <p className="mb-0 fw-medium">
                    {isPlaying ? '🎶 Playing: Learning Song!' : '🎵 Press play to start'}
                  </p>
                </div>

                <Button 
                  className="custom-btn enhanced-hover interactive-logo d-flex align-items-center justify-content-center mx-auto"
                  onClick={handlePlayPause}
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.2)', 
                    border: 'none',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%'
                  }}
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <style jsx>{`
          @keyframes musicBar {
            from { height: 10px; }
            to { height: 40px; }
          }
          
          .music-visualizer.playing .music-emoji {
            animation: bounce 1s infinite;
          }
          
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
          }
        `}</style>
      </Container>
    </section>
  );
};

export default FunSection;