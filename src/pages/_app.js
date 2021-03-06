import { useMemo } from 'react'
import { useRouter } from 'next/router'
import { ChakraProvider } from '@chakra-ui/react'
import { IntlProvider } from 'react-intl';

import { Indonesia, English } from 'localization'
import Layout from 'src/components/Layout';

import 'animate.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'src/styles/globals.css'

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
