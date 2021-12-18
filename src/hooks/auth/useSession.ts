import { supabaseClient } from '@/lib/supabaseClient'
import { useSessionState } from '@/store/auth'
import { AuthSession } from '@supabase/supabase-js'
import { useEffect } from 'react'

export default function useSession() {
  const [session, setSession] = useSessionState()

  useEffect(() => {
    setSession(supabaseClient.auth.session())

    supabaseClient.auth.onAuthStateChange(
      (event: string, session: AuthSession | null) => {
        setSession(session)
      }
    )
  }, [setSession])

  return session
}
