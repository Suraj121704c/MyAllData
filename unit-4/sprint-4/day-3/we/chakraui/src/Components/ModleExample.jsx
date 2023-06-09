import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Text
  } from '@chakra-ui/react';
import { Button,useDisclosure } from '@chakra-ui/react';

function ModleExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
        <Button onClick={onOpen}>Open Modal</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Text>More examples
              The spelling mistakes in the text had been highlighted in green.
              The text is finished, but the pictures will have to be pasted in later.
              You need to demonstrate to the examiners that you have more than a literal understanding of the text.
              The students are reading "Lord of the Flies" as one of their set texts this year.
              At this point in the speech, the minister</Text>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

export default ModleExample
