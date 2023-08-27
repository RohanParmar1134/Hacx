import React from 'react'
import { useState } from 'react';
import "./Login.css"
import {db} from "./fire";
import {collection,addDoc,Timestamp,query, orderBy, onSnapshot, where, getDocs} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
const firebase = require("https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js")
export default function Login() {

    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [LicNum, setLicNum] = useState("");
  const [pass, setPass] = useState("");

  const handleOnSubmit=async(e)=>{
    e.preventDefault()
    const reg1=/^[A-Z]{2}\d{6}$/ // doc lic
  const reg2=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  
  const reg3=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
     if (reg1.test(LicNum)){
     if(reg2.test(email)){
       if(reg3.test(pass)){
        e.preventDefault();
        try{
          await addDoc(collection(db, "doctors"), {
            name: name,
            licnum:LicNum,
            email: email,
            pass:pass,
            created: Timestamp.now(),
          })
          alert("Data Entered Successfully")
        
      }catch(e){
        alert(e)
      }
      }
       else{
        alert("password must be strong")
       }
      
     }
     else{
      alert("invalid email")
     }

   
   
   }
   else{
    alert("invalid License Number")

    }
  }
  return (
    <div>
        <h1 className="Title">Doctor Login</h1>
        <br />
        <form action="">
          <input
            type="text"
            name="name"

            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="text"
            name="Licenceid"

            placeholder='Licence Id'
            value={LicNum}
            onChange={(e)=> setLicNum(e.target.value)}
            />
            <input
              type="password"
              name='password'
              placeholder='Password'
              value={pass}
              onChange={(e)=>setPass(e.target.value)}
            />

          <button type="submit" onClick={handleOnSubmit}>
            submit
          </button>
          <div>
           
           
          </div>
        </form>
      </div>
   
  )
  }

