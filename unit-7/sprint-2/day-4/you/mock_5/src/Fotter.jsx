import {
  Box,
  chakra,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  IconButton,
  useColorModeValue,
  Heading,
  Button,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";

export default function Fotter() {
  return (
    <Box
      bg={useColorModeValue("blue.300")}
      color={useColorModeValue("black")}
      mt={"30"}>
      <Container as={Stack} maxW={"6xl"} py={10}>
        <SimpleGrid
          templateColumns={{ sm: "1fr 1fr", md: "2fr 1fr 1fr 2fr" }}
          spacing={8}>
          <Stack spacing={6}>
            <Box>
              <img
                src="https://preview.colorlib.com/theme/kindergarten/assets/img/logo/logo.png.webp"
                alt="nav"
              />
            </Box>
            <Text fontSize={"sm"}>
              © 2022 KinderGarten. All rights reserved
            </Text>
            <Stack direction={"row"} spacing={6}>
              {/* <SocialButton label={'Twitter'} href={'#'}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={'YouTube'} href={'#'}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'#'}>
                  <FaInstagram />
                </SocialButton> */}
              <Button>
                <FaTwitter />
              </Button>
              <Button>
                <FaYoutube />
              </Button>{" "}
              <Button>
                <FaInstagram />
              </Button>
            </Stack>
          </Stack>
          <Stack align={"flex-start"}>
            <Heading>Company</Heading>
            <Link href={"#"}>About us</Link>
            <Link href={"#"}>Blog</Link>
            <Link href={"#"}>Contact us</Link>
            <Link href={"#"}>Pricing</Link>
            <Link href={"#"}>Testimonials</Link>
          </Stack>
          <Stack align={"flex-start"}>
            <Heading>Support</Heading>
            <Link href={"#"}>Help Center</Link>
            <Link href={"#"}>Terms of Service</Link>
            <Link href={"#"}>Legal</Link>
            <Link href={"#"}>Privacy Policy</Link>
            <Link href={"#"}>Satus</Link>
          </Stack>

          <Stack align={"flex-start"}>
            <Heading>Follow Us</Heading>
            <Link href={"#"}>Facebook</Link>
            <Link href={"#"}>Twitter</Link>
            <Link href={"#"}>Dribbble</Link>
            <Link href={"#"}>Instagram</Link>
            <Link href={"#"}>LinkedIn</Link>
          </Stack>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
