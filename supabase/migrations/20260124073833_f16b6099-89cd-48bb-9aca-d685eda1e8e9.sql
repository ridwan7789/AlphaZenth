-- Create waitlist table for both BETA APP and ALPHA ZENTH LABS
CREATE TABLE public.waitlist (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  waitlist_type TEXT NOT NULL CHECK (waitlist_type IN ('beta_app', 'alpha_labs')),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(email, waitlist_type)
);

-- Enable Row Level Security
ALTER TABLE public.waitlist ENABLE ROW LEVEL SECURITY;

-- Allow public insert (anyone can join waitlist)
CREATE POLICY "Anyone can join waitlist" 
ON public.waitlist 
FOR INSERT 
WITH CHECK (true);

-- Only admins can read waitlist (no public read)
CREATE POLICY "No public read access" 
ON public.waitlist 
FOR SELECT 
USING (false);