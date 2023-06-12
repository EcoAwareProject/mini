import React, { useRef, useState, useEffect } from 'react';

const Camera = () => {
  const videoRef = useRef(null);
  const [cameraMode, setCameraMode] = useState('user');

  const handleOpenCamera = async () => {
    try {
      const constraints = { video: { facingMode: cameraMode } };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      videoRef.current.srcObject = stream;
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const handleCameraFlip = () => {
    setCameraMode(prevMode => prevMode === 'user' ? 'environment' : 'user');
  };

  useEffect(() => {
    handleOpenCamera(); // Open the camera on component mount
    // Clean up the camera stream when component unmounts
    return () => {
      const stream = videoRef.current.srcObject;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <div className="camera-page">
      <h2>Camera Page</h2>
      <button onClick={handleCameraFlip}>Flip Camera</button>
      <div className="video-container">
        <video ref={videoRef} autoPlay playsInline />
      </div>
    </div>
  );
};

export default Camera;
