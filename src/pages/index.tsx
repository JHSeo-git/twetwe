import { styled } from '@stitches.js'
import ReplacedTexts from '@/components/primitives/ReplacedTexts'

const HeroTexts = ['TWE TWE', '퉤 퉤', '잊어버리지 않기 위한', '나만의 노트']

function Home() {
  return (
    <Container>
      <Box>
        <HeroWrap>
          <Content>
            <ReplacedTexts texts={HeroTexts} />
          </Content>
        </HeroWrap>
        {/* TODO: twe lists with ordering, filtering, searching... */}
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
