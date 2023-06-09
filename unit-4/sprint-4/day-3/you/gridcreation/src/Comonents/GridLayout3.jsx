import React from 'react'
import { Stack , Box } from '@chakra-ui/react';

const GridLayout3 = () => {
  return (
    <div>
     <Stack direction={{ base : ['row' , 'column'] , sm : ['column','row'] }} spacing='0px'>

     <Box alignItems="center" 
        display="flex" justifyContent="center" fontWeight="bold" fontSize="3xl" color="white" bg="yellow" w='20%' h='200px'>
      NAV
     </Box>

     <Box
     alignItems="center" 
     display="flex" justifyContent="center" fontWeight="bold" fontSize="3xl"
      w='60%' h='200px' bg='tomato' color="white">
      CONTENT
     </Box>

     <Box
     alignItems="center" 
     display="flex" justifyContent="center" fontWeight="bold" fontSize="3xl"
      w='20%' h='200px' bg='pink' color="white">
      WIDGETS
     </Box>


     </Stack>


    </div>
  )
}

export default GridLayout3
