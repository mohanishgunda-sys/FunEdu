import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Target, Heart, Rocket, Quote, Linkedin, Twitter, Mail } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'CEO & Co-Founder',
    bio: 'Former elementary school teacher with 15 years of experience. Sarah founded Fun Edu to bring joy back into learning.',
    image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    twitter: '#',
    email: 'sarah@funedu.com'
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'CTO & Co-Founder',
    bio: 'Software engineer passionate about EdTech. David leads our technology vision and product development.',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    twitter: '#',
    email: 'david@funedu.com'
  },
  {
    id: 3,
    name: 'Maria Rodriguez',
    role: 'Head of Curriculum',
    bio: 'Curriculum specialist with a PhD in Educational Psychology. Maria ensures our content is both fun and effective.',
    image: 'https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    email: 'maria@funedu.com'
  },
  {
    id: 4,
    name: 'James Wilson',
    role: 'Lead Designer',
    bio: 'Creative director who believes design can change the world. James makes learning beautiful and intuitive.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    twitter: '#',
    email: 'james@funedu.com'
  },
  {
    id: 5,
    name: 'Emily Thompson',
    role: 'Head of Content',
    bio: 'Award-winning children\'s book author turned educational content creator. Emily brings stories to life.',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    email: 'emily@funedu.com'
  },
  {
    id: 6,
    name: 'Alex Kumar',
    role: 'Data Scientist',
    bio: 'Uses analytics to personalize learning experiences. Alex helps us understand what makes students succeed.',
    image: 'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=400',
    linkedin: '#',
    twitter: '#',
    email: 'alex@funedu.com'
  }
];

const About: React.FC = () => {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'linear-gradient(135deg, #FFF9F5 0%, #FFE8F0 100%)' }}>
      <Container>
        <div className="text-center mb-5 fade-in-up">
          <h1 className="display-4 fw-bold mb-3">
            <span style={{ background: 'linear-gradient(135deg, #FF6B9D, #FFA07A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              About Fun Edu
            </span>
          </h1>
          <p className="lead text-muted">Making education magical for every child</p>
        </div>

        <Row className="mb-5 align-items-center">
          <Col lg={6} className="mb-4 mb-lg-0 fade-in-left">
            <div style={{ position: 'relative' }}>
              <img
                src="https://images.pexels.com/photos/8535230/pexels-photo-8535230.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Children learning"
                style={{
                  width: '100%',
                  borderRadius: '25px',
                  boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)'
                }}
              />
            </div>
          </Col>
          <Col lg={6} className="fade-in-right">
            <h2 className="fw-bold mb-4" style={{ color: '#333' }}>Our Story</h2>
            <p className="text-muted mb-3" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Fun Edu was born from a simple observation: children are naturally curious, but traditional education
              often dims that spark. In 2018, our founders came together with a shared mission to change that.
            </p>
            <p className="text-muted mb-3" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              What started as a small project creating interactive math games has grown into a comprehensive
              learning platform used by over 100,000 students worldwide. We've stayed true to our core belief:
              when learning is fun, children thrive.
            </p>
            <p className="text-muted" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Today, we're a team of educators, designers, and technologists united by the goal of making
              quality education accessible, engaging, and joyful for every child.
            </p>
          </Col>
        </Row>

        <div
          className="mb-5 p-5 fade-in-up"
          style={{
            background: 'white',
            borderRadius: '25px',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.08)'
          }}
        >
          <h2 className="text-center fw-bold mb-5" style={{ color: '#333' }}>Our Mission & Values</h2>
          <Row className="g-4">
            <Col md={4}>
              <div className="text-center">
                <div
                  className="mx-auto mb-3"
                  style={{
                    width: '90px',
                    height: '90px',
                    background: 'linear-gradient(135deg, #FF6B9D, #FFA07A)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 25px rgba(255, 107, 157, 0.3)'
                  }}
                >
                  <Target size={42} color="white" />
                </div>
                <h4 className="fw-bold mb-3" style={{ color: '#333' }}>Our Mission</h4>
                <p className="text-muted" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                  To ignite curiosity and foster a love of learning in every child through innovative,
                  engaging educational experiences.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center">
                <div
                  className="mx-auto mb-3"
                  style={{
                    width: '90px',
                    height: '90px',
                    background: 'linear-gradient(135deg, #FFA07A, #FFB84D)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 25px rgba(255, 160, 122, 0.3)'
                  }}
                >
                  <Heart size={42} color="white" />
                </div>
                <h4 className="fw-bold mb-3" style={{ color: '#333' }}>Student First</h4>
                <p className="text-muted" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                  Every decision we make is guided by what's best for students. Their growth,
                  confidence, and joy in learning are our top priorities.
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="text-center">
                <div
                  className="mx-auto mb-3"
                  style={{
                    width: '90px',
                    height: '90px',
                    background: 'linear-gradient(135deg, #FFB84D, #FF6B9D)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 10px 25px rgba(255, 184, 77, 0.3)'
                  }}
                >
                  <Rocket size={42} color="white" />
                </div>
                <h4 className="fw-bold mb-3" style={{ color: '#333' }}>Innovation</h4>
                <p className="text-muted" style={{ fontSize: '1rem', lineHeight: '1.7' }}>
                  We constantly push boundaries, combining pedagogy with technology to create
                  learning experiences that were impossible just years ago.
                </p>
              </div>
            </Col>
          </Row>
        </div>

        <div
          className="mb-5 p-5 fade-in-up"
          style={{
            background: 'linear-gradient(135deg, #FF6B9D, #FFA07A)',
            borderRadius: '25px',
            color: 'white'
          }}
        >
          <Quote size={48} style={{ opacity: 0.5, marginBottom: '20px' }} />
          <h3 className="fw-bold mb-3" style={{ fontSize: '1.8rem', lineHeight: '1.5' }}>
            "Education is not the filling of a pail, but the lighting of a fire."
          </h3>
          <p className="mb-0" style={{ fontSize: '1.2rem', opacity: 0.9 }}>
            This philosophy guides everything we do at Fun Edu.
          </p>
        </div>

        <div className="mb-5">
          <h2 className="text-center fw-bold mb-5" style={{ color: '#333' }}>Meet Our Team</h2>
          <Row className="g-4">
            {teamMembers.map((member, index) => (
              <Col key={member.id} xs={12} sm={6} lg={4}>
                <div
                  className="h-100 fade-in-up team-member-card"
                  style={{
                    background: 'white',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                  }}
                >
                  <div style={{ height: '280px', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.1) rotate(2deg)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to bottom, transparent 0%, transparent 60%, rgba(0,0,0,0.7) 100%)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        padding: '20px'
                      }}
                      className="team-member-overlay"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = '1';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = '0';
                      }}
                    >
                      <p className="text-white fw-semibold mb-0" style={{ fontSize: '1.1rem' }}>
                        {member.role}
                      </p>
                    </div>
                  </div>
                  <div style={{ padding: '25px' }}>
                    <h5 className="fw-bold mb-1" style={{ color: '#333' }}>{member.name}</h5>
                    <p className="mb-3" style={{ color: '#FF6B9D', fontWeight: '600', fontSize: '0.95rem' }}>
                      {member.role}
                    </p>
                    <p className="text-muted mb-3" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                      {member.bio}
                    </p>
                    <div className="d-flex gap-2">
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          style={{
                            width: '36px',
                            height: '36px',
                            background: '#0077B5',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'transform 0.2s ease'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                          <Linkedin size={18} color="white" />
                        </a>
                      )}
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          style={{
                            width: '36px',
                            height: '36px',
                            background: '#1DA1F2',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'transform 0.2s ease'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                          <Twitter size={18} color="white" />
                        </a>
                      )}
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          style={{
                            width: '36px',
                            height: '36px',
                            background: '#EA4335',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'transform 0.2s ease'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                        >
                          <Mail size={18} color="white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        <div
          className="text-center mb-5 p-5 fade-in-up"
          style={{
            background: 'white',
            borderRadius: '25px',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.08)'
          }}
        >
          <h3 className="fw-bold mb-3" style={{ color: '#333' }}>By the Numbers</h3>
          <Row className="mt-4">
            <Col xs={6} md={3} className="mb-3 mb-md-0">
              <h2 className="fw-bold mb-2" style={{ color: '#FF6B9D', fontSize: '3rem' }}>100K+</h2>
              <p className="text-muted mb-0">Active Students</p>
            </Col>
            <Col xs={6} md={3} className="mb-3 mb-md-0">
              <h2 className="fw-bold mb-2" style={{ color: '#FFA07A', fontSize: '3rem' }}>5K+</h2>
              <p className="text-muted mb-0">Schools & Partners</p>
            </Col>
            <Col xs={6} md={3}>
              <h2 className="fw-bold mb-2" style={{ color: '#FFB84D', fontSize: '3rem' }}>50M+</h2>
              <p className="text-muted mb-0">Lessons Completed</p>
            </Col>
            <Col xs={6} md={3}>
              <h2 className="fw-bold mb-2" style={{ color: '#FF6B9D', fontSize: '3rem' }}>95%</h2>
              <p className="text-muted mb-0">Parent Satisfaction</p>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default About;