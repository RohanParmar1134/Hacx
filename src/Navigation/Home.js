import React from 'react'
import "./Home.css";
export default function Home() {
  return (
    <div className='cards'>
        <div className='card '>
            <p className='tip'>About Centralz</p>
            <p className='second-text'>A Centralised Database for Storage to store the History of the patients and when ever patients go to the doctor, the doctor can access the database using the patients aadhar or the unique id given to the user when he or she registers for first time.</p>
        </div>
        
        <div className='card  '>
            <p className='tip'>How it helps</p>
            <p className='second-text'>Well. This is a very easy to use app for the Doctors as they simply have to register like the facebook or instagrame and search like one do on Youtube to get all the Past disease history. When the user give the aadhar or unique key to the Doctor. So that the doctor can get better understanding of the patient and treat him accordingly. This might seem like a small thing but it can save many people's lives someday!</p>
        </div>

        <div className='card  '>
            <p className='tip'>Audience</p>
            <p className='second-text'>Our main target are Doctor, Clinics and Hospitals who are willing to do better treatment.</p>
        </div>
    </div>
  )
}
