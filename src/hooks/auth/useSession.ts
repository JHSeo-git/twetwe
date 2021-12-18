import { supabaseClient } from '@/lib/supabaseClient'
import { AuthSession } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'

export default function useSession() {
  const [session, setSession] = useState<AuthSession | null>(null)

  useEffect(() => {
    setSession(supabaseClient.auth.session())

    supabaseClient.auth.onAuthStateChange(
      (event: string, session: AuthSession | null) => {
        setSession(session)
      }
    )
  }, [])

  return session
}
