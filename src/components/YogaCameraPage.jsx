import React, { useEffect, useRef } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom"; // Import useLocation from react-router-dom

const YogaCameraPage = () => {
  const videoRef = useRef(null);
  const location = useLocation(); // Get location from useLocation hook
  const { title, gifSrc, description } = location.state || {}; // Use optional chaining to avoid errors

  const bgColor = useColorModeValue("gray.50", "gray.800");

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Error accessing the camera:", error);
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  useEffect(() => {
    startCamera();
    return () => stopCamera(); // Clean up the camera on unmount
  }, []);

  return (
    <Box bg={bgColor} minHeight="100vh" py={8}>
      <Container maxW="6xl">
        <VStack spacing={6} align="start">
          <Heading as="h1" size="lg" color="blue.600">
            Performing: {title || "Unknown Pose"} {/* Handle undefined title */}
          </Heading>
          <Text fontSize="lg" color="gray.600">
            {description || "No description available."} {/* Handle undefined description */}
          </Text>
          <Box display="flex" justifyContent="center" mt={4}>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              style={{ borderRadius: '10px', width: '100%', maxWidth: '600px' }}
            />
          </Box>
        </VStack>
        <Button
          mt={6}
          colorScheme="red"
          onClick={stopCamera} // Stop camera when button is clicked
        >
          Stop Pose
        </Button>
      </Container>
    </Box>
  );
};

export default YogaCameraPage;