import React, { useState } from 'react';
import './upload.css'; // You can create a separate CSS file for styling
const methodOverride = require('method-override')
const multer = require("multer")
// const gdfs = require("multer-gridfs-storage")



const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    aadharNumber: '',
    prescription: '',
    description: '',
    uploadedFile: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      uploadedFile: file,
    }));
    // ... (previous code)


    if (formData.uploadedFile) {
      const dataToSend = new FormData();
      dataToSend.append('file', formData.uploadedFile);
      dataToSend.append('name', formData.name);
      dataToSend.append('age', formData.age);
      dataToSend.append('aadhar', formData.aadhar);
      dataToSend.append('prescription', formData.prescription);
      dataToSend.append('description', formData.description);
  
      // Use fetch or Axios to make the API call
      fetch('http://localhost:3001/upload', {
        method: 'POST',
        body: dataToSend
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          // Perform any additional actions on successful upload
        })
        .catch(error => {
          console.error('Error uploading file:', error);
        });
    }
  };
 
 
  
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform further actions with the form data here
    console.log(formData);
  };

  return (
    <div className="form-container">
      <form className="form"  action="/multer.js"onSubmit={handleSubmit}>
        <h2>Patient Upload</h2>
        <div className="input-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group">
          <label>Age</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group">
          <label>Aadhar Card Number</label>
          <input
            type="text"
            name="aadharNumber"
            value={formData.aadharNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="input-group">
          <label>Prescription</label>
          <textarea
            name="prescription"
            value={formData.prescription}
            onChange={handleInputChange}
            rows="4"
          />
        </div>
        <div className="input-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="4"
          />
        </div>
        <div className='upload'>
        <label class="custom-file-upload">
    
    <input   type="file" accept='.pdf,.png,.jpg,.jpeg' onChange={handleFileUpload} required/>
    Upload
</label>
</div>


        <button type="submit">Submit</button>
      </form>
    </div>
  );
  }

export default Form;

