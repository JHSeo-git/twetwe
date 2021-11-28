import { styled } from '@stitches.js'
import Footer from './Footer'
import Header from './Header'

export type LayoutProps = {
  naked?: boolean
  children: React.ReactNode
}

function Layout({ naked = false, children }: LayoutProps) {
  if (naked) {
    return <Container>{children}</Container>
  }
  return (
    <Container>
      <Header />
      <Main>
        <SpaceHeader />
        {children}
      </Main>
      <Footer />
    </Container>
  )
}

const Container = styled('div', {
  height: '100%',
})

const Main = styled('main', {
  position: 'relative',
})

const SpaceHeader = styled('div', {
  height: '$headerHeight',
})

export default Layout
