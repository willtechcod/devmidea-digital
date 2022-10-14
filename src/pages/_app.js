import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Market from '../components/Market';

const colors = {
  background: {
    page: '#ffffff',
  },
  header: {
    background: '#000000',
    textColor: '#FFFFFF',
    textColorDark: '#000000',
    textLightColor: '#A3AFEF',
    borderColor: 'rgba(163, 175, 239, 0.3)',
    accentColor: '#D4DA13',
    logoColor: '#E9A445',
  },
  product: {
    reviewStarColor: '#FF9400',
    soldOutColor: '#8A9297',
    lowStock: '#EE0000',
  },
  button: {
    primary: '#008A00',
    primaryTextColor: '#FFFFFF',
    secondary: '#1E2D7D',
    secondaryTextColor: '#FFFFFF',
  },
  text: {
    linkColor: 'rgba(0, 138, 0, 0.8)',
    linkColorHouver: '#003E00',
    titleColor: '#677279',
    borderColor: '#E1E3E4',
    formeColor: '#D4D6D8',
    accentColor: '#008A00',
  },
  category: {
    background: '#000000',
    borderColor: '#E9A445',
    borderHouverColor: '#000000',
  }
}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Market />
      <Footer />
    </ChakraProvider>
  )
}

export default MyApp
