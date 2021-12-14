import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

const visibleAuthModalState = atom({
  key: 'visibleAuthModalState',
  default: false,
})

export function useVisibleAuthModalState() {
  return useRecoilState(visibleAuthModalState)
}

export function useVisibleAuthModalValue() {
  return useRecoilValue(visibleAuthModalState)
}

export function useSetVisibleAuthModal() {
  return useSetRecoilState(visibleAuthModalState)
}
