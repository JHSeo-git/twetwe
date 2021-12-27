import { styled } from '@stitches.js'

const BaseInput = styled('input', {
  outline: 'none',

  border: '0.0625rem solid $mauve8',
  bc: '$loContrast',

  py: '$2',
  px: '$2',
  br: '$1',

  transition: 'box-shadow .2s ease, border .2s ease',

  '@hover': {
    '&:hover': {
      border: '0.0625rem solid $mauve10',
    },
  },
  '&:focus, &:focus-visible': {
    bs: '$interactiveShadow2',
    border: '0.0625rem solid $mauve11',
  },

  variants: {
    variant: {
      error: {
        borderColor: '$crimson9',
      },
    },
  },
})

export default BaseInput
