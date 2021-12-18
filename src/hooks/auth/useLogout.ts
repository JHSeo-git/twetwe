import { signOut } from '@/lib/api/auth'
import { useState } from 'react'

export default function useLogout() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string>()
  const logout = async () => {
    try {
      setLoading(true)

      const response = await signOut()

      if (response.error) {
        console.error(response.error)
        throw new Error(response.error.message)
      }

      return true
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return {
    logout,
    loading,
    error,
  }
}
