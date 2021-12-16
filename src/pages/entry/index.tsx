import BaseInput from '@/components/common/BaseInput'
import Panel from '@/components/common/Panel'
import { styled } from '@stitches.js'
import { useMemo, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

/**
 * @see https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/web_tests/fast/forms/resources/ValidityState-typeMismatch-email.js?q=ValidityState-typeMismatch-email.js&ss=chromium
 * @see https://stackoverflow.com/a/46181
 * at chromium
 * at stackoverflow
 */
const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

type AuthState = 'login' | 'signup'
type FormInputs = {
  email: string
  password: string
}

function EntryPage() {
  const [authState, setAuthState] = useState<AuthState>('login')
  const AuthStateMessage = useMemo(
    () => (authState === 'login' ? 'Login' : 'Sign Up'),
    [authState]
  )

  const onClickAuthState = () => {
    setAuthState((prev) => (prev === 'login' ? 'signup' : 'login'))
  }
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>()
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    console.log(data)
  }

  return (
    <Panel
      css={{
        pt: '$8',
      }}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: EMAIL_REGEX,
              message: 'Invalid email address',
            },
          })}
          variant={errors.email && 'error'}
          type="email"
          placeholder="Email"
          autoComplete="off"
        />
        {errors.email && (
          <Comment variant="red">{errors.email.message}</Comment>
        )}
        <FormInput
          {...register('password', {
            required: 'Password is required',
            min: {
              value: 8,
              message: 'Password must be at least 8 characters',
            },
          })}
          variant={errors.password && 'error'}
          type="password"
          placeholder="Password"
        />
        {errors.password && (
          <Comment variant="red">{errors.password.message}</Comment>
        )}
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
  '&:not(:first-child)': {
    mt: '$2',
  },
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

  my: '$2',

  transition: 'background-color .2s ease',

  '@hover': {
    '&:hover': {
      bc: '$blue2',
    },
  },
})

const Comment = styled('p', {
  fontSize: '$sm',

  variants: {
    variant: {
      red: {
        color: '$crimson9',
      },
    },
  },
})

const ButtonLikeLink = styled('button', {
  cursor: 'pointer',
  border: 'none',

  p: 0,
  ml: '$1',

  bc: 'inherit',
  color: '$blue9',
  textTransform: 'capitalize',
})

export default EntryPage
