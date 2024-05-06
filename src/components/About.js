import React,{useState} from "react";

export default function About(props) {
  {document.title="TextUtils - About"}



    let myStyle=
    {
        color:(props.mode==="dark" || props.mode==="success") ? 'white' : 'black',
        backgroundColor:props.mode==='dark'?'black':props.mode==='success'?'green':props.mode==='info'?'#42a3bd':"white",
        border:'2px solid',
        borderColor:(props.mode==="dark" || props.mode==="success") ? 'white' : 'black'
    }


  return (
    <div className="container" style={{color:(props.mode==="dark" || props.mode==="success") ? 'white' : 'black'}}>
        <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Analyze your text
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show "
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count or character count.</strong> 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Free to use
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>TextUtils is a free character counter that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.</strong>
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Browser compatible
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>This word counter software works in any web browser such as Chrome, Firefox, Safari, etc. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.</strong> 
            </div>
          </div>
        </div>
      </div>  
    </div>
  );
}
