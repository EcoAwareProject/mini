import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    let formData = new FormData();
    formData.append("file", selectedFile);

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

  console.log("Prediction:", prediction);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };


  return (
    <div className="upload-page">
      <h2>Upload Image</h2>
      <input type="file" onChange={handleFileChange} style={{color:'white'}} />
      <button onClick={handleUpload} className={`button ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>Upload</button>
      <h1>
        {prediction ? (
          <>
            <div>Plant Name: {prediction}</div>
            
          </>
        ) : (
          <div>No data available</div>
        )}
      </h1>
    </div>
  );
};

export default Upload;
