import { supabaseClient } from '@/lib/supabaseClient'

export default function useAuth() {
  const user = supabaseClient.auth.user()

  return {
    user,
  }
}
