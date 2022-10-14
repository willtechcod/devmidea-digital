import {
    Flex,
    Text,
    Menu,
    MenuList,
    Button,
    MenuItem,
    MenuButton,
    Input
} from '@chakra-ui/react';

import Image from 'next/image';
import logoImg from '../../../public/images/Logo-Marca.svg';
import { FiMenu, FiShoppingCart, FiSearch } from 'react-icons/fi';
import Link from 'next/link';

export default function Header() {
    return (
        <>
            <Flex background="header.accentColor" fontSize='xs' fontWeight='bold' height="30" alignItems="center" justifyContent="center" textTransform="uppercase" >
                <Text color="header.textColorDark">último dia de frete grátis para todo o Brasil</Text>
            </Flex>
            <Flex background="header.background" height="120" flexDirection="row">
                <Flex mt={12} ml={123} mr={4}>
                    <Menu>
                        <MenuButton
                            as={Button}
                            colorScheme='transparent'
                            border='1px'
                            borderColor='rgba(163, 175, 239, 0.3)'
                        >
                            <Flex >
                                <FiMenu cursor="pointer" color='#FFF' size={22} />
                                <Text ml={2}>
                                    Menu
                                </Text>
                            </Flex>
                        </MenuButton>

                        <MenuList >
                            <Link href={'/'} _hover={{ bg: 'transparent' }}>
                                <MenuItem _hover={{ color: 'text.accentColor', bg: 'transparent' }}>
                                    Início
                                </MenuItem>
                            </Link>
                            <Link href={'/ofertas'}>
                                <MenuItem _hover={{ color: 'text.accentColor', bg: 'transparent' }}>
                                    Ofertas
                                </MenuItem>
                            </Link>
                            <Link href={'/rastreio'}>
                                <MenuItem _hover={{ color: 'text.accentColor', bg: 'transparent' }} >
                                    Rastrei seu Pedido
                                </MenuItem>
                            </Link>
                            <Link href={'/contato'}>
                                <MenuItem _hover={{ color: 'text.accentColor', bg: 'transparent' }} >
                                    Fale Conosco
                                </MenuItem>
                            </Link>
                        </MenuList>
                    </Menu>
                </Flex>

                <Flex mt={10} cursor="pointer">
                    <Link href={'/'} >
                        <Image
                            src={logoImg}
                            quality={100}
                            width={190}
                            objectFit="fill"
                            alt='Logo devmania digital'
                        />
                    </Link>
                </Flex>

                <Flex mt={12} w={650} ml={4}>
                    <Flex alignItems='center' cursor='pointer' position='absolute' zIndex={99} ml={615} justify='center' borderTopEndRadius={5} borderBottomRightRadius={5} bg="header.accentColor" w={35} h={38} >
                        <FiSearch size={20} color='#FFF' />
                    </Flex>
                    <Input placeholder='Pesquisar...' textColor='header.textColorDark' h={38} background='header.textColor' focusBorderColor='limeheader.borderColor' />
                </Flex>

                <Flex cursor='pointer' mt={14} ml={6}  >
                    <Flex background='header.accentColor' _hover={{ w: '6', h: '6', mt: '-3', transition: '0.6s ease' }} position='absolute' mt={-2} ml={4} w={5} h={5} alignItems='center' justifyContent='center' borderRadius={10}>
                        <Text fontSize='sm' fontWeight='medium' color='header.textColor'>0</Text>
                    </Flex>
                    <Link href={'/carrinho'} >
                        <FiShoppingCart size={22} color='#FFF' />
                    </Link>
                    <Link href={'/carrinho'}>
                        <Text ml={6} fontWeight='bold' color='header.textColor'>Carrinho</Text>
                    </Link>
                </Flex>
            </Flex>
        </>
    );
}