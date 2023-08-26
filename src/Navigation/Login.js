import React from 'react'
import { useState } from 'react';
export default function Login() {

    const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleOnSubmit=(e)=>{
    e.preventDefault()
  }
  return (
    <div>
        <h1 className="">Database</h1>
        <br />
        <form action="">
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" onClick={handleOnSubmit}>
            submit
          </button>
          <div>
           
            <input style={{zIndex:1}} type="date" />
          </div>
        </form>
      </div>
   
  )
}
