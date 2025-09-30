# Database Setup for Fun Edu Platform

This document provides instructions for setting up the Supabase database and storage for the Fun Edu application.

## Prerequisites

- Supabase account with an active project
- Database connection details in `.env` file

## Database Tables

### 1. Job Applications Table

Run this SQL in your Supabase SQL Editor:

```sql
/*
  Create job applications table for storing resume submissions
*/

CREATE TABLE IF NOT EXISTS job_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  job_title text,
  resume_url text NOT NULL,
  cover_letter text,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit applications
CREATE POLICY "Anyone can submit job applications"
  ON job_applications
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Allow authenticated users (admins) to read all applications
CREATE POLICY "Authenticated users can read all applications"
  ON job_applications
  FOR SELECT
  TO authenticated
  USING (true);
```

## Storage Setup

### 2. Create Storage Bucket for Resumes

1. Navigate to **Storage** in your Supabase Dashboard
2. Click **New Bucket**
3. Name it: `job-applications`
4. Set it as **Public** (for read access to uploaded resumes)
5. Click **Create Bucket**

### 3. Configure Bucket Policies

After creating the bucket, set up the following policies:

```sql
-- Allow anyone to upload files
CREATE POLICY "Anyone can upload resumes"
ON storage.objects FOR INSERT
TO anon, authenticated
WITH CHECK (bucket_id = 'job-applications');

-- Allow public read access to uploaded files
CREATE POLICY "Public read access for resumes"
ON storage.objects FOR SELECT
TO anon, authenticated
USING (bucket_id = 'job-applications');
```

## Features

Once set up, the application will support:

- Resume/CV uploads (PDF, DOC, DOCX)
- Maximum file size: 5MB
- Job application form with:
  - Full name (required)
  - Email (required)
  - Phone number (optional)
  - Position applied for
  - Cover letter (optional)
- Automatic file storage in Supabase Storage
- Application data stored in PostgreSQL

## Viewing Applications

To view submitted applications, run this query in the SQL Editor:

```sql
SELECT
  full_name,
  email,
  phone,
  job_title,
  resume_url,
  cover_letter,
  created_at
FROM job_applications
ORDER BY created_at DESC;
```

## Testing

After setup, test the feature by:

1. Navigate to the Careers page (`/careers`)
2. Click "Apply Now" on any job listing
3. Fill out the form and upload a test resume
4. Submit the application
5. Verify the data appears in your Supabase dashboard

## Troubleshooting

### Upload Errors

If you encounter upload errors:

1. Check that the storage bucket exists and is named exactly `job-applications`
2. Verify the bucket is set to public
3. Ensure storage policies are properly configured
4. Check browser console for detailed error messages

### Database Errors

If applications aren't saving:

1. Verify the `job_applications` table exists
2. Check that RLS policies are enabled
3. Ensure policies allow anonymous inserts
4. Review Supabase logs for detailed error information

## Environment Variables

Ensure your `.env` file contains:

```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```