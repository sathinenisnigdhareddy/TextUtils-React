
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import  { useState } from "react";
import Alert from './components/Alert';


// import {
 
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  const [mode, setmode] = useState('light');
  const [textcolor, setTextcolor] = useState('white');
  const [buttoncolor, setbuttoncolor] = useState('white');
  console.log("present=",textcolor);
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert ({
      msg:message,
      type:type
    })

    setTimeout(()=>{
      setAlert(null);
    },1000)
    

  }
  const toggleMode=()=>{
   
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='grey';
      showAlert("Dark mode has been set","success");
      setTextcolor('grey');
    }
    else{
      setmode('light')
      setbuttoncolor('black')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been set","success");
    }
    
  }
  const greenMode=()=>{
    console.log("hello i am green.........");
    if(mode==='light'){
      setmode('dark')
      document.body.style.backgroundColor='#20c997';
      showAlert("Green mode has been set","success");
      setTextcolor('#20c997');
      setbuttoncolor('green')
      console.log('color=',textcolor,"mode=",mode);
    }
    else{
      setmode('light')
      setbuttoncolor('white')
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been set","success");
    }
    
  }


  


return (
  <>
  {/*<Router>*/}
<Navbar title="TextUtils2" mode={mode} textcolor={textcolor} toggleMode={toggleMode}  greenMode={greenMode}  />
<Alert alert={alert}/>
<div className="container">
{/* {<Switch>} */}
{/* <Route exact path="/"> */}
          <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} textcolor={textcolor} buttoncolor={buttoncolor}/>
          {/* </Route> */}
          {/* <Route  exact path="/about">
            <About />
          </Route> */}
        
    
{/* {</Switch>} */}
     
        
      



{/*<About/>*/}
</div>
{/* </Router> */}
</>
);

    

}

export default App;

