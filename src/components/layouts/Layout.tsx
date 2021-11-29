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
      <Main>{children}</Main>
      <Footer />
    </Container>
  )
}

const Container = styled('div', {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
})

const Main = styled('main', {
  flex: 1,
  position: 'relative',
})

export default Layout
