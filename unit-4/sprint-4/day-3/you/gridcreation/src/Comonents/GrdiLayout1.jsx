import React from 'react';
import { GridItem , Grid} from '@chakra-ui/react'

const Layout1 = () => {
  return (
    <div>
     <Grid
     h='200px'
     templateRows=
     {{base : 'repeat(1, 1fr)',
      sm : 'repeat(2, 1fr)' }}
     templateColumns={{base : 'repeat(1, 1fr)',
     sm : 'repeat(5,1fr)'
    }}
      
    >
    <GridItem
     display="flex" 
     alignItems="center"
     justifyContent="center"
     fontSize="50px"
     color="white"
     rowSpan={2} colSpan={1} bg='blue'>Navbar</GridItem>

    <GridItem 
    display="flex" 
    alignItems="center"
    justifyContent="center"
    fontSize="50px"
    color="black"
    rowSpan={2} colSpan={3} bg='papayawhip'>Content</GridItem>

    <GridItem 
    display="flex" 
    alignItems="center"
    justifyContent="center"
    fontSize="50px"
    color="white"
    rowSpan={2} colSpan={1} bg='tomato'>Footer</GridItem>

    </Grid>
    </div>
  )
}

export default Layout1
