import { keyframes } from '@stitches.js'

export const borderFlashAnimation = keyframes({
  '0%': {
    borderColor: 'transparent',
  },
  '30%': {
    borderColor: 'transparent',
  },
  '50%': {
    borderColor: '$cyan5',
  },
  '70%': {
    borderColor: 'transparent',
  },
  '100%': {
    borderColor: 'transparent',
  },
})
