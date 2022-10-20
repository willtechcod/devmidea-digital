import Head from 'next/head';
import { Flex, Text, Input, Button } from '@chakra-ui/react';
import Header from './../components/Header/index';

export default function Login(){
  return(
    <>
    <Head>
      <title>Parada Certa - Faça seu login</title>
    </Head>
    
    <Flex flexDirection='column'  alignItems='center' justifyContent='center' height='100vh' background='fundo.color'>
    <Header/>
        
      <Flex flexDirection='column'>
      
        <Input
          color='#FFF'
          borderColor='input.border'
          _placeholder={{ opacity: 1, color: '#FFF' }}
          bgColor='inpit.bg'
          mb={4}
          placeholder='Digite seu email'
          focusBorderColor='lime'
          type='email'
          width={425}
        />
        <Input
          color='#FFF'
          borderColor='input.border'
          _placeholder={{ opacity: 1, color: '#FFF' }}
          type='password'
          bgColor='inpit.bg'
          focusBorderColor='lime'
          placeholder='Digite sua senha'
          width={425}
        />

        <Button type='submit' mt={25} mb={20} bg="#4CF412" color='#131313' fontWeight='bold' border='2px solid #0e0d0d79' _hover={{bg:'button.primary', fontWeight:'bold', color:'#000', fontSize:'18px', border:'1px solid #FFF'}}>
          Entrar
        </Button>

      </Flex>
    </Flex>
    </>
  )
}