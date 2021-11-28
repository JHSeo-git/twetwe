import { styled } from '@stitches.js'

export type FooterProps = {}

function Footer(props: FooterProps) {
  return <FooterBox>Footer</FooterBox>
}

const FooterBox = styled('footer', {
  height: '$footerHeight',
  bc: '$amber2',

  top: '100vh',
  position: 'sticky',
})

export default Footer
