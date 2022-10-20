import Head from 'next/head';
import { Flex, Text, Link, Button, Tr, Container } from '@chakra-ui/react';
import Header from '../../components/Header';
import Veiculos from '../../components/Veiculo';

export default function Dashboard(){
  return(
    <>
    <Head>
      <title>Dashboard - Seu sistema de estacionamento </title>
    </Head>
                
        <Flex flexDirection='column'  alignItems='center' justifyContent='center' height='100vh' background='fundo.color'>
            
             <Text  ml={1200} mt={-150} fontSize='2xl'>
                    <Link  _hover={{color:'button.primary'}}  color='input.color'  href='/'>
                        Sair
                    </Link>
             </Text>

             <Header/>
            
            <Flex flexDirection='row' alignItems='center' justifyContent='center'>

                <Text ml='12' fontSize={35}  color='#FFF' >19/10/2022</Text>

                <Button ml='10' background='button.terciary' _hover={{bg:'#6ee3fd', color:'input.color'}} size='sm'>
                    <Text fontSize='lg' fontWeight='bold' alignItems='center' justifyContent='center'>+</Text>
                </Button>

            </Flex>

            <Flex mb={21} mt={35} width={868} height='0.5' background='button.primary'></Flex>

            
            <Veiculos/>
            
            
        </Flex>
    </>
  )
}