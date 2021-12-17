import { supabaseClient } from '@/lib/supabaseClient'
import { Provider } from '@supabase/supabase-js'

export async function signUp(email: string) {
  const { user, error } = await supabaseClient.auth.signUp({
    email,
  })

  return { user, error }
}

export async function signIn(email: string) {
  const { user, error } = await supabaseClient.auth.signIn({
    email,
  })

  return { user, error }
}

export async function signInWithProvider(provider: Provider) {
  const { user, error } = await supabaseClient.auth.signIn({
    provider,
  })

  return { user, error }
}
