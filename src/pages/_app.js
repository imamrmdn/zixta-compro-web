import { useMemo, useEffect } from 'react'
import { useRouter } from 'next/router'
import { ChakraProvider, theme as chakraTheme, extendTheme } from '@chakra-ui/react'
import { IntlProvider } from 'react-intl';
import Chatra from '@chatra/chatra'

import { Indonesia, English } from 'localization'
import Layout from 'src/components/Layout';

import 'animate.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'src/styles/globals.css'

const theme = extendTheme({
  fonts: {
    ...chakraTheme.fonts,
    heading: `'Poppins', sans-serif`,
    body: `'Poppins', sans-serif`,
  }
})

let config = {
  ID: 'KM7Bj8PvWttrxePQb',
}

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter()
  const [shortLocale] = locale ? locale.split("-") : ["en"]

  useEffect(() => {
    if (window) {
      Chatra('init', config)
      Chatra('expandWidget')
    }
  }, [])

  const messages = useMemo(() => {
    switch (shortLocale) {
      case "en":
        return English;
      default:
        return Indonesia;
    }
  }, [shortLocale]);

  return (
    <IntlProvider
      locale={shortLocale}
      messages={messages}
      onError={() => null}>
      <ChakraProvider theme={theme} >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </IntlProvider>
  )
}

export default MyApp
