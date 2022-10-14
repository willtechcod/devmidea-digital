import Head from 'next/head';
import { Flex, Text } from '@chakra-ui/react';
import Market from '../../components/Market';

export default function Contato() {
    return (
        <>
            <Head>
                <title>Devmania Digital - Fale Conosco</title>
            </Head>
            <Flex flexDirection='column' alignItems='center' justify='center' bg='#FFF' height={350}>

                <Text fontSize='3xl' fontWeight='medium'>FALE CONOSCO</Text>

                <Flex mt={10} mb={15}>
                    <Text fontSize={20} fontWeight='semibold' color='text.titleColor' >Horário de atendimento: Seg. à Sáb. 8:00 às 18:00h</Text>
                </Flex>

                <Flex mb={15}>
                    <Text fontSize={20} fontWeight='normal' color='text.titleColor' >Email: magazinedigitalsac@gmail.com</Text>
                </Flex>

                <Flex >
                    <Text fontSize={20} fontWeight='medium' color='text.titleColor' >Whatsapp: (67) 99999-9999</Text>
                </Flex>

            </Flex>

        </>
    );
}