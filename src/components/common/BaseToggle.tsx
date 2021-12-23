import { styled } from '@stitches.js'
import { useId } from '@radix-ui/react-id'

type BaseToggleProps = {
  label?: string
} & React.ComponentProps<typeof ToggleInput>

function BaseToggle({ label, ...props }: BaseToggleProps) {
  const id = useId()
  return (
    <ToggleLabel htmlFor={id}>
      {label}
      <ToggleInput id={id} type="checkbox" {...props} />
    </ToggleLabel>
  )
}

const ToggleLabel = styled('label', {})

const ToggleInput = styled('input', {
  outline: 'none',
  border: 'none',

  py: '$2',
  px: '$2',

  '&:checked': {},
})

export default BaseToggle
