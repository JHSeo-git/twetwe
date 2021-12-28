import ToggleButton from '@/components/primitives/ToggleButton'
import Panel from '@/components/common/Panel'
import { styled } from '@stitches.js'

function SettingPage() {
  return (
    <Container>
      <Panel>
        <ToggleList>
          <ToggleItem>
            <ToggleButton label="자동로그인" />
          </ToggleItem>
          <ToggleItem>
            <ToggleButton label="설정할것들1" />
          </ToggleItem>
          <ToggleItem>
            <ToggleButton label="설정할것들2" />
          </ToggleItem>
          <ToggleItem>
            <ToggleButton label="설정할것들3" />
          </ToggleItem>
          <ToggleItem>
            <ToggleButton label="설정할것들4" />
          </ToggleItem>
          <ToggleItem>
            <ToggleButton size="small" label="작은토글" />
          </ToggleItem>
        </ToggleList>
      </Panel>
    </Container>
  )
}

const Container = styled('section', {
  pt: '$8',
})

const ToggleList = styled('ul', {
  listStyle: 'none',

  display: 'flex',
  flexDirection: 'column',

  p: 0,
  br: '$4',
  border: '1px solid $mauve6',

  bc: '$mauve2',
})

const ToggleItem = styled('li', {
  px: '$4',
  py: '$2',

  '&:not(:last-child)': {
    borderBottom: '1px solid $mauve6',
  },
})

export default SettingPage
