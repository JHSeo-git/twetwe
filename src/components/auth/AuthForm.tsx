import signUp from '@/lib/api/auth/signUp'
import { styled } from '@stitches.js'

export type AuthFormProps = {}

function AuthForm(props: AuthFormProps) {
  return (
    <Box
      onSubmit={(e) => {
        e.preventDefault()
        signUp({
          email: 'qnfqnfqnf@gmail.com',
          password: 'test121212',
        })
      }}
    >
      <input name="email" type="email" placeholder="Email" />
      <input name="password" type="password" placeholder="Password" />
      <input type="submit" value="Submit" />
    </Box>
  )
}

const Box = styled('form', {})

export default AuthForm
