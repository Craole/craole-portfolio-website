// import { InjectTailwind } from '@/helpers'
import createEmotionCache from '@/lib/createEmotionCache'
import '@/styles/tailwind.css'
import { AppThemeProvider } from '@/themes'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import { AppProps } from 'next/app'
import Head from 'next/head'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Change title in _app.tsx</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      {/* <InjectTailwind> */}
      {/* <ThemeProvider theme={DarkTheme}> */}
      <AppThemeProvider>
        {/* <CssBaseline /> */}
        <Component {...pageProps} />
      </AppThemeProvider>
      {/* </ThemeProvider> */}
      {/* </InjectTailwind> */}
    </CacheProvider>
  )
}
