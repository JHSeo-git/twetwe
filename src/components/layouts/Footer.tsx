import { styled } from '@stitches.js'
import { siteConfig } from '@/lib/siteConfig'
import Panel from '../common/Panel'
import { ReactComponent as GithubSvg } from '@/assets/icons/github.svg'
import NextLink from '../common/NextLink'

export type FooterProps = {}

function Footer(props: FooterProps) {
  return (
    <FooterBox>
      <StyledPanel>
        <CopyRight>{siteConfig.copyright}</CopyRight>
        <StyledNextLink href={siteConfig.repoUrl}>
          <GithubLogo />
        </StyledNextLink>
      </StyledPanel>
    </FooterBox>
  )
}

const FooterBox = styled('footer', {
  height: '$footerHeight',

  top: '100vh',
  position: 'sticky',
})

const StyledPanel = styled(Panel, {
  height: '100%',
  display: 'flex',
  jc: 'space-between',
  ai: 'center',
})

const CopyRight = styled('p', {
  m: 0,
  fontSize: '$xs',
  color: '$mauve11',
})

const GithubLogo = styled(GithubSvg, {
  size: '$4',
})

const StyledNextLink = styled(NextLink, {
  display: 'flex',
  jc: 'center',
  ai: 'center',

  color: '$mauve12',
  transition: 'color .2s ease',

  '@hover': {
    '&:hover': {
      color: '$mauve11',
    },
  },
})

export default Footer
