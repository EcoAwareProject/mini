import React, { useRef, useEffect } from 'react';
import './Style.css';

const Camera = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const constraints = { video: { facingMode: 'environment' } };

    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    startCamera();

    // Cleanup function to stop the camera when the component unmounts
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();

        tracks.forEach((track) => {
          track.stop();
        });
      }
    };
  }, []);

  return (
    <div className="camera-page">
      <h2>Camera Page</h2>
      <div className="video-container">
        <video ref={videoRef} autoPlay playsInline className="video" />
      </div>
    </div>
  );
};

export default Camera;
