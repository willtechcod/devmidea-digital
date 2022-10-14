import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';

import Simbol from '../../../public/images/Simbol.svg';

import { FaCar, FaTshirt } from 'react-icons/fa';
import { MdOutlinePhoneIphone } from 'react-icons/md';
import { RiHomeHeartFill } from 'react-icons/ri';

export default function Category() {
    return (
        <>
            <Flex ml={39} w="94%" flexDirection="row" justifyContent="space-between"  >

                <Text color="category.background" fontSize="22" fontWeight="medium">Categorias</Text>
                <Flex cursor="pointer" color="text.linkColor" fontWeight="bold" _hover={{ color: "text.linkColorHouver" }} >
                    <Link href={'/#'}>
                        <Text fontWeight="bold">Ver todas</Text>
                    </Link>
                </Flex>

            </Flex>

            <Flex ml={70}>
                <Flex p={3} cursor="pointer" mt={25} flexDirection='column' _hover={{ color: "text.accentColor" }}  >
                    <Flex ml={-2} width={170} height={170} border="3px solid #D4DA13" borderRadius={85} transition="0.3s ease-in" bg="#000" _hover={{ border: "3px solid #000", transition: "0.5s ease-in", color: "text.accentColor" }} >
                        <Flex position='absolute' zIndex={99} mt={5} ml={42} flexDirection='column' >
                            <RiHomeHeartFill size={75} color="#FFF" />
                            <Image
                                src={Simbol}
                                quality={100}
                                height={55}
                                width={55}
                                objectFit="fill"
                                alt='Logo devmania digital'
                            />
                        </Flex>
                    </Flex>
                    <Link href={'/#'}>
                        <Text ml={50} fontSize={18} fontWeight="bold">Casa</Text>
                    </Link>
                </Flex>
                <Flex p={3} cursor="pointer" mt={25} flexDirection='column' _hover={{ color: "text.accentColor" }}  >
                    <Flex ml={3} width={170} height={170} border="3px solid #D4DA13" borderRadius={85} transition="0.3s ease-in" bg="#000" _hover={{ border: "3px solid #000", transition: "0.5s ease-in", color: "text.accentColor" }} >
                        <Flex position='absolute' zIndex={99} mt={5} ml={42} flexDirection='column' >
                            <FaCar size={75} color="#FFF" />
                            <Image
                                src={Simbol}
                                quality={100}
                                height={55}
                                width={55}
                                objectFit="fill"
                                alt='Logo devmania digital'
                            />
                        </Flex>
                    </Flex>
                    <Link href={'/#'}>
                        <Text ml={50} fontSize={18} fontWeight="bold">Automóveis</Text>
                    </Link>
                </Flex>
                <Flex p={3} cursor="pointer" mt={25} flexDirection='column' _hover={{ color: "text.accentColor" }}  >
                    <Flex ml={3} width={170} height={170} border="3px solid #D4DA13" borderRadius={85} transition="0.3s ease-in" bg="#000" _hover={{ border: "3px solid #000", transition: "0.5s ease-in", color: "text.accentColor" }} >
                        <Flex position='absolute' zIndex={99} mt={5} ml={42} flexDirection='column' >
                            <MdOutlinePhoneIphone size={75} color="#FFF" />
                            <Image
                                src={Simbol}
                                quality={100}
                                height={55}
                                width={55}
                                objectFit="fill"
                                alt='Logo devmania digital'
                            />
                        </Flex>
                    </Flex>
                    <Link href={'/#'}>
                        <Text ml={50} fontSize={18} fontWeight="bold">Eletrônicos</Text>
                    </Link>
                </Flex>
                <Flex p={3} cursor="pointer" mt={25} flexDirection='column' _hover={{ color: "text.accentColor" }}  >
                    <Flex ml={1} width={170} height={170} border="3px solid #D4DA13" borderRadius={85} transition="0.3s ease-in" bg="#000" _hover={{ border: "3px solid #000", transition: "0.5s ease-in", color: "text.accentColor" }} >
                        <Flex position='absolute' zIndex={99} mt={5} ml={42} flexDirection='column' >
                            <FaTshirt size={75} color="#FFF" />
                            <Image
                                src={Simbol}
                                quality={100}
                                height={55}
                                width={55}
                                objectFit="fill"
                                alt='Logo devmania digital'
                            />
                        </Flex>
                    </Flex>
                    <Link href={'/#'}>
                        <Text ml={50} fontSize={18} fontWeight="bold">Roupas</Text>
                    </Link>
                </Flex>
            </Flex>
        </>
    );
}