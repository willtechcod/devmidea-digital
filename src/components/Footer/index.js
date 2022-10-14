import { Flex, Text, Box } from '@chakra-ui/react';
import Link from 'next/link';


export default function Footer() {
    return (
        <>
            <Flex flexDirection='row'>

                <Flex ml={130} flexDirection='column'>
                    <Text color='text.titleColor' fontSize='sm' fontWeight='medium' mb={15}>Menu de Rodapé</Text>

                    <Link href={'/#'}>
                        <Text _hover={{ color: 'text.linkColorHouver' }} color='text.titleColor' cursor='pointer' fontSize={14} fontWeight='medium'>Pesquisar</Text>
                    </Link>

                    <Link href={'/#'}>
                        <Text _hover={{ color: 'text.linkColorHouver' }} color='text.titleColor' cursor='pointer' fontSize={14} fontWeight='medium'>Quem Somos</Text>
                    </Link>

                    <Link href={'/#'}>
                        <Text _hover={{ color: 'text.linkColorHouver' }} color='text.titleColor' cursor='pointer' fontSize={14} fontWeight='medium'>Envio e Prazos de Entrega</Text>
                    </Link>

                    <Link href={'/#'}>
                        <Text _hover={{ color: 'text.linkColorHouver' }} color='text.titleColor' cursor='pointer' fontSize={14} fontWeight='medium'>Compra Segura</Text>
                    </Link>

                    <Link href={'/#'}>
                        <Text _hover={{ color: 'text.linkColorHouver' }} color='text.titleColor' cursor='pointer' fontSize={14} fontWeight='medium'>Política de Troca ou Devolução</Text>
                    </Link>

                    <Link href={'/#'}>
                        <Text _hover={{ color: 'text.linkColorHouver' }} color='text.titleColor' cursor='pointer' fontSize={14} fontWeight='medium'>Política de Privacidade</Text>
                    </Link>

                    <Link href={'/#'}>
                        <Text _hover={{ color: 'text.linkColorHouver' }} color='text.titleColor' cursor='pointer' fontSize={14} fontWeight='medium'>Termos e Condições</Text>
                    </Link>

                    <Link href={'/#'}>
                        <Text _hover={{ color: 'text.linkColorHouver' }} color='text.titleColor' cursor='pointer' fontSize={14} fontWeight='medium'>Rastrei seu Pedido</Text>
                    </Link>

                    <Link href={'/#'}>
                        <Text _hover={{ color: 'text.linkColorHouver' }} color='text.titleColor' cursor='pointer' fontSize={14} fontWeight='medium'>Política de Cancelamento</Text>
                    </Link>
                </Flex>

                <Flex ml={150} flexDirection='column'>
                    <Text color='text.titleColor' fontSize='sm' fontWeight='medium' mb={15}>Fale Conosco</Text>
                    <Text color='text.titleColor' fontSize={14} fontWeight='bold' >Horário de atendimento: Seg a Sáb 8:00 às 18:00h</Text>
                    <Text color='text.titleColor' fontSize={14} fontWeight='bold' >Email: devmaniadigitalsac@gmail.com</Text>
                    <Text color='text.titleColor' fontSize={14} fontWeight='bold' >CNPJ: 00.000.000/0000-00</Text>
                </Flex>

            </Flex>

            <Flex flexDirection='column' ml={125} mb={50} mt={20}>

                <Link href={'http://www.willtechcod.com'}>
                    <Text color='text.titleColor' fontSize={14} fontWeight='bold' cursor='pointer'>© Devmania Digital - Todos os direitos reservados.</Text>
                </Link>
                <Text color='text.titleColor' fontSize={14} fontWeight='bold' >Desde 2019 excedendo expectativas. CNPJ: 00.000.000/0000-00</Text>
            </Flex>
        </>
    );
}