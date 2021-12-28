import { styled } from '@stitches.js'
import { ReactComponent as LogoSvg } from '@/assets/icons/twe-logo.svg'
import Panel from '../common/Panel'
import NextLink from '../common/NextLink'
import ThemeButton from '../primitives/ThemeButton'
import { useSessionValue } from '@/store/auth'
import { useRouter } from 'next/dist/client/router'

function Header() {
  const session = useSessionValue()
  const { pathname } = useRouter()

  return (
    <HeaderBox>
      <HeaderPanel>
        <HeaderCol>
          <StyledLink css={{ mr: '$6' }} href="/">
            <Logo />
          </StyledLink>
          <HeaderNav aria-label="desktop navigation">
            <HeaderNavList>
              {session ? (
                <HeaderNavItem>
                  <NavLink href="/setting" current={pathname === '/setting'}>
                    Setting
                  </NavLink>
                </HeaderNavItem>
              ) : (
                <HeaderNavItem>
                  <NavLink href="/entry" current={pathname === '/entry'}>
                    Entry
                  </NavLink>
                </HeaderNavItem>
              )}
            </HeaderNavList>
          </HeaderNav>
        </HeaderCol>
        <HeaderCol>
          <ThemeButton />
        </HeaderCol>
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

const HeaderPanel = styled(Panel, {
  height: '100%',

  display: 'flex',
  jc: 'space-between',
  ai: 'center',
})

const HeaderCol = styled('div', {
  display: 'flex',
  ai: 'center',
})

const Logo = styled(LogoSvg, {
  height: '2rem',
})

const StyledLink = styled(NextLink, {
  display: 'flex',
  jc: 'center',
  ai: 'center',
})

const HeaderNav = styled('nav', {})

const HeaderNavList = styled('ul', {
  listStyle: 'none',
  display: 'flex',
  p: 0,
})

const HeaderNavItem = styled('li', {
  m: '$2',
})

const NavLink = styled(NextLink, {
  textDecoration: 'none',
  color: '$mauve12',

  fontWeight: 'bold',
  fontSize: '$sm',
  p: '$2',

  '@hover': {
    '&:hover': {
      textDecoration: 'underline',
    },
  },

  variants: {
    current: {
      true: {
        color: '$blue10',
      },
    },
  },
})

export default Header
