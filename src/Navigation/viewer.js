import  React,{  Component } from 'react';
// import ReactDOM from 'react-dom';


function Viewer(){

    // constructor(props){
    //     super(props);
    // }

    var url = "https://firebasestorage.googleapis.com/v0/b/centralz-b7858.appspot.com/o/files%2FWM68.pdf?alt=media&token=eb78939e-3d90-4d98-8fa9-9b9f87177a2b";
    return(
            <iframe src={url} width="100%" height="90%" ></iframe>
        );
    }


export default Viewer;