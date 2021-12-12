import TextareaAutosize from 'react-textarea-autosize'
import { styled } from '@stitches.js'
import { useRef } from 'react'
import Panel from '@/components/common/Panel'

function NewPage() {
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  // TODO: input components primitives 로 빼는 걸 생각해봐야됨
  return (
    <Panel
      css={{
        pt: '$4',
      }}
    >
      <StyledInput type="text" placeholder="Subject" />
      <StyledTextArea rows={5} ref={textareaRef} placeholder="Desciprtion" />
    </Panel>
  )
}
const StyledInput = styled('input', {
  outline: 'none',

  width: '100%',

  my: '$2',
  py: '$3',
  px: '$4',
  br: '$4',
  bc: 'inherit',
  transition:
    'box-shadow .2s ease, transform .5s ease, background-color .5s ease',

  fontFamily: 'inherit',
  fontSize: '$base',
  color: '$mauve12',

  border: '1px solid transparent',

  '&::placeholder': {
    // color: 'transparent',
    transition: 'color .4s ease',
    fontStyle: 'italic',
  },

  '&:focus, &:focus-visible': {
    bc: '$sand1',
    boxShadow: '$muiDp16',
    animation: 'none',
    '&::placeholder': {
      color: 'transparent',
    },
  },
})

const StyledTextArea = styled(TextareaAutosize, {
  outline: 'none',
  resize: 'none',

  width: '100%',

  my: '$2',
  py: '$3',
  px: '$4',
  br: '$4',
  bc: 'inherit',
  transition:
    'box-shadow .2s ease, transform .5s ease, background-color .5s ease',

  fontFamily: 'inherit',
  fontSize: '$base',
  color: '$mauve12',

  border: '1px solid transparent',

  '&::placeholder': {
    // color: 'transparent',
    transition: 'color .4s ease',
    fontStyle: 'italic',
  },

  '&:focus, &:focus-visible': {
    bc: '$sand1',
    boxShadow: '$muiDp16',
    animation: 'none',
    '&::placeholder': {
      color: 'transparent',
    },
  },
})

export default NewPage
