import { SimpleGrid } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react'

function GridExample(){

    const items = new Array(12).fill(0).map((_,i)=>i+1)
     
    return (
        <>
        <h1>Grid</h1>
        {/* <SimpleGrid columns={5} spacing={10}>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        <Box bg='tomato' height='80px'></Box>
        </SimpleGrid> */}
        <SimpleGrid columns={{base : 1,sm : 2, md:3 , lg:4 , xl:5,"2xl":6}} spacing={4}>
            {items.map((item)=>(
                <Box bg="tomato" h="80px">{item}</Box>
            ))}
        </SimpleGrid>
        </>
    )

}
export default GridExample