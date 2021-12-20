import { supabaseClient } from '@/lib/supabaseClient'
import { Provider } from '@supabase/supabase-js'

export async function signUp(email: string) {
  const { user, error } = await supabaseClient.auth.signUp({
    email,
  })

  return { user, error }
}

export async function signIn(email: string, redirectTo?: string) {
  const { user, error } = await supabaseClient.auth.signIn(
    {
      email,
    },
    {
      ...(redirectTo ? { redirectTo } : undefined),
    }
  )

  return { user, error }
}

export async function signOut() {
  const { error } = await supabaseClient.auth.signOut()

  return { error }
}

export async function signInWithProvider(provider: Provider) {
  const { user, error } = await supabaseClient.auth.signIn({
    provider,
  })

  return { user, error }
}
