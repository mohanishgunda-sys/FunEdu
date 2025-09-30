import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const setupDatabase = async () => {
  console.log('Database setup instructions:');
  console.log('Run this SQL in your Supabase SQL Editor:');
  console.log(`
/*
  # Create job applications table

  1. New Tables
    - job_applications
      - id (uuid, primary key)
      - full_name (text, required)
      - email (text, required)
      - phone (text, optional)
      - job_title (text, optional)
      - resume_url (text, required)
      - cover_letter (text, optional)
      - created_at (timestamptz)

  2. Storage
    - Create a bucket named "job-applications" for resume uploads
    - Make the bucket public for file access

  3. Security
    - Enable RLS on job_applications table
    - Add policies for public insert and authenticated read
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

ALTER TABLE job_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit job applications"
  ON job_applications
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read all applications"
  ON job_applications
  FOR SELECT
  TO authenticated
  USING (true);
  `);

  console.log('\nAlso create a storage bucket:');
  console.log('1. Go to Storage in Supabase Dashboard');
  console.log('2. Create a new bucket named "job-applications"');
  console.log('3. Make it public for read access');
};