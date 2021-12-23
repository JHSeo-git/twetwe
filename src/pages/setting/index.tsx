import BaseToggle from '@/components/common/BaseToggle'
import Panel from '@/components/common/Panel'
import { styled } from '@stitches.js'

export type SettingPageProps = {}

function SettingPage(props: SettingPageProps) {
  return (
    <Container>
      <Panel>
        <BaseToggle label="토글" />
      </Panel>
    </Container>
  )
}

const Container = styled('section', {
  pt: '$4',
})

export default SettingPage
