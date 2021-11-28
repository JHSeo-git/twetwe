import Panel from '@/components/common/Panel'
import { styled } from '@stitches.js'

export type FormPageProps = {}

function FormPage(props: FormPageProps) {
  return (
    <Container>
      <Panel>
        <Form>inputs + labels</Form>
      </Panel>
    </Container>
  )
}

const Container = styled('section', {})
const Form = styled('form', {})

export default FormPage
