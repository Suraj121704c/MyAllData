import React from "react";
import { Box } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box display="flex" border="1px solid black" color="white" p={2} w="100%" bg="white" justifyContent="space-between" alignItems="center">
    <Box>
      <button>
        <img
          src="https://www.wework4days.com/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fassets%2Fimages%2Flogo.4cc40a9ad62028ac0ab9af556de0b081.svg&w=32&q=75"
          width={"30px"}
        />
      </button>
      </Box>
      <Box>
      <Button
        size="md"
        height="40px"
        width="100px"
        color={"black"}
        bg={"white"}
      >
        Sign In
      </Button>
      <Button
        marginRight="10px"
        size="md"
        height="40px"
        width="100px"
        border="2px"
        borderColor="purple.500"
        color={"black"}
        bg={"white"}
      >
        Sign Up
      </Button>
      <Button
        size="md"
        height="40px"
        color={"black"}
        bg={"white"}
        width="140px"
        borderColor="purple.500"
        background="linear-gradient(to right, var(--chakra-colors-purple-500), var(--chakra-colors-blue-500))"
      >
        Post a Job&nbsp;
        <span>🚀</span>
      </Button>
      </Box>
      </Box>
  );
};

export default Navbar;
