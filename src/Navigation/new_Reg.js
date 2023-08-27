import React from "react";
import { useState,useEffect } from "react";
import {db} from "./fire";
import {collection,addDoc,Timestamp,query, orderBy, onSnapshot, where, getDocs,get} from "https://cdnjs.cloudflare.com/ajax/libs/firebase/10.3.0/firebase-firestore.min.js";
const firebase = require("https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js")
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

  //       const collectionRef = firebase.collection('users');
  //       const querySnapshot = await collectionRef.where('anum', '==', formData.aadharNumber).get();
  
  //       if (!querySnapshot.empty) {
  //         // Data already exists, show alert
  //         alert('Data already exists in the collection.');
  //       } else {
  //         // Data doesn't exist, do something else
  //         console.log('Data does not exist in the collection.');
  //       }
     
  //       // console.error('Error checking data:', error);
      


      await addDoc(collection(db, "users"), {
        name: formData.name,
        age: formData.age,
        dob: formData.dob,
        email: formData.email,
        aadharNumber: formData.aadharNumber,
        created: Timestamp.now(),
      })
      alert("Data Entered Successfully")
    } catch (err) {
      alert(err);
    }

//   const citiesRef = db.collection('cities');
// const snapshot = await citiesRef.get();
// snapshot.forEach(doc => {
//   console.log(doc.id, '=>', doc.data());
// });

  // const q = query(collection(db, 'users'),where ("anum", "==", formData.aadharNumber))
    // const querySnapshot =  getDocs(q);
    // console.log(q);
  //   querySnapshot.forEach((doc) => {
  //    console.log(doc);
  // });
  };
  
    


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
