import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import TeacherCard from "./TeacherCard";

const Teacher = () => {
  const data = [
    {
      id: "1",
      title: "Mr.Jacson Clay",
      description: "Sports Instructor",
      imageUrl:
        "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team2.png",
    },
    {
      id: "2",
      title: "Mr.Jacson Clay",
      description: "Sports Instructor",
      imageUrl:
        "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team3.png",
    },
    {
      id: "3",
      title: "Mr.Jacson Clay",
      description: "Sports Instructor",
      imageUrl:
        "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team1.png",
    },

    {
      id: "4",
      title: "Mr.Jacson Clay",
      description: "Sports Instructor",
      imageUrl:
        "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team1.png",
    },

    // Add more card objects as needed
  ];
  return (
    <Box>
      <Box style={{ textAlign: "center" }} mt={"30"}>
        <Heading style={{ color: "blue" }}>Expert Teachers</Heading>
        <p style={{ color: "blue" }}>
          Our set he for firmament morning sixth subdue today the darkness
          creeping gathered <br /> divide our let god moving today. Moving in
          fourth air night bring upon lesser subdue.
        </p>
      </Box>
      <Box
        display={"flex"}
        flexWrap={"wrap"}
        mt={"10"}
        justifyContent={"space-evenly"}
        padding={"10px"}>
        {data.map((e) => (
          <TeacherCard key={e.id} {...e} />
        ))}
      </Box>
    </Box>
  );
};

export default Teacher;
