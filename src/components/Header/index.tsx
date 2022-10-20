import { Flex, Text} from '@chakra-ui/react';
import Image from 'next/image';
import Logo from '../../../public/images/Logo.svg';

export default function Header(){
    return(
        <>  
            
            <Flex mt={50} flexDirection='column'  alignItems='center' justifyContent='center'>
                <Flex flexDirection='column' alignItems='center'  mb={25}>
                <Text color='button.primary' fontWeight='bold'  fontSize={60} >Parada Certa</Text>
                <Text mb={15} color='input.color' fontSize={24} >estacione com segurança e comodidade.</Text>
                </Flex>
                    
            </Flex>
            <Flex mb={25}>
            {/*<Image
                src={Logo}
                width={95}
                height={95}
            />*/}
            </Flex>
        </>
    )
}