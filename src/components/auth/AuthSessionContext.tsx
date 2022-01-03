import useSessionEffect from '@/hooks/auth/useSessionEffect'

export type AuthSessionContextProps = {
  children: React.ReactNode
}

function AuthSessionContext({ children }: AuthSessionContextProps) {
  useSessionEffect()

  return <>{children}</>
}

export default AuthSessionContext
