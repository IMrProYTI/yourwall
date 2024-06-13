import { createClient } from '@supabase/supabase-js';
import config from './assets/supabase.json';

// Create a single supabase client for interacting with your database
const supabase = createClient(config.SUPABASE_URL, config.SUPABASE_ANON_KEY);

export default supabase;