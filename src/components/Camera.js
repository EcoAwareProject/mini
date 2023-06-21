import React, { useRef, useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
const Camera = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [prediction, setPrediction] = useState(null);
  useEffect(() => {
    let stream;

    const constraints = { video: { facingMode: 'environment' } };

    const startCamera = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia(constraints);
        videoRef.current.srcObject = stream;
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    startCamera();

    // Cleanup function to stop the camera when the component unmounts or when the user leaves the page
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const videoTracks = videoRef.current.srcObject.getVideoTracks();

        videoTracks.forEach((track) => {
          track.stop();
        });

        if (stream) {
          stream.getTracks().forEach((track) => {
            track.stop();
          });
        }
      }
    };
  }, []);

  const handleCapture = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Draw the current video frame on the canvas
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Get the image data from the canvas as a base64-encoded string
    const imageData = canvas.toDataURL('image/jpeg');
    
    // Send the captured image to your API or further process it as needed
    sendImageToAPI(imageData);
  };

  const sendImageToAPI = (imageData) => {
    let formData = new FormData();
    formData.append("file", imageData);

    axios.post('https://ecoaware-ml.onrender.com/api/predict', formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })
      .then(response => {
        console.log(response.data);
        setPrediction(response.data.Prediction);
        
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="camera-page">
      <h2>Camera Page</h2>
      <div className="video-container">
        <video ref={videoRef} autoPlay playsInline className="video" />
      </div>
      <button onClick={handleCapture}>Capture</button>
      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>
    </div>
  );
};

export default Camera;
