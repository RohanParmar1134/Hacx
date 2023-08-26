import React from 'react'
import { useState } from 'react';
import "./View.css"
export default function View() {

    const [name, setName] = useState("");
  

  const handleOnSubmit=(e)=>{
    const regex = "^[0-9]";
    if(name.length===12 && regex.test(name))
    {
    e.preventDefault()
    }
    else
    {
        alert("enter valid aadhar number")
    }
  }
  return (
    <div>
        <h1 className="Title">Patient Details</h1>
        <br />
        <form action="">
          <input
            className='aadhar'
            type="text"
            placeholder="Aadhar Card Number"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
         
          <button type="submit"  align="center" onClick={handleOnSubmit}>
            submit
          </button>
        
        </form>
      </div>
   
  )
}
