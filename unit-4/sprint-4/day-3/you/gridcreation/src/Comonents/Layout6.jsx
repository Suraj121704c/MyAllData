import React from 'react'
import {Grid,GridItem } from '@chakra-ui/react'

const Layout6 = () => {
  return (
    <div>
     <Grid
     h='500px'
     templateRows={{base : 'repeat(3, 1fr)' , sm : "repeat(6, 1fr)"}}
    templateColumns= {{base : 'repeat(3, 1fr)' , sm : 'repeat(6, 1fr)'}}
     gap={4}
>
  <GridItem rowSpan={1} colSpan={3} bg='tomato' />
  <GridItem rowSpan={1} colSpan={3} bg='blue' />
  <GridItem rowSpan={2} colSpan={6} bg='red' />
  <GridItem rowSpan={1} colSpan={2} bg='brown' />
  <GridItem rowSpan={1} colSpan={2} bg='green' />
  <GridItem rowSpan={1} colSpan={2} bg='orange' />
</Grid>
</div>
  )
}

export default Layout6
