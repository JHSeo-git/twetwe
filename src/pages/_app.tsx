import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import globalStyles from '@/styles/globalStyles'
import { darkThemeClassName, lightThemeClassName } from '@stitches.js'
import Layout from '@/components/layouts/Layout'
import { useMemo } from 'react'
import { RecoilRoot } from 'recoil'
import AuthSessionContext from '@/components/auth/AuthSessionContext'

// FIXME: have to congifure this
const layeredPages = ['/', '/new', '/entry', '/sample', '/sample/form']

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
