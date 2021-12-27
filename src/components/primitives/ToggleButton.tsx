import { styled } from '@stitches.js'
import { useState } from 'react'

type ToggleButtonProps = {
  label?: string
  size?: 'small' | 'large'
}

function ToggleButton({ label, size = 'large' }: ToggleButtonProps) {
  const [checked, setChecked] = useState(false)

  const onClick = () => {
    setChecked(!checked)
  }

  return (
    <ToggleWrapper>
      {label && <ToggleLabel>{label}</ToggleLabel>}
      <ToggleBox onClick={onClick} role="button" tabIndex={-1}>
        <ToggleTrack size={size} checked={checked ? 'on' : 'off'} />
        <ToggleThumb size={size} checked={checked ? 'on' : 'off'} />
        <ToggleInput
          type="checkbox"
          aria-label="switch between dark and light mode"
          checked={checked}
          readOnly
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

  defaultVariants: {
    size: 'large',
  },
  variants: {
    size: {
      small: {
        width: '2rem',
        height: '1rem',
      },
      large: {
        width: '3rem',
        height: '1.5rem',
      },
    },
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
  bs: '$muiShadow2',

  defaultVariants: {
    size: 'large',
  },
  variants: {
    size: {
      small: {
        width: '0.75rem',
        height: '0.75rem',
      },
      large: {
        width: '1.25rem',
        height: '1.25rem',
      },
    },
    checked: {
      on: {
        transform: 'translateY(-50%) translateX(1.5rem)',
      },
      off: {
        transform: 'translateY(-50%)',
      },
    },
  },
  compoundVariants: [
    {
      size: 'small',
      checked: 'on',
      css: {
        transform: 'translateY(-50%) translateX(1rem)',
      },
    },
  ],
})

export default ToggleButton
