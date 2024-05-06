import React,{useState} from 'react'

export default function TextForm(props) {

    const [inputText,setInputText]=useState("");

    function handleUpClick()
    {
        setInputText(inputText.toUpperCase())
        inputText.length>0?props.showAlert("Converted to Upper case","success"):props.showAlert("Please enter text","warning")
    }

    function handleDownClick()
    {
        setInputText(inputText.toLowerCase())
        inputText.length>0?props.showAlert("Converted to Lower case","success"):props.showAlert("Please enter text","warning")
    }

    function handleClearClick()
    {
        setInputText("")
        inputText.length>0?props.showAlert("Text cleared","success"):props.showAlert("No text available","warning")
    }

    function handleOnChange(event)
    {
        setInputText(event.target.value)
    }

    return (
        <>
        <div className='container'>
            <div className="mb-3">
                <h1 style={props.mode==='dark'?{color:'white'}:{color:'black'}}>{props.heading}</h1>
                <textarea className="form-control" id="myBox" rows="8" value={inputText} onChange={handleOnChange} style={props.mode==='dark'?{backgroundColor:'black',color:'white'}:{backgroundColor:'white',color:'black'}}></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Upper Case</button>
            <button className="btn btn-primary mx-2" onClick={handleDownClick}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        </div>

        <div className="container my-2" style={props.mode==='dark'?{color:'white'}:{color:'black'}}>
            <h2>Your text summary</h2>
            <p><b>{inputText.trim().split(" ").length}</b> words and <b>{inputText.length}</b> characters</p>
            <p>{0.008 * inputText.trim().split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{inputText.length>0?inputText:"Enter something in textbox above to preview it"}</p>
        </div>
        </>
    )
}
