import React from 'react'
import { useState } from 'react';
import ChattyApp from './ai';
import ChatGPTIntegration from './ai';
import ChatbotApp from './ai';
import PDFViewer from './pdf_viewer';
// import test from "re"
import "./View.css"
import Viewer from './viewer';
export default function View() {

    const [name, setName] = useState("");
  

  const handleOnSubmit=(e)=>{
    const regex = "^[0-9]";
    if(name.length===12 && regex.test(name))
    {
    e.preventDefault()
    // return (
    //   <Viewer/>
    // )
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
            value="xxxx xxxx xxxx 1234"
            onChange={(e) => setName(e.target.value)}
          />
         
          <button type="submit"  align="center" onClick={handleOnSubmit}>
            submit
          </button>
        <PDFViewer/>
        {/* <ChatbotApp/> */}
        {/* <ChattyApp/> */}
        {/* <ChatGPTIntegration/> */}
        </form>
      </div>
   
  )
}
