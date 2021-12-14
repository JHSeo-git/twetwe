import { client } from '../client'

export type SignUpProps = {
  email: string
  password: string
}

export default async function signUp({ email, password }: SignUpProps) {
  const { user, error } = await client.auth.signUp({
    email,
    password,
  })

  return { user, error }
}
