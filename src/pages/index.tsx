import { styled } from '@stitches.js'

function Home() {
  return (
    <Container>
      <StyledInput type="text" placeholder="Please twe(퉤)!" />
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
  width: '20rem',
  mx: '$4',

  border: 'none',
  outline: 'none',

  py: '$3',
  px: '$4',
  br: '$pill',
  boxShadow: '$interactiveShadow1',
  transition: 'box-shadow .2s ease, transform .5s ease',

  fontFamily: 'inherit',
  fontSize: '$base',
  color: '$mauve12',

  '&:focus, &:focus-visible': {
    boxShadow: '$interactiveShadow2',
    transform: 'translateY(-3px)',
  },
})

export default Home
