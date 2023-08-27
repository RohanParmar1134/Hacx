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
const [date,setDate] = useState("")
const [formData, setFormData] = useState({
  
  aadharNumber: '',
  prescription: '',
  description: '',
  date:""
});
const regex = "^[0-9]";
const handleInputChange = (event) => {
  const { name, value } = event.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
};


const handleSubmit =async(e)=>{
  e.preventDefault();
    console.log("upload");
    if (formData.aadharNumber.length===12 && regex.test(formData.aadharNumber)){
    
    }
    else{
      alert("invalid aadharcard number")
    }
    if (!pdf) return;
    console.log("u-----");

    const storageRef = ref(storage, `files/${formData.aadharNumber+formData.date+pdf.name}`);
    const uploadTask = uploadBytesResumable(storageRef, pdf);

    uploadTask.on("state_changed",
      async(snapshot) => {
        const progress =
          Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgresspercent(progress);
        try{

          await addDoc(collection(db, "users"), {
            date: formData.age,
            description: formData.dob,
            prescription: formData.email,
            aadharNumber: formData.aadharNumber,
            created: Timestamp.now(),
            
          })
          alert("Data Entered Successfully")
        }catch(e){
          alert(e)
        }
      },
      (error) => {
        alert(error);
      },
    )};

  return (
    <>

     
      <div>
        <h1 className="text-center Title">Add Patient Data</h1>
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
            <input  type="date" onChange={(e)=>{setDate(e.target.value)}}/>
          </div>
          {/* <h1>{progresspercent}</h1> */}
          <div>
          <input type="file" style={{"display":"inline"}} onChange={(e)=>{setPdf(e.target.files[0])}}/>
          <button type="submit" onClick={handleSubmit}>
            submit
          </button>
          </div>
         

        </form>
      </div>
    </>
  );
}
export default FileUpload;
