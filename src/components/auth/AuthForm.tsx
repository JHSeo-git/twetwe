import { styled } from '@stitches.js'
import BaseInput from '../common/BaseInput'

export type AuthFormProps = {}

function AuthForm(props: AuthFormProps) {
  return (
    <Form>
      <FormInput
        name="email"
        type="email"
        placeholder="Email"
        autoComplete="off"
      />
      <FormInput name="password" type="password" placeholder="Password" />
      <SubmitButton type="submit">Submit</SubmitButton>
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

  transition: 'background-color .2s ease',

  '@hover': {
    '&:hover': {
      bc: '$blue3',
    },
  },
})

export default AuthForm
