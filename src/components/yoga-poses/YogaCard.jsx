import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Heading,
  Stack,
  Divider,
  ButtonGroup,
  Button,
  Text,
  Image,
  Box
} from "@chakra-ui/react";

const YogaCard = ({ imageSrc, title, description, price }) => {
  return (
//     <Box
//     _hover={{ transform: "scale(1.05)", boxShadow: "lg" }} // Scale and shadow effect on hover
//     transition="all 0.2s"
//   >
    <Card maxW="sm">
      <CardBody>
        <Image
          src={imageSrc}
          alt={title}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{title}</Heading>
          <Text>{description}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            See more
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
    // </Box>
  );
};

export default YogaCard;
