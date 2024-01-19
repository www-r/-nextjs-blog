import { createClient } from '@supabase/supabase-js';

const baseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const apiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(baseURL, apiKey);

