import { styled } from '@stitches.js'
import { useState } from 'react'
import BaseInput from '../common/BaseInput'

export type AuthFormProps = {}

type AuthState = 'login' | 'signup'

function AuthForm(props: AuthFormProps) {
  const [authState, setAuthState] = useState<AuthState>('login')
  const onClickAuthState = () => {
    setAuthState((prev) => (prev === 'login' ? 'signup' : 'login'))
  }
  return (
    <Form>
      <FormInput
        name="email"
        type="email"
        placeholder="Email"
        autoComplete="off"
      />
      <FormInput name="password" type="password" placeholder="Password" />
      <SubmitButton type="submit">
        {authState === 'login' ? 'Login' : 'Sign Up'}
      </SubmitButton>
      <Comment>
        {authState === 'login'
          ? 'Already have an account?'
          : 'Don’t have an account?'}
        <ButtonLikeLink onClick={onClickAuthState} type="button">
          {authState === 'login' ? 'login' : 'sign up'}
        </ButtonLikeLink>
      </Comment>
    </Form>
  )
}

const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  ai: 'center',
})

const FormInput = styled(BaseInput, {
  maxWidth: '25rem',
  width: '100%',
  mb: '$2',
})

const SubmitButton = styled('button', {
  cursor: 'pointer',
  maxWidth: '25rem',
  width: '100%',

  bc: '$loContrast',
  color: '$hiContrast',
  border: '0.0625rem solid $mauve11',

  p: '$2',
  br: '$1',

  mb: '$2',

  transition: 'background-color .2s ease',

  '@hover': {
    '&:hover': {
      bc: '$blue3',
    },
  },
})

const Comment = styled('p', {
  fontSize: '$sm',
})

const ButtonLikeLink = styled('button', {
  cursor: 'pointer',
  border: 'none',
  bc: 'inherit',
  color: '$blue9',

  textTransform: 'capitalize',
})

export default AuthForm
