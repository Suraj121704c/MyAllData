import { Box, Heading, Image } from "@chakra-ui/react";
import React from "react";

const TeacherCard = ({ title, description, imageUrl }) => {
  return (
    <Box textAlign={"center"}>
      <Image src={imageUrl} alt="teachers" />
      <Heading>{title}</Heading>
      <p>{description}</p>
    </Box>
  );
};

export default TeacherCard;
