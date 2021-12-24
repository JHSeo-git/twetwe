import ToggleButton from '@/components/primitives/ToggleButton'
import Panel from '@/components/common/Panel'
import { styled } from '@stitches.js'

export type SettingPageProps = {}

function SettingPage(props: SettingPageProps) {
  return (
    <Container>
      <Panel>
        <ToggleButton label="토글" />
        <ToggleButton />
        <ToggleButton />
      </Panel>
    </Container>
  )
}

const Container = styled('section', {
  pt: '$4',
})

export default SettingPage
