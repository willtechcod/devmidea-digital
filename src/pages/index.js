import Head from 'next/head';
import { Center, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Slider from '../../public/images/Slider-area.png';
import AreaInfo from '../../public/images/Area-informacao.png';
import Card from '../components/Card';
import Category from '../components/Category';

import { productcard } from '../Product-List.json';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>Devmania Digital - Sua loja de eletônicos e importados</title>
      </Head>
      <Flex background="background.page" height="100vh">
        <Image
          src={Slider}
          quality={100}
          height={740}
          objectFit="fill"
          alt='Logo devmania digital'
        />
      </Flex>

      <Flex mt={105} ml={45} mr={55} mb={-111} justifyContent='space-between'>
        <Text color="category.background" fontSize="22">Lancamentos</Text>
        <Link href={'#'}>
          <Text cursor="pointer" color="text.linkColor" _hover={{ color: "text.linkColorHouver" }} fontWeight="bold" >Ver todos</Text>
        </Link>
      </Flex>

      <Flex ml={12} mr={8} borderRadius={5} width={1261} h={350} mt={40} mb={20} border='1px solid #8A9297' >
        <Center>
          {productcard.map((productcard) => (
            <Card key={productcard.id}
              image={productcard.image}
              title={productcard.title}
              name={productcard.name}
              de={productcard.de}
              por={productcard.por}
            />
          ))}
        </Center>
      </Flex>

      <Category />

      <Flex mt={30} mb={58}>
        <Image
          src={AreaInfo}
          quality={100}
          height={740}
          objectFit="fill"
          alt='Imagem de oferta'
        />
      </Flex>
    </>
  );
}