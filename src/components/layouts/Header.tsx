import { styled } from '@stitches.js'
import { ReactComponent as LogoSvg } from '@/assets/images/twe-logo.svg'
import Panel from '../common/Panel'
import NextLink from '../common/NextLink'

export type HeaderProps = {}

function Header(props: HeaderProps) {
  return (
    <HeaderBox>
      <HeaderPanel>
        <StyledLink href="/">
          <Logo />
        </StyledLink>
      </HeaderPanel>
    </HeaderBox>
  )
}

const HeaderBox = styled('header', {
  height: '$headerHeight',
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  zIndex: '$fixed',

  width: '100%',
})

const Logo = styled(LogoSvg, {
  height: '2rem',
})

const HeaderPanel = styled(Panel, {
  height: '100%',

  display: 'flex',
  jc: 'space-between',
  ai: 'center',
})

const StyledLink = styled(NextLink, {
  display: 'flex',
  jc: 'center',
  ai: 'center',
})

export default Header
