import { useMemo } from 'react'
import { useRouter } from 'next/router'
import { ChakraProvider } from '@chakra-ui/react'
import { IntlProvider } from 'react-intl';

import { Indonesia, English } from 'localization'
import Layout from 'modules/Layout';

import 'animate.css';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const { locale } = useRouter()
  const [shortLocale] = locale ? locale.split("-") : ["en"]

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
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </IntlProvider>
  )
}

export default MyApp
