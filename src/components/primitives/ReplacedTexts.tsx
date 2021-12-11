import { slideIn, slideOut } from '@/styles/animation'
import { styled } from '@stitches.js'
import { useEffect, useMemo, useState } from 'react'

export type ReplacedTextsProps = {
  texts: string[]
  timer?: number
} & React.ComponentProps<typeof Text>

function ReplacedTexts({ texts, timer = 5000, ...props }: ReplacedTextsProps) {
  const [textIdx, setTextIdx] = useState<number | null>(null)
  const [transition, setTransition] = useState<'in' | 'out'>('in')

  const transitionTimer = useMemo(() => timer * 0.8, [timer])
  const text = useMemo(() => {
    if (textIdx === null) return null

    return texts[textIdx]
  }, [texts, textIdx])

  useEffect(() => {
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
    setTransition('in')

    const interval = setInterval(() => {
      setTransition('out')
    }, transitionTimer)

    return () => clearInterval(interval)
  }, [textIdx, transitionTimer])

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
