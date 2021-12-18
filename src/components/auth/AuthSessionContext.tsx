import useSession from '@/hooks/auth/useSession'

export type AuthSessionContextProps = {
  children: React.ReactNode
}

function AuthSessionContext({ children }: AuthSessionContextProps) {
  const session = useSession()

  console.log('Context: ', session)

  return <>{children}</>
}

export default AuthSessionContext
