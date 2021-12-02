import Texlider from '@/components/animated/Texlider'
import { borderFlashAnimation } from '@/styles/animation'
import { styled } from '@stitches.js'

function Home() {
  // TODO: styledInput component 빼야됨
  return (
    <Container>
      <Texlider text="TWE" />
      <StyledInput type="text" placeholder="퉤" />
    </Container>
  )
}

const Container = styled('section', {
  height: '100%',
  display: 'flex',
  jc: 'center',
  ai: 'center',
})

const StyledInput = styled('input', {
  outline: 'none',

  width: '$maxWidth',
  mx: '$3',

  py: '$3',
  px: '$4',
  br: '$pill',
  bc: 'inherit',
  transition:
    'box-shadow .2s ease, transform .5s ease, background-color .5s ease',

  fontFamily: 'inherit',
  fontSize: '$base',
  color: '$mauve11',
  textAlign: 'center',

  border: '1px solid transparent',
  animation: `${borderFlashAnimation} 4s ease infinite`,

  '&::placeholder': {
    color: 'transparent',
    transition: 'color .2s ease',
  },

  '&:focus, &:focus-visible': {
    bc: '$sand1',
    boxShadow: '$muiDp16',
    // transform: 'translateY(-5px)',
    animation: 'none',
    '&::placeholder': {
      color: 'transparent',
    },
  },
})

export default Home
