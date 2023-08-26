import React from "react";
import { useState,useEffect } from "react";
import {db} from "../components/fire";
import {collection,addDoc,Timestamp,query, orderBy, onSnapshot} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
export default function New_Reg() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    aadharNumber: "",
    dob: "",
    email: "",
  });
  const [info,setInfo] = useState()
  const [tasks,setTasks] = useState([])
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "users"), {
        name: formData.name,
        age: formData.age,
        dob: formData.dob,
        email: formData.email,
        aadharNumber: formData.aadharNumber,
        created: Timestamp.now(),
      })
    } catch (err) {
      alert(err);
    }
  };
  useEffect(() => {
    const q = query(collection(db, 'users'))
    onSnapshot(q, (querySnapshot) => {
      setTasks(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  },[])


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="">
      <form className="" onSubmit={handleOnSubmit}>
        <h2>Add Information</h2>
        <div className="">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="">
          <label>Age</label>
          <input
            type="text"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="">
          <label>Aadhar Card Number</label>
          <input
            type="text"
            name="aadharNumber"
            value={formData.aadharNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="">
          <label>D.O.B</label>
          <input
            type="date"
            name="prescription"
            value={formData.prescription}
            onChange={handleInputChange}
            rows="4"
          />
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* {
         console.log(tasks)
      } */}
      
      {/* <button onClick={retrive}>Fetch</button> */}
    </div>
  );
}
