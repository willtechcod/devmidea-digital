import React from 'react';
import {Button, Table, TableContainer, Tbody, Td, Th, Thead, Tr} from '@chakra-ui/react';

export default function Veiculos(){

    const automoveis=[
        {placa: 'MBL-6570', modelo:'Gol G3 2001', tempo:'1h 35min'},
        {placa: 'CUA-2597', modelo:'Corsa wind 2003', tempo:'35min'},
        {placa: 'CEO-6570', modelo:'CB Hornet 600', tempo:'45min'},
        {placa: 'FEI-4672', modelo:'Honda Biz 125c', tempo:'2h 35min'},
        
    ]

    const lista = automoveis.map(
        (c) =>
            <Tr key={c.placa}>
                <Td color='input.color'>{c.placa}</Td>
                <Td color='input.color'>{c.modelo}</Td>
                <Td fontWeight='semibold' color='input.color' isNumeric>{c.tempo}</Td>
                <Td><Button bg='button.secundary' _hover={{bg:'#dac619', color:'#262626'}} size='sm'>X</Button></Td>
            </Tr>
    )

    return(
        <>
            
            <TableContainer >
                <Table variant='simple'>
                    <Thead>
                    <Tr>
                        <Th color='input.color' fontSize='md'>Placa</Th>
                        <Th color='input.color' fontSize='md'>Modelo</Th>
                        <Th color='input.color' isNumeric fontSize='md'>Tempo</Th>
                        <Th color='input.color' fontSize='md'>Finalizar</Th>
                    </Tr>
                    </Thead>
                    <Tbody>
                    {lista}
                    </Tbody>
                </Table>
            </TableContainer>
            
        </>
    )
}