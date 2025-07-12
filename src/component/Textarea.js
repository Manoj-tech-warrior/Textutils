import React,{useState} from 'react'

export default function TextForm(props) {
    const[text, setText] = useState("");

    const handleUpClick = () => {
        // console.log('uppercase  was clicked' + text);
        let newText = text.toUpperCase();
                setText(newText)
                props.showAlert("Converted to uppercase", "success");
    };

    const handleOnChange = (event) => {
        setText(event.target.value);
    };
    const handleLowClick = () => {
        let oneText = text.toLowerCase();
        props.showAlert("Converted to lowercase","success");    

        setText(oneText);
    };
    const handleClearClick = () => {
        setText("");
        props.showAlert("Text cleared successfully","success");
    };
    const [btntext,setBtnText] = useState("Copy");

    // document.getElementById("copybtn")
    const handleCopyClick = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Text:Copied", "success");
        // alert("copied");
        if (navigator.clipboard.writeText(text) === true) {
            setBtnText("Copied");
        }
        else {
            setBtnText("Copy");
        }
    };

    const handlePaste = () => {
        navigator.clipboard.readText().then(text => {
            setText((prevContent) => prevContent + text);
            props.showAlert("Text pasted successfully","success");
        })
       .catch(err => {
            console.error('Failed to read clipboard contents: ', err);
            props.showAlert("Failed to read clipboard contents","error");
        });
    
    }


return(
    <>
    <div className='container'>
        <h1 style={{color:props.mode==='dark'?'white':'black'}}>Enter Here:</h1>

<div className="mb-3">

  <textarea className="form-control" placeholder='Enter text here....' value={text} onChange={handleOnChange} id="myBox" style={{
      backgroundColor:props.mode==='dark'?'#445266':'white',
    //   hover:cursor-auto,
    color:props.mode==='dark'?'white':'black',
                         }} rows="8"></textarea>
</div>
<button value={text} style={{color:props.mode==='dark'?'white':'black'}} className='btn btn-primary mx-1 my-1' onClick={handlePaste}>Paste</button>
<button disabled={text.length===0}  style={{color:props.mode==='dark'?'white':'black'}} className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled={text.length===0} style={{color:props.mode==='dark'?'white':'black'}} className='btn btn-secondary mx-1 my-1' onClick={handleLowClick}>convert to lowercase</button>
<button disabled={text.length===0} style={{color:props.mode==='dark'?'white':'black'}} className='btn btn-danger mx-1 my-1' onClick={handleClearClick}>Clear text</button>
<button disabled={text.length===0} style={{color:props.mode==='dark'?'white':'black'}} className='btn btn-secondary mx-1 my-1 display-none ' id='copybtn'  onClick={handleCopyClick}>{btntext}</button>
    </div>
    <div className='conta my-3'>
<h2 style={{color:props.mode==='dark'?'white':'black'}}>Your text summary</h2>
<p style={{color:props.mode === 'dark'?'white':'black'}}>{ text.split(" ").filter((Element)=>{return Element.length!=0}).length} words OR {text.length} characters</p>
</div>
    </>
);
} 

//