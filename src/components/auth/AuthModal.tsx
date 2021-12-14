import { styled } from '@stitches.js'
import { useEffect, useState } from 'react'

export type AuthModalProps = {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

const TRANSITION_MSEC = 1000

function AuthModal({ open, onClose, children }: AuthModalProps) {
  const [visible, setVisible] = useState(open)

  useEffect(() => {
    if (open) return

    const interval = setInterval(() => {
      setVisible(false)
    }, TRANSITION_MSEC)

    return () => clearInterval(interval)
  }, [open])

  if (!visible) return null

  return (
    <ModalWrapper interactive={open ? 'open' : 'close'}>
      <ModalCloseButton onClick={onClose}>닫기</ModalCloseButton>
      <ModalBox>{children}</ModalBox>
    </ModalWrapper>
  )
}

const ModalWrapper = styled('div', {
  position: 'fixed',
  inset: 0,
  zIndex: '$fixed',

  display: 'flex',
  jc: 'center',
  ai: 'center',

  backdropFilter: 'blur(10px)',
  transition: `transform ${TRANSITION_MSEC}ms ease`,

  defaultVariants: {
    interactive: 'close',
  },

  variants: {
    interactive: {
      open: {
        transform: 'translateY(0)',
      },
      close: {
        transform: 'translateY(100%)',
      },
    },
  },
})

const ModalBox = styled('div', {
  br: '$4',
  width: '20rem',
  height: '20rem',
  bc: '$loContrast',
})

const ModalCloseButton = styled('button', {
  outline: 'none',
  border: 'none',
  cursor: 'pointer',

  position: 'absolute',
  top: '1rem',
  right: '1rem',

  display: 'flex',
  jc: 'center',
  ai: 'center',

  bc: '$hiContrast',
  br: '$1',
  color: '$sky10',
  fontSize: '$base',
  p: '$2',
})

export default AuthModal
