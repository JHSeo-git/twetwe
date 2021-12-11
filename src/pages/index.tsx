import Texlider from '@/components/primitives/Texlider'
import TextareaAutosize from 'react-textarea-autosize'
import { styled } from '@stitches.js'
import { useRef } from 'react'
import Panel from '@/components/common/Panel'
import ReplacedTexts from '@/components/primitives/ReplacedTexts'

const HeroTexts = ['TWE TWE', '퉤 퉤', '잊어버리지 않기 위한', '나만의 노트']

function Home() {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  // TODO: style된 component 빼야됨
  return (
    <Container>
      <Texlider text="TWE" />
      <Box>
        <HeroWrap>
          <Content>
            <ReplacedTexts texts={HeroTexts} />
          </Content>
        </HeroWrap>
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

const HeroWrap = styled('div', {
  backgroundImage:
    'linear-gradient(90deg, $colors$purple7 0%, $colors$crimson7 100%);',
})

const Content = styled('h1', {
  m: 0,
  minHeight: '200px',
  color: '$hiContrast',

  display: 'flex',
  jc: 'center',
  ai: 'center',
})

export default Home
