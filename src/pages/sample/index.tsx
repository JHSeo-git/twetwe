import Texlider from '@/components/primitives/Texlider'
import { styled } from '@stitches.js'

export type SamplePageProps = {}

function SamplePage(props: SamplePageProps) {
  return (
    <Container>
      <Texlider text="TWE" />
      SamplePage
    </Container>
  )
}

const Container = styled('section', {})

export default SamplePage
