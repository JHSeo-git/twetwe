import Texlider from '@/components/animated/Texlider'
import TextareaAutosize from 'react-textarea-autosize'
import { styled } from '@stitches.js'
import { useRef } from 'react'
import Hero from '@/components/home/Hero'
import Panel from '@/components/common/Panel'

function Home() {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  // TODO: style된 component 빼야됨
  return (
    <Container>
      <Texlider text="TWE" />
      <Box>
        <Hero text="TWE" />
        <Panel
          css={{
            pt: '$4',
          }}
        >
          <StyledInput type="text" placeholder="Subject" />
          <StyledTextArea rows={5} ref={textareaRef} placeholder="Short" />
        </Panel>
      </Box>
    </Container>
  )
}

const Container = styled('section', {
  height: '100%',
  display: 'flex',
})

const Box = styled('div', {
  width: '100%',
})

const StyledInput = styled('input', {
  outline: 'none',

  width: '100%',

  my: '$2',
  py: '$3',
  px: '$4',
  br: '$4',
  bc: 'inherit',
  transition:
    'box-shadow .2s ease, transform .5s ease, background-color .5s ease',

  fontFamily: 'inherit',
  fontSize: '$base',
  color: '$mauve12',

  border: '1px solid transparent',

  '&::placeholder': {
    // color: 'transparent',
    transition: 'color .4s ease',
  },

  '&:focus, &:focus-visible': {
    bc: '$sand1',
    boxShadow: '$muiDp16',
    animation: 'none',
    '&::placeholder': {
      color: 'transparent',
    },
  },
})

const StyledTextArea = styled(TextareaAutosize, {
  outline: 'none',
  resize: 'none',

  width: '100%',

  my: '$2',
  py: '$3',
  px: '$4',
  br: '$4',
  bc: 'inherit',
  transition:
    'box-shadow .2s ease, transform .5s ease, background-color .5s ease',

  fontFamily: 'inherit',
  fontSize: '$base',
  color: '$mauve12',

  border: '1px solid transparent',

  '&::placeholder': {
    // color: 'transparent',
    transition: 'color .4s ease',
  },

  '&:focus, &:focus-visible': {
    bc: '$sand1',
    boxShadow: '$muiDp16',
    animation: 'none',
    '&::placeholder': {
      color: 'transparent',
    },
  },
})

export default Home
