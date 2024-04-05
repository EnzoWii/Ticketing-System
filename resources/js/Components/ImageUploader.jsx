// ImageUploader.js
import React, { useState, useRef } from 'react';

const ImageUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const imageInputRef = useRef(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    // Handle file upload logic here (e.g., using FormData and sending a POST request to the server)
  };

  return (
    <div className="border border-gray-300 rounded-lg p-4">
      <input ref={imageInputRef} type="file" onChange={handleFileChange} />
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md">Upload</button>
    </div>
  );
};

export default ImageUploader;
