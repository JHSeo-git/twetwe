import { AuthSession } from '@supabase/supabase-js'
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

const sessionState = atom<AuthSession | null>({
  key: 'sessionState',
  default: null,
})

const isFetchingState = atom<boolean>({
  key: 'isFetchingState',
  default: false,
})

export function useSessionState() {
  return useRecoilState(sessionState)
}

export function useSessionValue() {
  return useRecoilValue(sessionState)
}

export function useIsFetchingState() {
  return useRecoilState(isFetchingState)
}

export function useIsFetchingValue() {
  return useRecoilValue(isFetchingState)
}
