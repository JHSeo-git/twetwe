import { AuthSession } from '@supabase/supabase-js'
import { atom, useRecoilState, useRecoilValue } from 'recoil'

const sessionState = atom<AuthSession | null>({
  key: 'sessionState',
  default: null,
})

export function useSessionState() {
  return useRecoilState(sessionState)
}

export function useSessionValue() {
  return useRecoilValue(sessionState)
}
