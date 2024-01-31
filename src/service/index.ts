import { createClient } from '@supabase/supabase-js';
import { Octokit } from 'octokit';

const baseURL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const apiKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(baseURL, apiKey);

export const octokit = new Octokit({
	auth: process.env.GITHUB_ACCESS_TOKEN,

});
