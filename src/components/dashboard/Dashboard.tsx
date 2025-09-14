import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge, ProgressBar } from 'react-bootstrap';
import { 
  Calendar, 
  Award, 
  BookOpen, 
  Clock, 
  Target,
  Star
} from 'lucide-react';

interface Activity {
  id: number;
  name: string;
  type: 'lesson' | 'assignment' | 'quiz';
  date: string;
  points: number;
  completed: boolean;
}

interface Course {
  id: number;
  name: string;
  progress: number;
  rank: number;
  totalStudents: number;
}

const Dashboard: React.FC = () => {
  const [userStats] = useState({
    name: 'Yev',
    totalLectures: 300,
    completedLectures: 204,
    totalPoints: 2040,
    currentLevel: 6,
    pointsToNextLevel: 460,
    profilePicture: '👨‍🎓'
  });

  const [activities] = useState<Activity[]>([
    { id: 1, name: 'Genetics Lesson', type: 'lesson', date: 'Jan 2, 19:30', points: 10, completed: false },
    { id: 2, name: 'Math Assignment', type: 'assignment', date: 'Jan 3, 14:00', points: 15, completed: false },
    { id: 3, name: 'Computer Science Quiz', type: 'quiz', date: 'Jan 3, 16:00', points: 20, completed: false },
    { id: 4, name: 'English Course', type: 'lesson', date: 'Jan 4, 10:00', points: 10, completed: false }
  ]);

  const [courses] = useState<Course[]>([
    { id: 1, name: 'Geography', progress: 73, rank: 13, totalStudents: 150 },
    { id: 2, name: 'History', progress: 79, rank: 79, totalStudents: 200 },
    { id: 3, name: 'Biology', progress: 101, rank: 101, totalStudents: 180 }
  ]);

  const [games] = useState([
    { id: 1, name: 'Math Quiz Game', difficulty: 'Easy', points: 50, icon: '🧮' },
    { id: 2, name: 'Word Puzzle', difficulty: 'Medium', points: 75, icon: '🧩' },
    { id: 3, name: 'Science Challenge', difficulty: 'Hard', points: 100, icon: '🔬' }
  ]);

  const completionPercentage = Math.round((userStats.completedLectures / userStats.totalLectures) * 100);
  const levelProgress = Math.round(((userStats.totalPoints % 500) / 500) * 100);

  // Mock calendar data
  const currentMonth = new Date().toLocaleString('default', { month: 'long', year: 'numeric' });
  const calendarDays = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div style={{ 
      background: 'var(--warm-white)', 
      minHeight: '100vh', 
      paddingTop: '100px',
      fontFamily: 'Poppins, sans-serif'
    }}>
      <Container fluid className="px-4">
        {/* User Greeting */}
        <Row className="mb-4">
          <Col>
            <Card className="border-0 shadow-sm" style={{ 
              background: 'linear-gradient(135deg, var(--light-peach), var(--secondary-peach))',
              borderRadius: '20px'
            }}>
              <Card.Body className="p-3">
                <div className="d-flex align-items-center">
                  <div className="me-3" style={{ fontSize: '2.5rem' }}>
                    {userStats.profilePicture}
                  </div>
                  <div>
                    <h3 className="mb-1" style={{ color: 'var(--text-dark)' }}>Hey {userStats.name},</h3>
                    <p className="mb-0" style={{ color: 'var(--text-light)' }}>It's sunny today and it's time to study 📚</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          {/* Left Column */}
          <Col lg={8}>
            <Row>
              {/* Progress Stats Combined - Stacked Vertically */}
              <Col md={4}>
                <Card className="border-0 shadow-sm mb-3" style={{ borderRadius: '15px' }}>
                  <Card.Header className="bg-transparent border-0 p-3 pb-0">
                    <h6 className="mb-0" style={{ fontSize: '14px' }}>Progress</h6>
                  </Card.Header>
                  <Card.Body className="p-3">
                    {/* Completed Lessons */}
                    <div className="text-center mb-3">
                      <h5 className="mb-1" style={{ fontSize: '18px', color: 'var(--accent-coral)' }}>
                        {userStats.completedLectures}/{userStats.totalLectures}
                      </h5>
                      <p className="text-muted mb-2" style={{ fontSize: '12px' }}>Completed lessons</p>
                      <ProgressBar 
                        now={completionPercentage} 
                        style={{ height: '8px', borderRadius: '10px' }}
                        variant="warning"
                      />
                      <small className="text-muted" style={{ fontSize: '11px' }}>{completionPercentage}% Complete</small>
                    </div>
                    
                    <hr style={{ margin: '12px 0', opacity: '0.2' }} />
                    
                    {/* Total Points */}
                    <div className="text-center">
                      <h5 className="mb-1" style={{ fontSize: '18px', color: 'var(--accent-coral)' }}>
                        {userStats.totalPoints} pts
                      </h5>
                      <p className="text-muted mb-2" style={{ fontSize: '12px' }}>Total Points</p>
                      <div className="d-flex align-items-center justify-content-center mb-2">
                        <Star fill="var(--accent-coral)" color="var(--accent-coral)" size={14} className="me-1" />
                        <span style={{ fontSize: '12px' }}>Level {userStats.currentLevel}</span>
                      </div>
                      <ProgressBar 
                        now={levelProgress} 
                        style={{ height: '6px', borderRadius: '10px' }}
                        variant="info"
                      />
                      <small className="text-muted" style={{ fontSize: '11px' }}>{userStats.pointsToNextLevel} pts to next level</small>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              {/* Activity Section - Moved to First Row */}
              <Col md={8}>
                <Card className="border-0 shadow-sm mb-3" style={{ borderRadius: '15px' }}>
                  <Card.Header className="bg-transparent border-0 p-3 pb-0">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="mb-0">Activity</h6>
                      <Badge bg="secondary" style={{ borderRadius: '12px' }}>
                        {activities.length}
                      </Badge>
                    </div>
                  </Card.Header>
                  <Card.Body className="p-3">
                    <Row>
                      {activities.map(activity => (
                        <Col md={6} key={activity.id} className="mb-2">
                          <div className="d-flex align-items-center justify-content-between p-2 rounded" 
                               style={{ background: 'var(--light-peach)' }}>
                            <div className="d-flex align-items-center">
                              <div className="me-2">
                                {activity.type === 'lesson' && <BookOpen size={18} style={{ color: 'var(--accent-coral)' }} />}
                                {activity.type === 'assignment' && <Target size={18} style={{ color: 'var(--accent-pink)' }} />}
                                {activity.type === 'quiz' && <Award size={18} style={{ color: 'var(--accent-lavender)' }} />}
                              </div>
                              <div>
                                <div className="fw-semibold small">{activity.name}</div>
                                <small className="text-muted" style={{ fontSize: '10px' }}>{activity.date}</small>
                              </div>
                            </div>
                            <Badge bg="warning" style={{ borderRadius: '8px', fontSize: '10px' }}>
                              +{activity.points}
                            </Badge>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Courses and Games Row */}
            <Row>
              <Col md={8}>
                {/* Courses Section with Big Donut Charts */}
                <Card className="border-0 shadow-sm mb-3" style={{ borderRadius: '15px' }}>
                  <Card.Header className="bg-transparent border-0 p-3 pb-0">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="mb-0">Courses</h6>
                      <Badge bg="secondary" style={{ borderRadius: '12px' }}>
                        {courses.length}
                      </Badge>
                    </div>
                  </Card.Header>
                  <Card.Body className="p-3">
                    <Row>
                      {courses.map(course => (
                        <Col md={4} key={course.id} className="mb-3">
                          <div className="text-center p-3 rounded" style={{ background: 'var(--soft-gray)' }}>
                            <div className="mb-2 d-flex justify-content-center">
                              <div className="position-relative">
                                {/* Outer Ring */}
                                <div 
                                  className="rounded-circle d-flex align-items-center justify-content-center"
                                  style={{ 
                                    width: '80px', 
                                    height: '80px', 
                                    background: `conic-gradient(var(--accent-coral) ${course.progress * 3.6}deg, #e9ecef 0deg)`,
                                    padding: '4px'
                                  }}>
                                  {/* Inner Ring */}
                                  <div 
                                    className="rounded-circle d-flex align-items-center justify-content-center"
                                    style={{ 
                                      width: '65px', 
                                      height: '65px', 
                                      background: `conic-gradient(var(--accent-pink) ${(course.progress * 0.8) * 3.6}deg, #f8f9fa 0deg)`,
                                      padding: '3px'
                                    }}>
                                    {/* Center Circle */}
                                    <div 
                                      className="rounded-circle bg-white d-flex align-items-center justify-content-center"
                                      style={{ width: '50px', height: '50px' }}>
                                      <div className="text-center">
                                        <div className="fw-bold" style={{ fontSize: '12px', color: 'var(--accent-coral)' }}>
                                          {course.progress}%
                                        </div>
                                        <div style={{ fontSize: '8px', color: 'var(--text-light)' }}>
                                          #{course.rank}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                
                                {/* Progress Label */}
                                <div 
                                  className="position-absolute rounded-pill px-2"
                                  style={{ 
                                    bottom: '-8px', 
                                    left: '50%', 
                                    transform: 'translateX(-50%)',
                                    background: 'var(--accent-coral)',
                                    fontSize: '8px',
                                    color: 'white'
                                  }}>
                                  TOP {Math.round((course.rank / course.totalStudents) * 100)}%
                                </div>
                              </div>
                            </div>
                            
                            <div className="mt-3">
                              <div className="fw-semibold small">{course.name}</div>
                              <small className="text-muted" style={{ fontSize: '10px' }}>
                                Rank #{course.rank} of {course.totalStudents}
                              </small>
                            </div>
                            
                            <div className="mt-2">
                              <div className="d-flex justify-content-between text-center">
                                <div>
                                  <div className="fw-bold" style={{ fontSize: '10px', color: 'var(--accent-coral)' }}>
                                    {Math.round(course.progress * 0.8)}%
                                  </div>
                                  <small style={{ fontSize: '8px', color: 'var(--text-light)' }}>Completed</small>
                                </div>
                                <div>
                                  <div className="fw-bold" style={{ fontSize: '10px', color: 'var(--accent-pink)' }}>
                                    {100 - Math.round(course.progress * 0.8)}%
                                  </div>
                                  <small style={{ fontSize: '8px', color: 'var(--text-light)' }}>Remaining</small>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Col>
                      ))}
                    </Row>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={4}>
                {/* Games Section */}
                <Card className="border-0 shadow-sm mb-3" style={{ borderRadius: '15px' }}>
                  <Card.Header className="bg-transparent border-0 p-3 pb-0">
                    <div className="d-flex justify-content-between align-items-center">
                      <h6 className="mb-0">Games</h6>
                      <Badge bg="secondary" style={{ borderRadius: '12px' }}>
                        {games.length}
                      </Badge>
                    </div>
                  </Card.Header>
                  <Card.Body className="p-3">
                    {games.map(game => (
                      <div key={game.id} className="d-flex align-items-center justify-content-between p-2 mb-2 rounded"
                           style={{ background: 'var(--accent-lavender)' }}>
                        <div className="d-flex align-items-center">
                          <div className="me-2" style={{ fontSize: '18px' }}>
                            {game.icon}
                          </div>
                          <div>
                            <div className="fw-semibold small">{game.name}</div>
                            <small className="text-muted" style={{ fontSize: '10px' }}>{game.difficulty}</small>
                          </div>
                        </div>
                        <Badge bg="success" style={{ borderRadius: '8px', fontSize: '10px' }}>
                          {game.points} pts
                        </Badge>
                      </div>
                    ))}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>

          {/* Right Column */}
          <Col lg={4}>
            {/* Scheduled Section */}
            <Card className="border-0 shadow-sm mb-3" style={{ borderRadius: '15px' }}>
              <Card.Header className="bg-transparent border-0 p-3 pb-0">
                <h6 className="mb-0">Scheduled</h6>
              </Card.Header>
              <Card.Body className="p-3">
                {/* Calendar */}
                <div className="mb-3">
                  <div className="d-flex align-items-center mb-2">
                    <Calendar size={16} className="me-2" style={{ color: 'var(--accent-coral)' }} />
                    <small className="fw-semibold">{currentMonth}</small>
                  </div>
                  <div className="row g-1 mb-2">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
                      <div key={index} className="col text-center">
                        <small className="text-muted fw-semibold" style={{ fontSize: '9px' }}>{day}</small>
                      </div>
                    ))}
                  </div>
                  <div className="row g-1">
                    {calendarDays.slice(0, 21).map(day => (
                      <div key={day} className="col text-center">
                        <div className={`py-1 px-1 rounded ${day === 15 ? 'text-white' : 'text-muted'}`}
                             style={{ 
                               cursor: 'pointer',
                               fontSize: '10px',
                               background: day === 15 ? 'var(--accent-coral)' : 'transparent',
                               minHeight: '20px',
                               display: 'flex',
                               alignItems: 'center',
                               justifyContent: 'center'
                             }}>
                          {day}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Upcoming */}
                <div>
                  <div className="d-flex align-items-center mb-2">
                    <Clock size={16} className="me-2" style={{ color: 'var(--accent-coral)' }} />
                    <small className="fw-semibold">Upcoming</small>
                  </div>
                  <div className="mb-2 p-2 rounded" style={{ background: 'var(--light-peach)' }}>
                    <div className="d-flex align-items-center">
                      <div className="me-2 text-center">
                        <div className="fw-bold small" style={{ color: 'var(--accent-coral)', fontSize: '10px' }}>09:00</div>
                      </div>
                      <div>
                        <div className="fw-semibold" style={{ fontSize: '11px' }}>Course Name: Lesson</div>
                        <small className="text-muted" style={{ fontSize: '9px' }}>Jan 4, 09:00</small>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 p-2 rounded" style={{ background: 'var(--light-peach)' }}>
                    <div className="d-flex align-items-center">
                      <div className="me-2 text-center">
                        <div className="fw-bold small" style={{ color: 'var(--accent-coral)', fontSize: '10px' }}>10:00</div>
                      </div>
                      <div>
                        <div className="fw-semibold" style={{ fontSize: '11px' }}>Course Name: Test</div>
                        <small className="text-muted" style={{ fontSize: '9px' }}>Jan 4, 10:00</small>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 rounded" style={{ background: 'var(--accent-lavender)' }}>
                    <div className="d-flex align-items-center">
                      <div className="me-2 text-center">
                        <div className="fw-bold small" style={{ color: 'var(--text-dark)', fontSize: '10px' }}>15:00</div>
                      </div>
                      <div>
                        <div className="fw-semibold" style={{ fontSize: '11px' }}>Extracurricular activities</div>
                        <small className="text-muted" style={{ fontSize: '9px' }}>Apr 2, 15:00</small>
                      </div>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;