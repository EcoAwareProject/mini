import React, { useState } from 'react';

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // TODO: Implement API upload logic
      console.log('Uploading file:', selectedFile);
    } else {
      console.log('No file selected');
    }
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
