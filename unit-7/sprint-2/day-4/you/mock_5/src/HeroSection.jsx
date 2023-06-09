import React from "react";
import { Box, Center, Heading, Text, Flex, Image } from "@chakra-ui/react";

const Welcome = () => {
  return (
    <Box>
      <Center display={"block"} textAlign={"center"}>
        <Heading>
          Welcome to our <span style={{ color: "red" }}>Kindergarten</span>{" "}
        </Heading>
        <Text w="60%" m="auto" mt="5">
          Our set he for firmament morning sixth subdue today the darkness
          creeping gathered divide our let god moving today. Moving in fourth
          air night bring upon lesser subdue fowl male signs.
        </Text>
      </Center>
      <Box>
        <Box className="welcomeBox" w="70%" margin="auto">
          <Box className="welcomeFlex" p="2rem">
            <Flex justifyContent={"space-around"} mb="2rem">
              <Image
                src="https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon1.svg"
                alt="ball"
              />
              <Box textAlign={"left"} pl="2rem">
                <Text fontSize={"x-large"} color={"blue.500"}>
                  Inter School Sports
                </Text>
                <Text>
                  The words you use in your written communica speak volumes.
                </Text>
              </Box>
            </Flex>
            <Flex justifyContent={"space-around"} mb="2rem">
              <Image
                src="https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon2.svg"
                alt="ball"
              />
              <Box textAlign={"left"} pl="2rem">
                <Text fontSize={"x-large"} color={"#ECC94B"}>
                  Friendly Environment
                </Text>
                <Text>
                  The words you use in your written communica speak volumes.
                </Text>
              </Box>
            </Flex>
            <Flex justifyContent={"space-around"} mb="2rem">
              <Image
                src="https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon3.svg"
                alt="ball"
              />
              <Box textAlign={"left"} pl="2rem">
                <Text fontSize={"x-large"} color={"#0BC5EA"}>
                  Multimedia Class
                </Text>
                <Text>
                  The words you use in your written communica speak volumes.
                </Text>
              </Box>
            </Flex>
          </Box>
          <Box className="welcomeImage">
            <Image
              w="100%"
              src="https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/about2.png"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
