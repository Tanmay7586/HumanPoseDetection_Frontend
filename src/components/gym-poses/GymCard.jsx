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
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const GymCard = ({
  id,
  imageSrc,
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
              to={`/try-gym/${id}`} // Update the route as per your routing setup
              state={{
                id,
                title,
                imageSrc,
                description,
                advantages,
                howToPerform,
              }}
            >
              Try Exercise
            </Link>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default GymCard;
