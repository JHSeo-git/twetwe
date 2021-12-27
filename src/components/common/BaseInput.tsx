import { styled } from '@stitches.js'

const BaseInput = styled('input', {
  outline: 'none',

  border: '0.0625rem solid $mauve8',
  bc: '$loContrast',

  py: '$2',
  px: '$2',
  br: '$1',

  transition: 'border .2s ease',

  '@hover': {
    '&:hover': {
      border: '0.0625rem solid $mauve10',
    },
  },
  '&:focus, &:focus-visible': {
    border: '0.0625rem solid $mauve11',
  },

  variants: {
    variant: {
      error: {
        borderColor: '$crimson9',

        '@hover': {
          '&:hover': {
            border: '0.0625rem solid $crimson9',
          },
        },
        '&:focus, &:focus-visible': {
          border: '0.0625rem solid $crimson9',
        },
      },
    },
  },
})

export default BaseInput
