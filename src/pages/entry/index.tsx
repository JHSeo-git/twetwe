import BaseInput from '@/components/common/BaseInput'
import Panel from '@/components/common/Panel'
import { styled } from '@stitches.js'
import { useMemo, useState } from 'react'

type AuthState = 'login' | 'signup'

function EntryPage() {
  const [authState, setAuthState] = useState<AuthState>('login')
  const AuthStateMessage = useMemo(
    () => (authState === 'login' ? 'Login' : 'Sign Up'),
    [authState]
  )
  const onClickAuthState = () => {
    setAuthState((prev) => (prev === 'login' ? 'signup' : 'login'))
  }
  return (
    <Panel
      css={{
        pt: '$8',
      }}
    >
      <Form>
        <FormInput
          name="email"
          type="email"
          placeholder="Email"
          autoComplete="off"
        />
        <FormInput name="password" type="password" placeholder="Password" />
        <SubmitButton type="submit">{AuthStateMessage}</SubmitButton>
        <Comment>
          {authState === 'login'
            ? 'Already have an account?'
            : 'Don’t have an account?'}
          <ButtonLikeLink type="button" onClick={onClickAuthState}>
            {AuthStateMessage}
          </ButtonLikeLink>
        </Comment>
      </Form>
    </Panel>
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
      bc: '$blue2',
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

export default EntryPage
