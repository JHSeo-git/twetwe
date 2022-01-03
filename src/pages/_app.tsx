import { useMemo } from 'react'
import { RecoilRoot } from 'recoil'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'

import globalStyles from '@/styles/globalStyles'
import { darkThemeClassName, lightThemeClassName } from '@stitches.js'

// import Layout from '@/components/layouts/Layout'
// import DebugObserver from '@/components/_debug/DebugObserver'
// import AuthSessionContext from '@/components/auth/AuthSessionContext'
import dynamic from 'next/dynamic'
const Layout = dynamic(() => import('@/components/layouts/Layout'))
const DebugObserver = dynamic(() => import('@/components/_debug/DebugObserver'))
const AuthSessionContext = dynamic(
  () => import('@/components/auth/AuthSessionContext')
)

// FIXME: have to congifure this
const layeredPages = [
  '/',
  '/new',
  '/entry',
  '/setting',
  '/sample',
  '/sample/form',
]

function MyApp({ Component, pageProps, router }: AppProps) {
  globalStyles()

  const { pathname } = router
  const nakedLayout = useMemo(() => {
    return !layeredPages.includes(pathname)
  }, [pathname])

  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      value={{ light: lightThemeClassName, dark: darkThemeClassName }}
      defaultTheme="system"
    >
      <RecoilRoot>
        <DebugObserver />
        <AuthSessionContext>
          <Layout naked={nakedLayout}>
            <Component {...pageProps} />
          </Layout>
        </AuthSessionContext>
      </RecoilRoot>
    </ThemeProvider>
  )
}

export default MyApp
