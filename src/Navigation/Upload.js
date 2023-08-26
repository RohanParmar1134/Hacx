import { useState } from "react";
import { storage } from './fire';
import { ref, getDownloadURL, uploadBytesResumable } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";
import {db} from './fire'
import {collection, addDoc, Timestamp} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js"
import "./upload.css"
function FileUpload() {

  // const handleOnSubmit = async (e)=>{
  //   e.preventDefault();
  //   try {
  //     await addDoc(collection(db, 'coll'), {
  //       name: name,
  //       email:email,
  //       created: Timestamp.now()
  //     })
  //   } catch (err) {
  //     alert(err)
  //   }
  // }
  

const [progresspercent, setProgresspercent] = useState(0);
const [pdf,setPdf] = useState("")
const [formData, setFormData] = useState({
  
  aadharNumber: '',
  prescription: '',
  description: '',
});

const handleInputChange = (event) => {
  const { name, value } = event.target;
  // if (event.target.name==="aadharNumber"){
  //   const regex = "^[0-9]";
  //   if(name.length===12 && regex.test(name))
  //   {
  //   event.preventDefault()
  //   }
  //   else
  //   {
  //       alert("enter valid aadhar number")
  //   }
  // }
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};


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
        <h1 className="text-center Title">Database</h1>
        <br />
        <form action="">
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
          <label>Prescription</label>
          <textarea
            name="prescription"
            value={formData.prescription}
            onChange={handleInputChange}
            rows="4"
          />
        </div>
        <div className="input-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows="4"
          />
        </div>
          <div>
            <input style={{zIndex:1}} type="date" />
          </div>
          <h1>{progresspercent}</h1>
          <div>
          <input type="file" style={{"display":"inline"}} onChange={(e)=>{setPdf(e.target.files[0])}}/>
          <button type="submit" onClick={handleSubmit()}>
            submit
          </button>
          </div>
         

        </form>
      </div>
    </>
  );
}
export default FileUpload;
