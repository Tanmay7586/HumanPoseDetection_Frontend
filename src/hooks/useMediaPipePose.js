import { useEffect, useRef, useState } from 'react';
import { Pose } from '@mediapipe/pose';
import { Camera } from '@mediapipe/camera_utils';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';

const useMediaPipePose = () => {
  const [loading, setLoading] = useState(true);
  const poseRef = useRef(null);
  const cameraRef = useRef(null);
  const canvasContextRef = useRef(null);
  const canvasElementRef = useRef(null);

  const clearCanvas = () => {
    if (canvasContextRef.current && canvasElementRef.current) {
      canvasContextRef.current.clearRect(
        0, 
        0, 
        canvasElementRef.current.width, 
        canvasElementRef.current.height
      );
    }
  };

  const onResults = (results, canvasCtx, canvasElement) => {
    if (!results.poseLandmarks) return;

    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    
    // Remove the mirror effect transformations
    // This is the key change - we're not flipping the canvas anymore
    
    if (results.poseLandmarks) {
      // Draw the connecting lines (skeleton)
      drawConnectors(canvasCtx, results.poseLandmarks, Pose.POSE_CONNECTIONS, {
        color: 'rgb(255, 255, 255)',
        lineWidth: 4
      });
      
      // Draw landmark points
      drawLandmarks(canvasCtx, results.poseLandmarks, {
        color: 'rgb(0, 255, 0)',
        lineWidth: 2,
        radius: 4,
        visibilityMin: 0.65
      });
      
      // Draw more prominent lines for specific body parts
      // Upper body
      drawConnectors(canvasCtx, results.poseLandmarks, [[11, 12]], {
        color: 'rgb(255, 255, 255)',
        lineWidth: 6
      });
      
      // Arms
      drawConnectors(canvasCtx, results.poseLandmarks, [
        [11, 13], [13, 15], // Left arm
        [12, 14], [14, 16]  // Right arm
      ], {
        color: 'rgb(255, 255, 255)',
        lineWidth: 5
      });
      
      // Torso
      drawConnectors(canvasCtx, results.poseLandmarks, [
        [11, 23], [12, 24], // Shoulders to hips
        [23, 24]           // Hip line
      ], {
        color: 'rgb(255, 255, 255)',
        lineWidth: 5
      });
      
      // Legs
      drawConnectors(canvasCtx, results.poseLandmarks, [
        [23, 25], [25, 27], [27, 29], [29, 31], // Left leg
        [24, 26], [26, 28], [28, 30], [30, 32]  // Right leg
      ], {
        color: 'rgb(255, 255, 255)',
        lineWidth: 5
      });
    }

    canvasCtx.restore();
  };

  const initializePose = async (videoElement, canvasElement) => {
    try {
      const pose = new Pose({
        locateFile: (file) => {
          return `https://cdn.jsdelivr.net/npm/@mediapipe/pose/${file}`;
        }
      });

      pose.setOptions({
        modelComplexity: 1,
        smoothLandmarks: true,
        enableSegmentation: false,
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5,
        selfieMode: true  // Set this to true to fix the mirroring
      });

      if (!canvasElement || !videoElement) return;
      
      const canvasCtx = canvasElement.getContext('2d');
      canvasContextRef.current = canvasCtx;
      canvasElementRef.current = canvasElement;

      pose.onResults((results) => {
        onResults(results, canvasCtx, canvasElement);
      });

      const camera = new Camera(videoElement, {
        onFrame: async () => {
          if (pose) {
            await pose.send({ image: videoElement });
          }
        },
        width: 640,
        height: 480
      });

      poseRef.current = pose;
      cameraRef.current = camera;

      await camera.start();
      setLoading(false);
    } catch (error) {
      console.error('Error initializing pose:', error);
      setLoading(false);
    }
  };

  const stopPose = () => {
    if (cameraRef.current) {
      cameraRef.current.stop();
    }
    if (poseRef.current) {
      poseRef.current.close();
    }
    clearCanvas();
  };

  return {
    loading,
    initializePose,
    stopPose,
    clearCanvas
  };
};

export default useMediaPipePose;