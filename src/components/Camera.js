import React, { useRef } from 'react';

const Camera = () => {
  const videoRef = useRef(null);

  const openCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.log('Error accessing camera:', error);
    }
  };

  return (
    <div>
      <h1>Camera Page</h1>
      <button onClick={openCamera}>Open Camera</button>
      <video ref={videoRef} autoPlay playsInline style={{ width: '100%', maxWidth: '500px' }} />
    </div>
  );
};

export default Camera;
