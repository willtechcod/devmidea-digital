import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

const colors = {
    fundo:{
      color: 'linear-gradient(180deg, rgba(0, 0, 0, 0.9) 0%, rgba(27, 40, 24, 0.65) 50%, rgba(60, 89, 52, 0.37) 100%)',
      bg: 'rgba(0, 0, 0, 0.67)'
    },
    button: {
      primary: '#66FF31',
      secundary:'#FEE81F',
      terciary: '#36DBFF',
      text: '#000',
    },
    input:{
      bg: 'rgba(217, 217, 217, 0.11)',
      color: '#f7f7f7',
      border: '#66FF31'
    }
}

const theme = extendTheme({ colors });

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
   </ChakraProvider>
  )
}

export default MyApp
