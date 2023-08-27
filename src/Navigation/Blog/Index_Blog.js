import React, { useState } from 'react'
import "./Index_Blog.css"
import {db} from "../fire";
import {collection,addDoc,Timestamp,query, orderBy, onSnapshot, where, getDocs,get} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
// import axios from 'axios'
// const firebase = require("https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js")
export default function Index_Blog() {
  const [blog, setBlog] = useState()
  const [title, setTitle] = useState()
  const [tasks, setTasks] = useState()
  const Add_todb = async (e) => {
    //Insert the title and blog to db
    e.preventDefault();
    try{
      await addDoc(collection(db, "community"), {
        title:title,
        blog:blog,
        created: Timestamp.now(),
      })
      alert("Data Entered Successfully")
    
  }catch(e){
    alert(e)
  }
  const q = query(collection(db, 'users'), orderBy('created', 'desc'))
  onSnapshot(q, (querySnapshot) => {
    setTasks(querySnapshot.docs.map(doc => ({
      id: doc.id,
      data: doc.data()
    })))
  })
  // console.log();
  
  }
  return (
    <div>
      <form>
        <h1 className='Header'>Add BLog</h1>
        <input type='text' name='title' placeholder='Enter Title' onChange={e => setBlog(e.target.value)} />
        <textarea name='des' placeholder='Enter Content' onChange={e => setTitle(e.target.value)}>

        </textarea>
        <button onClick={Add_todb}>Add</button>
      </form>
      {/* <All_Blog/> */}
    </div>

  )
}