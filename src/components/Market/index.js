import { Flex, Text } from '@chakra-ui/react';

import { FiPackage, FiShield } from 'react-icons/fi';
import { FaRegCreditCard, FaCreditCard } from 'react-icons/fa';
import { BiUserVoice } from 'react-icons/bi';


export default function Market() {
    return (
        <>
            <Flex mb={45} ml={55} mr={55} flexDirection='row' justify='space-between'>
                <Flex flexDirection='row'>
                    <FiPackage size={35} color='#000000' />
                    <Flex flexDirection='column' ml={4}>
                        <Text fontSize={16} color={{ header: 'background' }} fontWeight='bold'>Frete Grátis</Text>
                        <Text fontSize={14} color='#677279' fontWeight='medium'>Para todo o Brasil</Text>
                    </Flex>
                </Flex>

                <Flex flexDirection='row'>
                    <FaRegCreditCard size={35} color='#000' />
                    <Flex flexDirection='column' ml={4} >
                        <Text fontSize={16} color={{ header: 'background' }} fontWeight='bold'>Parcelamento</Text>
                        <Text fontSize={14} color='#677279' fontWeight='medium'>Parcele suas compras em até 12x</Text>
                    </Flex>
                </Flex>

                <Flex flexDirection='row'>
                    <BiUserVoice size={35} color='#000' />
                    <Flex flexDirection='column' ml={4} >
                        <Text fontSize={16} color={{ header: 'background' }} fontWeight='bold'>Precisa de ajuda?</Text>
                        <Text fontSize={14} color='#677279' fontWeight='medium'>Entre em contato conosco:</Text>
                        <Text fontSize={14} color='#677279' fontWeight='medium'>devmaniadigitalsac@gmail.com</Text>
                    </Flex>
                </Flex>

                <Flex flexDirection='row'>
                    <FiShield size={35} color='#000' />
                    <Flex flexDirection='column' ml={4} >
                        <Text fontSize={16} color={{ header: 'background' }} fontWeight='bold' >Compra segura</Text>
                        <Text fontSize={14} color='#677279' fontWeight='medium'>Seus dados protegidos por</Text>
                        <Text fontSize={14} color='#677279' fontWeight='medium'>criptografia</Text>
                    </Flex>
                </Flex>
            </Flex>
            <Flex mb={45} height='0.3' bg='#E1E3E4'>

            </Flex>
        </>
    );
}












