import React, { useState,useEffect } from 'react';
import axios from 'axios'

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };
  var [result,setresult] = useState({})
  const handleUpload = () => {
    let formData = new FormData();
   formData.append("file", selectedFile);
  console.log(selectedFile)
   axios.post('https://ecoaware-ml.onrender.com/api/predict', formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    }
  }).then(function (response) {
    console.log(response.data);
  });

// const { data } =  axios.post('https://ecoaware-ml.onrender.com/api/predict');
  };

  return (
    <div className="upload-page">
      <h2>Upload Image</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Upload;
