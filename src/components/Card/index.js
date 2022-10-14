import { Flex, VStack, Text, Button, Image, Box } from '@chakra-ui/react';

import Link from 'next/link';

export default function Card({ id, image, title, name, de, por }) {
    return (
        <>
            <Flex w={250} direction="column" height={290} >
                <Flex ml={5} mt={226} position="absolute" w={75} h={0.5} bg="#8A9297"></Flex>
                <Flex mt={-6} l={24} position="absolute" alignItems="center" justifyContent="center" w={165} h={25} borderBottomRightRadius={5} borderTopRightRadius={5} bg="button.primary">

                    <Text color="header.textColor" fontWeight="semibold">Economize</Text>
                    <Text ml={1} color="header.logoColor" fontWeight="bold">R$ {(de - por).toFixed(0)}</Text>
                </Flex>
                <VStack ml={1} mr={1}>

                    <Flex alignItems="center" justifyContent="center">
                        <Image ml={1} w={220} h={163} mt={0.5} src={image.url} alt={image.alt} quality={100} objectFit="fill" />
                    </Flex>

                    <Flex alignItems="flex-start" direction="column" key={id} >
                        <Text fontSize={13} fontWeight="medium" color="#8A9297">{title}</Text>
                        <Text fontSize={14} fontWeight="semibold" color="#000" >{name}</Text>
                        <Text fontSize={15} fontWeight="semibold" color="#8A9297" >R$ {de} </Text>
                        <Text fontSize={18} fontWeight="bold" color="text.linkColor" >R$ {por} </Text>
                    </Flex>
                    <Flex mt={10} mb={4} cursor="pointer" w="90%" alignItems="center" justifyContent="center" borderRadius={5} h="35" bg="button.primary" _hover={{ bg: "text.linkColorHouver", fontSize: 17, fontWeight: "bold" }} >
                        <Link href={'/#'}>
                            <Text color="header.textColor" >Compre Agora</Text>
                        </Link>
                    </Flex>
                </VStack>
            </Flex>
            <Flex w={0.5} h={348} border='1px solid #8A9297' ></Flex>
        </>
    );
}