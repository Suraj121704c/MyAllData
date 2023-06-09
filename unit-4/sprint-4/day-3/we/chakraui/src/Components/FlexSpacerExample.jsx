import React from 'react'
import { Flex,Box,Text,Spacer,Grid,HStack } from '@chakra-ui/react'

const FlexSpacerExample = () => {
  return (
    <div>
      <Box>
        
  <Text>Flex and Spacer: Full width, equal Spacing</Text>


  <Flex>
    <Box w='70px' h='10' bg='red.500' />
    <Spacer />
    <Box w='170px' h='10' bg='red.500' />
    <Spacer />
    <Box w='180px' h='10' bg='red.500' />
  </Flex>

  <Text>
    Grid: The children start at the beginning, the 1/3 mark and 2/3 mark
  </Text>


  <Grid templateColumns='repeat(3, 1fr)' gap={6}>
    <Box w='70px' h='10' bg='blue.500' />
    <Box w='170px' h='10' bg='blue.500' />
    <Box w='180px' h='10' bg='blue.500' />
  </Grid>

  <Text>
    HStack: The children have equal spacing but don't span the whole container
  </Text>


  <HStack spacing='24px'>
    <Box w='70px' h='10' bg='teal.500' />
    <Box w='170px' h='10' bg='teal.500' />
    <Box w='180px' h='10' bg='teal.500' />
  </HStack>
</Box>
    </div>
  )
}

export default FlexSpacerExample
