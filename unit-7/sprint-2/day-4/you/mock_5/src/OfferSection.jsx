import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import Carding from "./Card";

const OfferSection = () => {
  const data = [
    {
      id: "1",
      title: "Card 1",
      description: "Description for Card 1",
      imageUrl:
        "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img2.png",
    },
    {
      id: "2",
      title: "Card 2",
      description: "Description for Card 2",
      imageUrl:
        "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img1.png",
    },
    {
      id: "3",
      title: "Card 3",
      description: "Description for Card 3",
      imageUrl:
        "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img2.png",
    },
    // Add more card objects as needed
  ];
  return (
    <Box>
      <Box style={{ textAlign: "center" }} mt={"30"}>
        <Heading style={{ color: "blue" }}>Classes We Offer</Heading>
        <p style={{ color: "blue" }}>
          Monetize your content by charging your most loyal readers <br /> and
          reward them loyalty points. Give back to your loyal <br /> readers by
          granting them access to your pre-releases and sneak-peaks.
        </p>
      </Box>
      <Box display={"flex"} flexWrap={"wrap"} mt={"10"} justifyContent={"space-evenly"} padding={"10px"} >
        {data.map((el) => (
          <Carding key={el.id} {...el} />
        ))}
      </Box>
    </Box>
  );
};

export default OfferSection;
