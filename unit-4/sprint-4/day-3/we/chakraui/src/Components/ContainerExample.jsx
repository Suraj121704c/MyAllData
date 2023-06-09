import { Container } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';

// Conatiner basically align the text so that it would not go beyond

function ContainerExample() {

    return (
    <Container maxW='2xl' bg='blue.600' centerContent>
    <Box padding='4' bg='blue.400' color='black' maxW='md'>
    There are many benefits to a joint design and development system. Not only
    does it bring benefits to the design team, but it also brings benefits to
    engineering teams. It makes sure that our experiences have a consistent look
    and feel, not just in our design specs, but in production.
   </Box>
   </Container>
    )

}

export {ContainerExample}