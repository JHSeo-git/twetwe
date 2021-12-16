import { styled } from '@stitches.js'

const BaseInput = styled('input', {
  outline: 'none',

  border: '0.0625rem solid $mauve11',
  bc: '$loContrast',

  py: '$2',
  px: '$2',
  br: '$1',

  variants: {
    variant: {
      error: {
        borderColor: '$crimson9',
      },
    },
  },
})

export default BaseInput
