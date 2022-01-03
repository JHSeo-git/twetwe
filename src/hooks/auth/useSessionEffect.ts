import { supabaseClient } from '@/lib/supabaseClient'
import { useIsFetchingState, useSessionState } from '@/store/auth'
import { AuthSession } from '@supabase/supabase-js'
import { useEffect } from 'react'

export default function useSession() {
  const [session, setSession] = useSessionState()
  const [isFetching, setIsFetching] = useIsFetchingState()

  useEffect(() => {
    setSession(supabaseClient.auth.session())
    setIsFetching(true)

    const { data: authListener } = supabaseClient.auth.onAuthStateChange(
      (event: string, session: AuthSession | null) => {
        setSession(session)
      }
    )
    return () => {
      if (authListener) {
        authListener.unsubscribe()
      }
    }
  }, [setSession, setIsFetching])
}
