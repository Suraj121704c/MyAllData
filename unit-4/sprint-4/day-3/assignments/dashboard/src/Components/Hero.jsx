import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";
import { MdImageSearch } from "react-icons/md";
import React from "react";

export default function Hero() {
  return (
    <Box boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 12px" padding="20px">
      <Box>
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
          rel="stylesheet"
        />
      </Box>

      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <Heading
            fontWeight={700}
            fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
            lineHeight={"110%"}
          >
            Find The Right <br />
            <Text as={"span"} color={"#4E41E0"}>
              Four-Day{" "}
            </Text>
            <Text as={"span"} color={"black"}>
              Week Job
            </Text>
          </Heading>
        </Stack>
        <FormControl
          display="flex"
          textAlign="center"
          alignItems="center"
          justifyContent="center"
        >
          <Input
            Type="email"
            width="500px"
            placeholder="Type job title on keyboard"
            border="1px solid blue"
          />
          &nbsp;&nbsp;&nbsp;
          <Button border="1px solid blue">
            <MdImageSearch />
          </Button>
        </FormControl>
        <Box display="flex" justifyContent="space-evenly" marginTop="20px">
          <Button colorScheme="purple" width="160px">🌎Remote</Button>
          <Button colorScheme="purple" width="160px">🖳Tech</Button>
          <Button colorScheme="purple" width="160px">📈Marketing</Button>
        </Box>
      </Container>
    </Box>
  );
}
