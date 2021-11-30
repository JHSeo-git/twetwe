/**
 * @see https://usehooks-ts.com/react-hook/use-ssr
 */
function useSSR() {
  const isDOM =
    typeof window !== 'undefined' &&
    window.document &&
    window.document.documentElement

  return {
    isBrowser: isDOM,
    isServer: !isDOM,
  }
}

export default useSSR
