import React from 'react'
import {Grid,GridItem} from "@chakra-ui/react";


const Layout4 = () => {
  return (
    <div>
      <Grid
   templateAreas={{base : `"nav nav nav"
                           "main main main"
                           "footer footer footer"` ,
                   sm : `"nav nav footer"
                   "nav nav footer"
                   "main main footer"`}}
  gridTemplateRows={'1fr 1fr 1fr'}
  gridTemplateColumns={'1fr 1fr 1fr'}
  h='200px'
  gap='1'
  color='blackAlpha.700'
  fontWeight='bold'
>
  <GridItem pl='2' bg='pink.300' area={'nav'}>
  </GridItem>

  <GridItem pl='2' bg='green.300' area={'main'}>
  </GridItem>

  <GridItem pl='2' bg='blue.300' area={'footer'}>
  </GridItem>

</Grid>
    </div>
  )
}

export default Layout4

// "nav nav nav"
// "main main main"
// "footer footer footer"

// "nav nav footer"
// "nav nav footer"
// "main main footer"