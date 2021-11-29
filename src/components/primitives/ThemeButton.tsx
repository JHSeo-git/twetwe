import { styled } from '@stitches.js'
import { useTheme } from 'next-themes'
import { animated, useSpring } from 'react-spring'

export type ThemeButtonProps = {}

function ThemeButton(props: ThemeButtonProps) {
  const { theme, setTheme } = useTheme()
  const animatedRotate = useSpring({
    transform: `rotate(${theme === 'light' ? '90' : '40'}deg)`,
  })
  const animatedScale = useSpring({
    transform: `scale(${theme === 'light' ? '1' : '0'})`,
  })
  const maskedCircleProps = useSpring({
    cx: theme === 'light' ? 25 : 10,
    cy: theme === 'light' ? 0 : 2,
  })

  const onClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ToggleButton onClick={onClick}>
      <Svg width="18" height="18" viewBox="0 0 18 18" style={animatedRotate}>
        <mask id="moon-mask-main-nav">
          <rect x="0" y="0" width="18" height="18" fill="#FFF"></rect>
          <Circle
            cx={maskedCircleProps.cx}
            cy={maskedCircleProps.cy}
            r="8"
            fill="black"
          ></Circle>
        </mask>
        <circle cx="9" cy="9" mask="url(#moon-mask-main-nav)" r="5"></circle>
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
})

const Svg = styled(animated.svg, {})
const Circle = styled(animated.circle, {
  fill: '$mauve11',
  transformOrigin: 'center center',
})

// css="transform-origin: center center; transform: scale(1);"

export default ThemeButton
