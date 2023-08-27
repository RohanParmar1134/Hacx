import { useState } from "react";
import axios from "axios";
import { storage } from './fire';
import { ref, getDownloadURL, uploadBytesResumable } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";
import {db} from './fire'
import {collection, addDoc, Timestamp} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js"
import "./pdf_viewer.css"
import Viewer from "./viewer";
function PDFViewer() {


  return (
    

     
      <div className="div">
        <Viewer/>
      </div>
    
  );
}
export default PDFViewer;
