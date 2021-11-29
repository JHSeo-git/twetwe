import { styled } from '@stitches.js'
import { ReactComponent as LogoSvg } from '@/assets/icons/twe-logo.svg'
import Panel from '../common/Panel'
import NextLink from '../common/NextLink'
import ThemeButton from '../primitives/ThemeButton'

export type HeaderProps = {}

function Header(props: HeaderProps) {
  return (
    <HeaderBox>
      <HeaderPanel>
        <StyledLink href="/">
          <Logo />
        </StyledLink>
        <ThemeButton />
      </HeaderPanel>
    </HeaderBox>
  )
}

const HeaderBox = styled('header', {
  height: '$headerHeight',
  position: 'sticky',
  top: 0,
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
