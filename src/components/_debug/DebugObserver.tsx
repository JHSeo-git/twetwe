import { useEffect } from 'react'
import { useRecoilSnapshot } from 'recoil'

const isDev = process.env.NODE_ENV === 'development'

function DebugObserverOrigin() {
  const snapshot = useRecoilSnapshot()

  useEffect(() => {
    console.debug('The following atoms were modified:')
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.debug(node.key, snapshot.getLoadable(node))
    }
  }, [snapshot])

  return null
}

function DebugObserver() {
  if (!isDev) {
    return null
  }

  return <DebugObserverOrigin />
}

export default DebugObserver
