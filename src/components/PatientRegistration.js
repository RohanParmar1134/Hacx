import React, { useState } from 'react';
import './NeumorphismForm.css'; // You can create a separate CSS file for styling

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    aadharNumber: '',
    dob: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // You can perform further actions with the form data here
    console.log(formData);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Add Information</h2>
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
          <label>D.O.B</label>
          <input type="date"
            name="prescription"
            value={formData.prescription}
            onChange={handleInputChange}
            rows="4"
          />
        </div>
  
    
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;