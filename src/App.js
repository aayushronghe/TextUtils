import React,{ useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [mode,setMode]=useState('light');
  const [buttonText,setButtonText]=useState('Light');
  const [alert,setAlert]=useState(null);

  function showAlert(message,type)
  {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
  }

  function changeTheme(color)
  {
    if(color==='Dark')
      {
        setMode('dark')
        setButtonText("Dark")
        document.body.style.backgroundColor='black'
        showAlert("Dark mode has been enabled","success")
        
      }
      else if(color==="Blue")
      {
        setMode('info')
        setButtonText("Blue")
        document.body.style.backgroundColor='#42a3bd';
        showAlert("Blue mode has been enabled","success")
       
      }
      else if(color==="Green")
      {
        setMode('success')
        setButtonText("Green")
        document.body.style.backgroundColor='Green';
        showAlert("Green mode has been enabled","success")
        
      }
      else
      {
        setMode('light')
        setButtonText("Light")
        document.body.style.backgroundColor='white';
        showAlert("Light mode has been enabled","success")
        
      }
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" aboutText="About" mode={mode} changeTheme={changeTheme} buttonText={buttonText}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, " mode={mode} showAlert={showAlert}/>} />
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
