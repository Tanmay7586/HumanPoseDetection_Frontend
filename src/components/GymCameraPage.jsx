import React, { useEffect, useRef } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Container,
  useColorModeValue,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import useMediaPipePose from "../hooks/useMediaPipePose"; // Assuming you're using the same hook

const GymCameraPage = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const location = useLocation();
  const { title, imageSrc, description } = location.state || {}; // Use imageSrc if needed
  const bgColor = useColorModeValue("gray.50", "gray.800");

  const { loading, initializePose, stopPose } = useMediaPipePose();

  useEffect(() => {
    if (videoRef.current && canvasRef.current) {
      initializePose(videoRef.current, canvasRef.current);
    }

    return () => {
      stopPose();
    };
  }, [initializePose]);

  const handleStopPose = () => {
    stopPose();
  };

  return (
    <Box bg={bgColor} minHeight="100vh" py={8}>
      <Container maxW="6xl">
        <VStack spacing={6} align="start">
          <Heading as="h1" size="lg" color="blue.600">
            Performing: {title || "Unknown Exercise"}
          </Heading>

          <Text fontSize="lg" color="gray.600">
            {description || "No description available."}
          </Text>

          {loading && (
            <Center w="100%">
              <VStack>
                <Spinner size="xl" color="blue.500" thickness="4px" />
                <Text mt={2}>Initializing pose detection...</Text>
              </VStack>
            </Center>
          )}

          <Box
            position="relative"
            width="100%"
            maxWidth="600px"
            margin="0 auto"
          >
            <video
              ref={videoRef}
              style={{
                borderRadius: "10px",
                width: "100%",
                maxWidth: "600px",
                height: "480px",
                objectFit: "cover",
                transform: "scaleX(-1)", // Mirror the video feed
              }}
            />
            <canvas
              ref={canvasRef}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "10px",
              }}
              width={640}
              height={480}
            />
          </Box>

          <Button
            mt={6}
            colorScheme="red"
            onClick={handleStopPose}
            isDisabled={loading}
            size="lg"
            width="full"
            maxW="200px"
          >
            Stop Exercise
          </Button>
        </VStack>
      </Container>
    </Box>
  );
};

export default GymCameraPage;
