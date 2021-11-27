import { globalCss } from '@stitches.js'

const globalStyles = globalCss({
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  'html, body, #__next': {
    height: '100%',
  },

  body: {
    m: 0,
    fontFamily: '$base',
    WebkitFontSmoothing: 'antialiased',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTextSizeAdjust: '100%',

    bc: '$loContrast',
    color: '$hiContrast',

    wordBreak: 'break-word',
    lineHeight: '1.5',
  },
})

export default globalStyles
