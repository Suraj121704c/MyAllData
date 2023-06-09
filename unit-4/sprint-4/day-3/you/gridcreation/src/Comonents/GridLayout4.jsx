import { Flex , Center , Text , Square } from '@chakra-ui/react'

import React from 'react'

const GridLayout4 = () => {
  return (
    <div>
      <Flex 
      flexWrap="wrap"
      flexDirection={{ base: "row", xs: "column", md: "row" }}
      color='white'>
      <Center w='25%' bg='green.500'>
      <Text>NAV</Text>
      </Center>
     <Square bg='blue.500' w='50%' size='150px'>
      <Text>CONTENT</Text>
     </Square>
     <Square bg='red.500' w='25%' size='150px'>
      <Text>WIDGETS
      </Text>
     </Square>
    </Flex>
    </div>
  )
}

export default GridLayout4
