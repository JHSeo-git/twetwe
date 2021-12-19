import BaseInput from '@/components/common/BaseInput'
import NextLink from '@/components/common/NextLink'
import Panel from '@/components/common/Panel'
import useSession from '@/hooks/auth/useSession'
import useEntry from '@/hooks/auth/useEntry'
import { styled } from '@stitches.js'
import { SubmitHandler, useForm } from 'react-hook-form'
import useLogout from '@/hooks/auth/useLogout'

/**
 * @see https://source.chromium.org/chromium/chromium/src/+/main:third_party/blink/web_tests/fast/forms/resources/ValidityState-typeMismatch-email.js?q=ValidityState-typeMismatch-email.js&ss=chromium
 * @see https://stackoverflow.com/a/46181
 * at chromium
 * at stackoverflow
 */
const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

type FormInputs = {
  email: string
}

function EntryPage() {
  const session = useSession()
  const { entry, loading, error } = useEntry()
  const { logout, loading: logoutLoading, error: logoutError } = useLogout()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>()
  const onSubmit: SubmitHandler<FormInputs> = (data) => {
    // TODO: call api
    entry(data.email).then((user) => console.log(user))
  }

  if (session) {
    return (
      <Panel
        css={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          jc: 'center',
          ai: 'center',
        }}
      >
        <Box>
          <Comment>You already logged in.</Comment>
          <StyledLink href="/">Go Home</StyledLink>
        </Box>
        <SubmitButton onClick={logout} size="small" disabled={logoutLoading}>
          Logout
        </SubmitButton>
      </Panel>
    )
  }

  return (
    <Panel
      css={{
        height: '100%',
        display: 'flex',
        jc: 'center',
        ai: 'center',
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
        <SubmitButton type="submit" disabled={loading}>
          {loading ? 'loading...' : 'Send Magic Link'}
        </SubmitButton>
      </Form>
    </Panel>
  )
}

const Form = styled('form', {
  width: '100%',

  display: 'flex',
  flexDirection: 'column',
  ai: 'center',
})

const FormInput = styled(BaseInput, {
  maxWidth: '25rem',
  width: '100%',
})

const SubmitButton = styled('button', {
  maxWidth: '25rem',
  width: '100%',

  cursor: 'pointer',

  bc: '$loContrast',
  color: '$hiContrast',
  border: '0.0625rem solid $mauve11',

  p: '$2',
  br: '$1',

  mt: '$2',

  transition: 'background-color .2s ease',

  '@hover': {
    '&:hover': {
      bc: '$blue2',
    },
  },

  '&:disabled': {
    pointerEvents: 'none',
    opacity: 0.4,
  },

  variants: {
    size: {
      small: {
        p: '$1',
        maxWidth: '10rem',
      },
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

const Box = styled('div', {
  display: 'flex',
})

const StyledLink = styled(NextLink, {
  fontSize: '$sm',
  textDecoration: 'none',

  display: 'block',
  ml: '$1',
  color: '$blue11',
})

export default EntryPage
