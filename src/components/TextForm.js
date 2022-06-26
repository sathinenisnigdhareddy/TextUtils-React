import React from 'react';
import  { useState } from "react";
export default function TextForm(props) {
  
  
    const handleUpClick=()=>{
        console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase","success");
    }
    const handleOnChange=(event)=>{
        console.log("On change");
        setText(event.target.value);
       
    }
    const handleClearText=()=>{
        setText("");
        props.showAlert("Cleared text","success");
    }
 const [text, setText] = useState('Enter Text Here');

  return (
   
 <>
  <div className="container" style={{color: props.mode==='light'?'grey':'white'}}>
    <h1>{props.heading}</h1>
  <div className="form-group">

    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':props.textcolor, color:props.mode==='light'?'grey':'white'}} id="exampleFormControlTextarea1" rows="8"></textarea>
  </div>
  <button className="btn btn-primary" style={{backgroundColor: props.mode==='light'?'white':props.buttoncolor, color:props.mode==='light'?'grey':'white'}}  onClick={handleUpClick}>Convert to Uppercase</button>
  <button className="btn btn-primary" style={{backgroundColor: props.mode==='light'?'white':props.buttoncolor, color:props.mode==='light'?'grey':'white'}} onClick={handleClearText}>Clear Text</button>
  </div>
  <div className="container my-2" style={{color: props.mode==='light'?'grey':'white'}}>
    <h1 style={{color: props.mode==='light'?'grey':'white'}}>your text summary</h1>
    
   
    <p>{text.trim().length}</p>
    
    <p>{text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} words</p>
    <h1 style={{color: props.mode==='light'?'grey':'white'}}>preview</h1>
    {text}
  </div>

  </> 
  );
}
