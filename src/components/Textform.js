import React, { useState } from 'react';
// const [count, setCount] = useState(0);
export default function Textform(props) {
    const [text, setText] = useState('');
    const handleremoveclick = () => {
        let newArr = text.split(/[ ]+/);
        console.log(newArr);
        setText(newArr.join(" "));
    }
    const handleupclick = () => {
        //console.log("upper case clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showAlert("Converted to Uppercase", "success");
    }
    const handlecopyclick = () => {
        var text = document.getElementById('mybox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", "success");
    }
    const handleloclick = () => {
        // console.log("upper case clicked");
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lowercase", "success");
    }
    const handleclearclick = () => {
        // console.log("upper case clicked");
        let newtext = ''
        setText(newtext);
        props.showAlert("Text Cleared", "success");
    }
    const handleOnChange = (event) => {
        console.log("on change");
        setText(event.target.value);
    }
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >
                <h1>{props.heading}</h1>
                <div className="mb-3" style={{ color: props.mode === 'dark' ? 'black' : 'white' }}>
                    {/* <label for="mybox" class="form-label">Example textarea</label> */}
                    <textarea className="form-control" value={text} style={{
                        backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
                        color: props.mode === 'dark' ? 'white' : 'black'
                    }} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                </div>
                <button class="btn btn-primary mx-1" onClick={handleupclick}>Convert to Upper case</button>
                <button class="btn btn-primary mx-1" onClick={handleloclick}>Convert to Lower case</button>
                <button class="btn btn-primary mx-1" onClick={handleclearclick}>Clear Text</button>
                <button class="btn btn-primary mx-1" onClick={handleremoveclick}>Remove Extra Space</button>
                <button class="btn btn-primary mx-1" onClick={handlecopyclick}>Copy Text</button>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h2>Summary</h2>
                <p> words:{text.split(" ").length}   characters:{text.length}</p>
                <p> {.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter Something To Preview It'}</p>
            </div>
        </>
    )
}
