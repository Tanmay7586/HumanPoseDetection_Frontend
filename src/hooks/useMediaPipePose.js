import { useEffect, useRef, useState } from 'react';
import { Pose } from '@mediapipe/pose';
import { Camera } from '@mediapipe/camera_utils';
import { drawConnectors, drawLandmarks } from '@mediapipe/drawing_utils';

const useMediaPipePose = () => {
  const [loading, setLoading] = useState(true);
  const poseRef = useRef(null);
  const cameraRef = useRef(null);

  const onResults = (results, canvasCtx, canvasElement) => {
    if (!results.poseLandmarks) return;

    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);

    // Only draw the pose if landmarks are detected
    if (results.poseLandmarks) {
      // Draw pose landmarks
      drawConnectors(canvasCtx, results.poseLandmarks, Pose.POSE_CONNECTIONS, {
        color: '#00FF00',
        lineWidth: 4
      });
      drawLandmarks(canvasCtx, results.poseLandmarks, {
        color: '#FF0000',
        lineWidth: 2,
        radius: 4
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
        minDetectionConfidence: 0.5,
        minTrackingConfidence: 0.5,
        selfieMode: true // Mirror the video
      });

      if (!canvasElement || !videoElement) return;
      
      const canvasCtx = canvasElement.getContext('2d');

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
  };

  return {
    loading,
    initializePose,
    stopPose
  };
};

export default useMediaPipePose;