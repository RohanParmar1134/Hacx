import { useState } from "react";
import axios from "axios";
// import "./Database.css";
// import Spline from "@splinetool/react-spline";
// const canvas = document.getElementById('canvas3d');
// const app = new Application(canvas);
// app.load('https://prod.spline.design/hhL6pMJZDKnM7rjh/scene.splinecode');
import {db} from './fire'
// import firebase from "../../node_modules/firebase/firebase-app";
// import { getAnalytics } from "../../node_modules/firebase/analytics";
import {collection, addDoc, Timestamp} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js"

function Login() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleOnSubmit = async (e)=>{
    e.preventDefault();
    try {
      await addDoc(collection(db, 'coll'), {
        name: name,
        email:email,
        created: Timestamp.now()
      })
    //  const onClose=()=>{}
    } catch (err) {
      alert(err)
    }
  }
  

  // const handleOnSubmit = async (e) => {
  //   e.preventDefault();
  //   let result = await axios.post(
  //     "http://localhost:8000/register",
  //     JSON.stringify({ name, email }),
  //     {
  //       headers: { "Content-Type": "application/json" },
  //     }
  //   );

  //   console.log(result);
  //   try {
  //     if (result.data.alert == 1) {
  //       if (result.data.email != "") {
  //         alert("Email already exists");
  //       } else {
  //         alert("User already register");
  //       }
  //     } else {
  //       alert("Data saved succesfully");
  //       setEmail("");
  //       setName("");
  //     }
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  return (
    <>
      {/* <iframe src='https://my.spline.design/noisedisplacecopy-effbdbd06e5871ecd6653f365b62c17d/' frameborder='0' width='100%' height='100%'></iframe> */}
      <div>
        <h1 className="text-center">Database</h1>
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
          <input type="file"></input>
          <button type="submit" onClick={handleOnSubmit}>
            submit
          </button>
          <div>
            {/* <Spline scene="https://prod.spline.design/hhL6pMJZDKnM7rjh/scene.splinecode" /> */}
            {/* <Spline scene="https://prod.spline.design/zJ1Yav9dn06NEslU/scene.splinecode" /> */}
            {/* bjbkjbkjfjbkj */}
            <input style={{zIndex:1}} type="date" />
          </div>
          {/* <button type="submit" onClick={delete_data}>submit</button> */}
        </form>
      </div>
    </>
  );
}
export default Login;
