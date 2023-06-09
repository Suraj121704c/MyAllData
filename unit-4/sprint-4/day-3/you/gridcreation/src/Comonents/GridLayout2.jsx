import React from 'react'
import { Box, SimpleGrid } from "@chakra-ui/react"

const Layout2 = () => {
  return (
    <div>
      <SimpleGrid columns={{base : 1 ,sm : 3,md:3,lg:3,xl:3}} spacing={0}>
        
        <Box alignItems="center" 
        display="flex" justifyContent="center" fontWeight="bold" fontSize="3xl" color="white" bg="yellow" height="120px">NAV</Box>


        <Box display="flex" alignItems="center" justifyContent="center" fontWeight="bold" fontSize="3xl" color="white" bg="Red" height="120px">CONTENT</Box>



        <Box alignItems="center" 
        display="flex" justifyContent="center" fontWeight="bold" fontSize="3xl" color="white" bg="blue" height="120px">WIDGETS</Box>



      </SimpleGrid>
    </div>
  )
}

export default Layout2
