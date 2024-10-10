import React, { useState } from "react";
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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const YogaCard = ({
  id,
  imageSrc,
  gifSrc,
  title,
  description,
  advantages,
  howToPerform,
}) => {

  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={imageSrc}
          alt={title}
          borderRadius="lg"
          transition="0.3s ease-in-out"
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
            <Link
              to={`/try-yoga/${id}`}
              state={{
                id,
                title,
                imageSrc,
                gifSrc,
                description,
                advantages,
                howToPerform,
              }}
            >
              Try Yoga
            </Link>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default YogaCard;
