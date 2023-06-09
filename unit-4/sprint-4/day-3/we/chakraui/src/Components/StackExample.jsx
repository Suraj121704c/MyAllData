import React from 'react'
import { Stack , Box, useBreakpointValue , Heading }  from '@chakra-ui/react'

const StackExample = () => {
 
  const text = useBreakpointValue({
    base:"BASE",
    sm:"SMALL",
    md:"MEDIUM",
    lg:"LARGE",
    xl:{
      size : "XTRA LARGE"
  },
    "2xl" : {
      size :"XTRA XTRA LARGE"
    },
  })
 console.log(text)
  return (
    <div>
      <h1>Stack</h1>
      <Stack direction={{base : 'column', lg:'row'}} spacing='24px'>
      <Heading  as="h6">{text.size ? text.size : text}</Heading>
      <Box w='40px' h='40px' bg='yellow.200'>
       1
      </Box>
      <Box w='40px' h='40px' bg='tomato'>
      2
      </Box>
     <Box w='40px' h='40px' bg='pink.100'>
      3
     </Box>
     </Stack>
    </div>
  )
}

export default StackExample
