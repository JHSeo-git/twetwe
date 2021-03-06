import { styled } from '@stitches.js'

export type PanelProps = {}

const Panel = styled('div', {
  maxWidth: '$maxWidth',
  m: '0 auto',
  px: '$4',

  variants: {
    fullWidth: {
      true: {
        maxWidth: '100%',
      },
    },
  },
})

export default Panel
