import React, { useState } from 'react';
import { Container, Row, Col, Button, Badge } from 'react-bootstrap';
import { Briefcase, MapPin, Clock, Send, Heart, Users, Target, Lightbulb } from 'lucide-react';
import ResumeUploadModal from './ResumeUploadModal';

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

const jobs: Job[] = [
  {
    id: 1,
    title: 'Curriculum Designer',
    department: 'Education',
    location: 'Remote',
    type: 'Full-time',
    description: 'Create engaging educational content and learning experiences for K-8 students.',
    requirements: ['3+ years in curriculum development', 'Teaching certification preferred', 'Creative mindset']
  },
  {
    id: 2,
    title: 'Full-Stack Developer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Build and maintain our educational platform using modern web technologies.',
    requirements: ['5+ years development experience', 'React & Node.js expertise', 'EdTech experience a plus']
  },
  {
    id: 3,
    title: 'Content Illustrator',
    department: 'Creative',
    location: 'Remote',
    type: 'Contract',
    description: 'Design playful, educational illustrations for our learning materials.',
    requirements: ['Portfolio showcasing illustration work', 'Experience with children\'s content', 'Adobe Creative Suite']
  },
  {
    id: 4,
    title: 'Customer Success Manager',
    department: 'Support',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'Help schools and families get the most out of Fun Edu resources.',
    requirements: ['2+ years in customer success', 'Excellent communication skills', 'Passion for education']
  },
  {
    id: 5,
    title: 'Marketing Specialist',
    department: 'Marketing',
    location: 'Remote',
    type: 'Part-time',
    description: 'Develop and execute marketing campaigns to reach educators and parents.',
    requirements: ['3+ years marketing experience', 'Social media expertise', 'EdTech knowledge']
  }
];

const values = [
  {
    icon: Heart,
    title: 'Student-Centered',
    description: 'Every decision we make puts learning first'
  },
  {
    icon: Users,
    title: 'Collaborative Culture',
    description: 'We grow together and celebrate each other'
  },
  {
    icon: Target,
    title: 'Impact Driven',
    description: 'We measure success by student outcomes'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace creativity and new approaches'
  }
];

const Careers: React.FC = () => {
  const [appliedJobs, setAppliedJobs] = useState<number[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string | undefined>(undefined);

  const handleApply = (jobId: number, jobTitle: string) => {
    setSelectedJob(jobTitle);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    if (selectedJob) {
      const job = jobs.find(j => j.title === selectedJob);
      if (job) {
        setAppliedJobs([...appliedJobs, job.id]);
      }
    }
  };

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'linear-gradient(135deg, #F0F8FF 0%, #E6F3FF 100%)' }}>
      <Container>
        <div className="text-center mb-5 fade-in-up">
          <h1 className="display-4 fw-bold mb-3">
            <span style={{ background: 'linear-gradient(135deg, #4A90E2, #50C9C3)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Join Our Mission
            </span>
          </h1>
          <p className="lead text-muted mb-4">Help us transform education and inspire young minds</p>
          <p className="text-muted" style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
            At Fun Edu, we believe that every child deserves an education that's engaging, personalized, and fun.
            Join a team of passionate educators, designers, and technologists making learning magical.
          </p>
        </div>

        <div
          className="mb-5 p-5 fade-in-up"
          style={{
            background: 'white',
            borderRadius: '25px',
            boxShadow: '0 15px 40px rgba(0, 0, 0, 0.08)'
          }}
        >
          <h2 className="text-center fw-bold mb-4" style={{ color: '#333' }}>Our Core Values</h2>
          <Row className="g-4">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Col key={index} xs={12} md={6} lg={3}>
                  <div className="text-center">
                    <div
                      className="mx-auto mb-3"
                      style={{
                        width: '80px',
                        height: '80px',
                        background: 'linear-gradient(135deg, #4A90E2, #50C9C3)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 8px 20px rgba(74, 144, 226, 0.3)'
                      }}
                    >
                      <Icon size={36} color="white" />
                    </div>
                    <h5 className="fw-bold mb-2" style={{ color: '#333' }}>{value.title}</h5>
                    <p className="text-muted" style={{ fontSize: '0.95rem' }}>{value.description}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>

        <div className="mb-5">
          <h2 className="text-center fw-bold mb-4" style={{ color: '#333' }}>Open Positions</h2>
          <Row className="g-4">
            {jobs.map(job => (
              <Col key={job.id} xs={12}>
                <div
                  className="fade-in-up"
                  style={{
                    background: 'white',
                    borderRadius: '20px',
                    padding: '30px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.12)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)';
                  }}
                >
                  <Row>
                    <Col lg={8}>
                      <div className="d-flex align-items-start gap-3 mb-3">
                        <div
                          style={{
                            width: '50px',
                            height: '50px',
                            background: 'linear-gradient(135deg, #4A90E2, #50C9C3)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}
                        >
                          <Briefcase size={24} color="white" />
                        </div>
                        <div className="flex-grow-1">
                          <h4 className="fw-bold mb-2" style={{ color: '#333' }}>{job.title}</h4>
                          <div className="d-flex flex-wrap gap-2 mb-3">
                            <Badge bg="primary" style={{ padding: '6px 12px', fontSize: '0.85rem' }}>
                              {job.department}
                            </Badge>
                            <Badge bg="secondary" style={{ padding: '6px 12px', fontSize: '0.85rem' }}>
                              <MapPin size={12} className="me-1" />
                              {job.location}
                            </Badge>
                            <Badge bg="info" style={{ padding: '6px 12px', fontSize: '0.85rem' }}>
                              <Clock size={12} className="me-1" />
                              {job.type}
                            </Badge>
                          </div>
                          <p className="text-muted mb-3">{job.description}</p>
                          <div>
                            <h6 className="fw-semibold mb-2" style={{ color: '#555' }}>Key Requirements:</h6>
                            <ul className="text-muted" style={{ fontSize: '0.95rem' }}>
                              {job.requirements.map((req, index) => (
                                <li key={index}>{req}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col lg={4} className="d-flex align-items-center justify-content-lg-end">
                      <Button
                        onClick={() => handleApply(job.id, job.title)}
                        disabled={appliedJobs.includes(job.id)}
                        style={{
                          background: appliedJobs.includes(job.id)
                            ? '#6c757d'
                            : 'linear-gradient(135deg, #4A90E2, #50C9C3)',
                          border: 'none',
                          borderRadius: '15px',
                          padding: '12px 30px',
                          fontWeight: '600',
                          boxShadow: appliedJobs.includes(job.id)
                            ? 'none'
                            : '0 8px 20px rgba(74, 144, 226, 0.3)',
                          width: '100%',
                          maxWidth: '200px'
                        }}
                        className="d-flex align-items-center justify-content-center gap-2"
                      >
                        {appliedJobs.includes(job.id) ? (
                          <>Applied</>
                        ) : (
                          <>
                            <Send size={18} />
                            Apply Now
                          </>
                        )}
                      </Button>
                    </Col>
                  </Row>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        <div
          className="text-center mb-5 p-5 fade-in-up"
          style={{
            background: 'linear-gradient(135deg, #4A90E2, #50C9C3)',
            borderRadius: '25px',
            color: 'white'
          }}
        >
          <h3 className="fw-bold mb-3">Don't see the right role?</h3>
          <p className="mb-4" style={{ fontSize: '1.1rem', opacity: 0.95 }}>
            We're always looking for talented people who share our passion for education.
          </p>
          <Button
            onClick={() => {
              setSelectedJob(undefined);
              setShowModal(true);
            }}
            style={{
              background: 'white',
              color: '#4A90E2',
              border: 'none',
              borderRadius: '15px',
              padding: '12px 30px',
              fontWeight: '600',
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'
            }}
          >
            Send Your Resume
          </Button>
        </div>
      </Container>

      <ResumeUploadModal
        show={showModal}
        onHide={handleModalClose}
        jobTitle={selectedJob}
      />
    </div>
  );
};

export default Careers;