import { styled } from '@stitches.js'
import { useState } from 'react'

type ToggleButtonProps = {
  label?: string
} & React.ComponentProps<typeof ToggleInput>

function ToggleButton({ label, ...props }: ToggleButtonProps) {
  const [checked, setChecked] = useState(false)

  const onClick = () => {
    setChecked(!checked)
  }

  return (
    <ToggleWrapper>
      {label && <ToggleLabel>{label}</ToggleLabel>}
      <ToggleBox onClick={onClick} role="button" tabIndex={-1}>
        <ToggleTrack checked={checked ? 'on' : 'off'} />
        <ToggleThumb checked={checked ? 'on' : 'off'} />
        <ToggleInput
          type="checkbox"
          aria-label="switch between dark and light mode"
          checked={checked}
          readOnly
          {...props}
        />
      </ToggleBox>
    </ToggleWrapper>
  )
}

const ToggleWrapper = styled('div', {
  display: 'flex',
  ai: 'center',
})

const ToggleLabel = styled('span', {
  mr: '$2',
  color: '$hiContrast',
})

const ToggleBox = styled('div', {
  position: 'relative',
  touchAction: 'pan-x',
  userSelect: 'none',
  cursor: 'pointer',

  display: 'flex',
})

const ToggleInput = styled('input', {
  position: 'absolute',
  overflow: 'hidden',
  clip: 'rect(0 0 0 0)',
  border: 0,
  width: '1px',
  height: '1px',
  margin: '-1px',
})

const ToggleTrack = styled('div', {
  br: '$pill',
  border: '1px solid $colors$mauve11',

  width: '3rem',
  height: '1.5rem',

  bc: '$mauve10',
  transition: '.25s ease-in-out',

  variants: {
    checked: {
      on: {
        bc: '$blue10',
        border: '1px solid $colors$blue11',
      },
      off: {
        bc: '$mauve10',
        border: '1px solid $colors$mauve11',
      },
    },
  },
})

const ToggleThumb = styled('div', {
  position: 'absolute',
  top: '50%',
  left: '0.125rem',
  transition: '.25s ease-in-out',
  transform: 'translateY(-50%)',
  width: '1.25rem',
  height: '1.25rem',

  br: '$round',
  bc: '$mauve3',

  variants: {
    checked: {
      on: {
        transform: 'translateY(-50%) translateX(1.5rem)',
      },
      off: {
        transform: 'translateY(-50%)',
      },
    },
  },
})

export default ToggleButton
