import { slideIn, slideOut } from '@/styles/animation'
import { styled } from '@stitches.js'
import { useEffect, useMemo, useState } from 'react'

export type ReplacedTextsProps = {
  texts: string[]
  timer?: number
} & React.ComponentProps<typeof Text>

// TODO: refactor when texts.length is 0
function ReplacedTexts({ texts, timer = 5000, ...props }: ReplacedTextsProps) {
  const [textIdx, setTextIdx] = useState<number>(0)
  const [transition, setTransition] = useState<'in' | 'out'>('in')

  const transitionTimer = useMemo(() => timer * 0.8, [timer])
  const text = useMemo(() => {
    if (texts.length === 0) return ''

    return texts[textIdx]
  }, [texts, textIdx])

  useEffect(() => {
    if (texts.length === 0) return

    const interval = setInterval(() => {
      setTextIdx((prevIdx) => {
        if (prevIdx === null) return 0
        if (prevIdx === texts.length - 1) return 0

        return prevIdx + 1
      })
    }, timer)

    return () => clearInterval(interval)
  }, [texts, textIdx, timer])

  useEffect(() => {
    if (texts.length === 0) return

    setTransition('in')

    const interval = setInterval(() => {
      setTransition('out')
    }, transitionTimer)

    return () => clearInterval(interval)
  }, [texts, textIdx, transitionTimer])

  return (
    <Text interactive={transition} {...props}>
      {text}
    </Text>
  )
}

const Text = styled('span', {
  variants: {
    interactive: {
      in: {
        animation: `${slideIn} 1s ease forwards`,
      },
      out: {
        animation: `${slideOut} 1s ease forwards`,
      },
    },
  },
})

export default ReplacedTexts
