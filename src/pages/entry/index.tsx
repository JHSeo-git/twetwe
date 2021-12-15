import AuthForm from '@/components/auth/AuthForm'
import Panel from '@/components/common/Panel'

function EntryPage() {
  return (
    <Panel
      css={{
        pt: '$8',
      }}
    >
      <AuthForm />
    </Panel>
  )
}

export default EntryPage
