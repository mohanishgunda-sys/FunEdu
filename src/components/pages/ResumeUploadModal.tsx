import React, { useState } from 'react';
import { Modal, Form, Button, Alert, Spinner } from 'react-bootstrap';
import { Upload, X, CheckCircle } from 'lucide-react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface ResumeUploadModalProps {
  show: boolean;
  onHide: () => void;
  jobTitle?: string;
}

const ResumeUploadModal: React.FC<ResumeUploadModalProps> = ({ show, onHide, jobTitle }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    coverLetter: ''
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const validTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];

      if (!validTypes.includes(file.type)) {
        setError('Please upload a PDF or Word document');
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        setError('File size must be less than 5MB');
        return;
      }

      setResumeFile(file);
      setError('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!resumeFile) {
      setError('Please upload your resume');
      return;
    }

    if (!formData.fullName || !formData.email) {
      setError('Please fill in all required fields');
      return;
    }

    setUploading(true);
    setError('');

    try {
      const fileExt = resumeFile.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `resumes/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('job-applications')
        .upload(filePath, resumeFile);

      if (uploadError) {
        console.error('Upload error:', uploadError);
        setError('Failed to upload resume. Please try again.');
        setUploading(false);
        return;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('job-applications')
        .getPublicUrl(filePath);

      const applicationData = {
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone || null,
        job_title: jobTitle || 'General Application',
        resume_url: publicUrl,
        cover_letter: formData.coverLetter || null
      };

      const { error: insertError } = await supabase
        .from('job_applications')
        .insert([applicationData]);

      if (insertError) {
        console.error('Insert error:', insertError);
        setError('Failed to submit application. Please try again.');
        setUploading(false);
        return;
      }

      setSuccess(true);
      setTimeout(() => {
        handleClose();
      }, 2000);

    } catch (err) {
      console.error('Error:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  const handleClose = () => {
    setFormData({ fullName: '', email: '', phone: '', coverLetter: '' });
    setResumeFile(null);
    setError('');
    setSuccess(false);
    onHide();
  };

  return (
    <Modal show={show} onHide={handleClose} centered size="lg">
      <Modal.Header style={{ border: 'none', paddingBottom: 0 }}>
        <Modal.Title className="fw-bold" style={{ color: '#333' }}>
          {jobTitle ? `Apply for ${jobTitle}` : 'Submit Your Resume'}
        </Modal.Title>
        <Button
          variant="link"
          onClick={handleClose}
          style={{ color: '#666', textDecoration: 'none' }}
        >
          <X size={24} />
        </Button>
      </Modal.Header>

      <Modal.Body style={{ padding: '30px' }}>
        {success ? (
          <div className="text-center py-5">
            <CheckCircle size={64} color="#28a745" className="mb-3" />
            <h4 className="fw-bold mb-2" style={{ color: '#28a745' }}>Application Submitted!</h4>
            <p className="text-muted">Thank you for your interest. We'll review your application and get back to you soon.</p>
          </div>
        ) : (
          <Form onSubmit={handleSubmit}>
            {error && <Alert variant="danger">{error}</Alert>}

            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Full Name <span style={{ color: 'red' }}>*</span></Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                required
                style={{ borderRadius: '10px', padding: '12px' }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Email <span style={{ color: 'red' }}>*</span></Form.Label>
              <Form.Control
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                style={{ borderRadius: '10px', padding: '12px' }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="(123) 456-7890"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                style={{ borderRadius: '10px', padding: '12px' }}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="fw-semibold">Resume/CV <span style={{ color: 'red' }}>*</span></Form.Label>
              <div
                style={{
                  border: '2px dashed #ddd',
                  borderRadius: '15px',
                  padding: '30px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  background: resumeFile ? '#f8f9fa' : 'white',
                  transition: 'all 0.3s ease'
                }}
                onClick={() => document.getElementById('resume-upload')?.click()}
              >
                <input
                  id="resume-upload"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  style={{ display: 'none' }}
                />
                <Upload size={40} color="#4A90E2" className="mb-2" />
                {resumeFile ? (
                  <div>
                    <p className="fw-semibold mb-1" style={{ color: '#4A90E2' }}>{resumeFile.name}</p>
                    <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>
                      {(resumeFile.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="mb-1 fw-semibold" style={{ color: '#333' }}>Click to upload or drag and drop</p>
                    <p className="text-muted mb-0" style={{ fontSize: '0.9rem' }}>PDF or Word document (Max 5MB)</p>
                  </div>
                )}
              </div>
            </Form.Group>

            <Form.Group className="mb-4">
              <Form.Label className="fw-semibold">Cover Letter (Optional)</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Tell us why you'd be a great fit..."
                value={formData.coverLetter}
                onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                style={{ borderRadius: '10px', padding: '12px' }}
              />
            </Form.Group>

            <Button
              type="submit"
              disabled={uploading}
              style={{
                background: 'linear-gradient(135deg, #4A90E2, #50C9C3)',
                border: 'none',
                borderRadius: '15px',
                padding: '12px 30px',
                fontWeight: '600',
                width: '100%',
                boxShadow: '0 8px 20px rgba(74, 144, 226, 0.3)'
              }}
            >
              {uploading ? (
                <>
                  <Spinner animation="border" size="sm" className="me-2" />
                  Submitting...
                </>
              ) : (
                'Submit Application'
              )}
            </Button>
          </Form>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default ResumeUploadModal;