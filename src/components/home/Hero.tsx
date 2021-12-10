import { styled } from '@stitches.js'

export type HeroProps = {
  text?: string
}

function Hero({ text }: HeroProps) {
  return <HeroWrap>{text && <Content>{text}</Content>}</HeroWrap>
}

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

export default Hero
