/**
 * @see https://www.joshwcomeau.com/css/custom-css-reset/
 */
import { globalCss } from '@stitches.js'

const globalStyles = globalCss({
  /**
   * 1. Use a more-intuitive box-sizing model.
   * 2. Remove default margin
   * 3. Allow percentage-based heights in the application
   * [Typographic tweaks!]
   * 4. Add accessible line-height
   * 5. Improve text rendering
   * 6. Improve media defaults
   * 7. Remove built-in form typography styles
   * 8. Avoid text overflows
   * 9. Create a root stacking context
   */
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },

  '*': {
    m: 0,
  },

  'html, body': {
    height: '100%',
  },

  'img, picture, video, canvas, svg': {
    display: 'block',
    maxWidth: '100%',
  },

  'input, button, textarea, select': {
    font: 'inherit',
  },

  'p, h1, h2, h3, h4, h5, h6': {
    overflowWrap: 'break-word',
  },

  body: {
    lineHeight: '1.5',
    WebkitFontSmoothing: 'antialiased',

    fontFamily: '$base',
    MozOsxFontSmoothing: 'grayscale',
    WebkitTextSizeAdjust: '100%',

    bc: '$loContrast',
    color: '$hiContrast',
  },

  '#__next': {
    height: '100%',
    isolation: 'isolate',
  },
})

export default globalStyles
