import useLink from '@/hooks/useLink'
import { styled } from '@stitches.js'
import Link from 'next/link'

export type NextLinkProps = {
  href: string
  children: React.ReactNode
} & React.ComponentProps<typeof StyledLink>

function NextLink({ href, children, ...props }: NextLinkProps) {
  const linkInfo = useLink(href)

  if (linkInfo.type === 'External') {
    return (
      <StyledLink
        {...props}
        as="a"
        href={linkInfo.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </StyledLink>
    )
  }

  return (
    <StyledLink {...props} href={linkInfo.href} passHref>
      <a>{children}</a>
    </StyledLink>
  )
}

const StyledLink = styled(Link, {})

export default NextLink
