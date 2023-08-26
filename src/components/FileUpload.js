import { useState } from "react";
import axios from "axios";
import { storage } from './fire';
import { ref, getDownloadURL, uploadBytesResumable } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";
import {db} from './fire'
import {collection, addDoc, Timestamp} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js"

function FileUpload() {

  // const handleOnSubmit = async (e)=>{
  //   e.preventDefault();
  //   try {
  //     await addDoc(collection(db, 'coll'), {
  //       name: name,
  //       email:email,M
  //       created: Timestamp.now()
  //     })
  //   } catch (err) {
  //     alert(err)
  //   }
  // }
  

const [progresspercent, setProgresspercent] = useState(0);
const [pdf,setPdf] = useState("")

const handleSubmit =()=>{
    console.log("upload");
    if (!pdf) return;
    console.log("u-----");

    const storageRef = ref(storage, `files/${pdf.name}`);
    const uploadTask = uploadBytesResumable(storageRef, pdf);

    uploadTask.on("state_changed",
      (snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgresspercent(progress);
      },
      (error) => {
        alert(error);
      },
    )};

  return (
    <>
     
      <div>
        <h1 className="text-center">Database</h1>
        <br />
        <form action="">
          <input type="file" onChange={(e)=>{setPdf(e.target.files[0])}}></input>
          <button type="submit" onClick={handleSubmit()}>
            submit
          </button>
          <div>

            <input style={{zIndex:1}} type="date" />
          </div>
          <h1>{progresspercent}</h1>

        </form>
      </div>
    </>
  );
}
export default FileUpload;
