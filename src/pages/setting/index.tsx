import ToggleButton from '@/components/primitives/ToggleButton'
import Panel from '@/components/common/Panel'
import { styled } from '@stitches.js'

function SettingPage() {
  return (
    <Container>
      <SettingPanel>
        <ToggleButton label="자동로그인" />
        <ToggleButton label="설정할것들" />
        <ToggleButton size="small" label="작은토글" />
      </SettingPanel>
    </Container>
  )
}

const Container = styled('section', {
  pt: '$8',
})

const SettingPanel = styled(Panel, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
})

export default SettingPage
