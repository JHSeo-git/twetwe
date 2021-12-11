import { keyframes } from '@stitches.js'

export const borderFlash = keyframes({
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

export const slideIn = keyframes({
  '0%': {
    transform: 'translateY(100%)',
    opacity: 0,
  },
  '100%': {
    transform: 'translateY(0)',
    opacity: 1,
  },
})
export const slideOut = keyframes({
  '0%': {
    transform: 'translateY(0)',
    opacity: 1,
  },
  '100%': {
    transform: 'translateY(100%)',
    opacity: 0,
  },
})
