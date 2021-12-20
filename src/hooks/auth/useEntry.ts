import { signIn } from '@/lib/api/auth'
import { useState } from 'react'

const isDev = process.env.NODE_ENV === 'development'
const redirectTo = isDev ? 'http://localhost:3000' : undefined

/**
 * Hook to get the entry data
 * api normal handling case
 */
export default function useEntry() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>()
  const entry = async (email: string) => {
    try {
      setLoading(true)

      const response = await signIn(email, redirectTo)

      if (response.error) {
        console.error(response.error)
        throw new Error(response.error.message)
      }

      return response.user
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return {
    entry,
    loading,
    error,
  }
}
