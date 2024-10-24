import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Button,
  VStack,
  HStack,
  List,
  ListItem,
  ListIcon,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import { CheckCircleIcon, ArrowBackIcon } from "@chakra-ui/icons";

const DetailedGymPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { title, imageSrc, description, advantages, howToPerform } =
    location.state;

  const howToPerformSteps = howToPerform
    .trim()
    .split("\n")
    .filter((step) => step);

  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.600", "gray.200");

  const handleStartExercise = () => {
    navigate("/gym-camera", {
      state: { title, imageSrc, description },
    });
  };

  return (
    <Box bg={bgColor} minHeight="100vh" py={8}>
      <Container maxW="6xl">
        <Button
          leftIcon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          mb={8}
          colorScheme="blue"
          variant="outline"
        >
          Back to Exercises
        </Button>
        <Flex direction={{ base: "column", lg: "row" }} gap={8} align="start">
          <Box flex={1} borderRadius="lg" overflow="hidden" boxShadow="xl">
            <Image
              src={imageSrc}
              alt={title}
              objectFit="cover"
              w="100%"
              h={{ base: "300px", md: "400px" }}
            />
          </Box>
          <VStack align="start" flex={1} spacing={6}>
            <Heading as="h1" size="lg" color="blue.600">
              {title}
            </Heading>
            <Text fontSize="lg" color={textColor}>
              {description}
            </Text>
            <Box w="100%">
              <Heading as="h2" size="md" mb={2} color="blue.500">
                Advantages
              </Heading>
              <List spacing={3}>
                {advantages.map((advantage, index) => (
                  <ListItem key={index}>
                    <HStack>
                      <ListIcon as={CheckCircleIcon} color="green.500" />
                      <Text color={textColor}>{advantage}</Text>
                    </HStack>
                  </ListItem>
                ))}
              </List>
            </Box>
            <Box w="100%">
              <Heading as="h2" size="md" mb={4} color="blue.500">
                How to Perform
              </Heading>
              <List spacing={3}>
                {howToPerformSteps.map((step, index) => (
                  <ListItem key={index}>
                    <HStack>
                      <Text as="span" fontWeight="bold" color="blue.500">
                        {index + 1}.
                      </Text>
                      <Text color={textColor}>{step}</Text>
                    </HStack>
                  </ListItem>
                ))}
              </List>
            </Box>
          </VStack>
        </Flex>
        <Button
          mt={4}
          size="lg"
          colorScheme="blue"
          onClick={handleStartExercise}
        >
          Start Exercise
        </Button>
      </Container>
    </Box>
  );
};

export default DetailedGymPage;
