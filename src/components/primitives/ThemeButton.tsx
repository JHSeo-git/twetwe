import { styled } from '@stitches.js'
import { useTheme } from 'next-themes'
import { useMemo } from 'react'
import { animated, useSpring } from 'react-spring'

export type ThemeButtonProps = {}

function ThemeButton(props: ThemeButtonProps) {
  const { theme, setTheme } = useTheme()

  const browserTheme = useMemo(() => {
    if (!theme) return 'light'
    return theme
  }, [theme])

  const animatedRotate = useSpring({
    transform: `rotate(${browserTheme === 'light' ? '90' : '40'}deg)`,
  })
  const animatedScale = useSpring({
    transform: `scale(${browserTheme === 'light' ? '1' : '0'})`,
  })
  const animatedCircle = useSpring({
    cx: browserTheme === 'light' ? '25' : '10',
    cy: browserTheme === 'light' ? '0' : '2',
  })
  const maskedCircle = useSpring({
    r: browserTheme === 'light' ? '5' : '8',
  })

  const onClick = () => {
    setTheme(browserTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <ToggleButton onClick={onClick}>
      <Svg width="18" height="18" viewBox="0 0 18 18" style={animatedRotate}>
        <mask id="moon-mask-main-nav">
          <rect width="18" height="18" x="0" y="0" fill="#FFF"></rect>
          <animated.circle
            {...animatedCircle}
            r="8"
            fill="black"
          ></animated.circle>
        </mask>
        <Circle
          cx="9"
          cy="9"
          {...maskedCircle}
          mask="url(#moon-mask-main-nav)"
        ></Circle>
        <g>
          <Circle cx="17" cy="9" r="1.5" style={animatedScale}></Circle>
          <Circle
            cx="13"
            cy="15.928203230275509"
            r="1.5"
            style={animatedScale}
          ></Circle>
          <Circle
            cx="5.000000000000002"
            cy="15.92820323027551"
            r="1.5"
            style={animatedScale}
          ></Circle>
          <Circle
            cx="1"
            cy="9.000000000000002"
            r="1.5"
            style={animatedScale}
          ></Circle>
          <Circle
            cx="4.9999999999999964"
            cy="2.071796769724492"
            r="1.5"
            style={animatedScale}
          ></Circle>
          <Circle
            cx="13"
            cy="2.0717967697244912"
            r="1.5"
            style={animatedScale}
          ></Circle>
        </g>
      </Svg>
    </ToggleButton>
  )
}

const ToggleButton = styled('button', {
  border: 'none',
  bc: 'inherit',
  p: 0,
  cursor: 'pointer',

  display: 'flex',
  jc: 'center',
  ai: 'center',
})

const Svg = styled(animated.svg, {
  overflow: 'visible',
})
const Circle = styled(animated.circle, {
  fill: '$hiContrast',
  transformOrigin: 'center center',
})

// css="transform-origin: center center; transform: scale(1);"

export default ThemeButton
