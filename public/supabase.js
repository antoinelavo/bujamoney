import { createClient } from 'https://esm.sh/@supabase/supabase-js';

const supabaseUrl = 'https://rnoeqibpmgyhaurcveax.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJub2VxaWJwbWd5aGF1cmN2ZWF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA1NDMyNzYsImV4cCI6MjA1NjExOTI3Nn0.CHGiQERO1AZSouPamZS32aio-HPU23VlUUkL8sJkQz4';

export const supabase = createClient(supabaseUrl, supabaseKey);