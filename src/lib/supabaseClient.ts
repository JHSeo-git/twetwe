import { createClient } from '@supabase/supabase-js'
import { SUPABASE_KEY, SUPABASE_URL } from './constants'

if (!SUPABASE_URL) throw new Error('Missing SUPABASE_URL')
if (!SUPABASE_KEY) throw new Error('Missing SUPABASE_KEY')

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY)
