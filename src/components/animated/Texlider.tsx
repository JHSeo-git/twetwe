import useInterval from '@/hooks/useInterval'
import { styled } from '@stitches.js'
import { useEffect, useState } from 'react'

const TRANSITION_SEC = 5
const POST_DELAY_SEC = 1

export type TexliderProps = {
  text: string
  direction?: 'up' | 'down'
}

// TODO: IsmorphicFiberSturcture error로 인한 구조변경 필요
function Texlider({ text, direction = 'up' }: TexliderProps) {
  const [slideOn, setSlideOn] = useState(false)
  const [fadeOut, setFadeOut] = useState(false)
  const [unMount, setUnMount] = useState(false)

  useInterval(() => {
    setFadeOut(true)
  }, TRANSITION_SEC * 1000)

  useInterval(() => {
    setUnMount(true)
  }, (TRANSITION_SEC + POST_DELAY_SEC) * 1000)

  useEffect(() => {
    setSlideOn(true)
  }, [setSlideOn])

  if (unMount) return null

  return (
    <Container fadeOut={fadeOut}>
      <Inner on={slideOn}>
        {Array.from({ length: 25 }).map((_, i) => (
          <Text key={`up-text-${i}`} stroke>
            {text}
          </Text>
        ))}
        <Text>{text}</Text>
        {Array.from({ length: 25 }).map((_, i) => (
          <Text key={`down-text-${i}`} stroke>
            {text}
          </Text>
        ))}
      </Inner>
    </Container>
  )
}

const Container = styled('div', {
  position: 'fixed',
  inset: 0,

  display: 'flex',
  jc: 'center',
  ai: 'center',

  bc: '$loContrast',
  zIndex: '$fixed',

  opacity: 1,
  transition: `opacity ${POST_DELAY_SEC / 2}s ease`,

  variants: {
    fadeOut: {
      true: {
        opacity: 0,
      },
    },
  },
})

const Inner = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  jc: 'center',
  ai: 'center',

  transition: `transform ${TRANSITION_SEC}s ease`,
  transform: 'translateY(100%)',

  variants: {
    on: {
      true: {
        transform: 'translateY(0)',
      },
    },
  },
})

const Text = styled('span', {
  fontSize: '3.5rem',
  fontFamily: '$ubuntu',
  fontWeight: 'bold',
  lineHeight: '1',
  color: '$blue9',

  variants: {
    stroke: {
      true: {
        color: 'transparent',
        WebkitTextStrokeWidth: '1.5px',
        WebkitTextStrokeColor: '$colors$blue9',
      },
    },
  },
})

export default Texlider
