import React,{ useState } from "react";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

function App() {

  const [mode,setMode]=useState('light');
  const [buttonText,setButtonText]=useState('Enable Dark Mode');
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

  function toggleMode()
  {
    if(mode==='light')
      {
        setMode('dark')
        setButtonText("Disable Dark Mode")
        document.body.style.backgroundColor='black'
        showAlert("Dark mode has been enabled","success")
      }
      else
      {
        setMode('light')
        setButtonText("Enable Dark Mode")
        document.body.style.backgroundColor='white'
        showAlert("Light mode has been enabled","success")
      }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} buttonText={buttonText}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <TextForm heading="Enter text to analyse below" mode={mode} showAlert={showAlert}/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
