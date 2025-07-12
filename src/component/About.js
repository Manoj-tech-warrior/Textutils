import React from 'react';

export default function About(props) {
  // Define the styles dynamically based on the mode
  let myStyle = {
    color: props.mode === 'dark' ? 'white' : '#042743', 
    backgroundColor: props.mode === 'dark' ? '#042743' : 'white', // Fixed background color for dark mode
    border: '2px solid',
    borderColor: props.mode === 'dark' ? 'white' : '#042743', // Added border color for better visibility
  };

  return (
    <div className="container my-3" >
      {/* Adjusted the outer container color dynamically */}
      <h1 style={{color: props.mode === 'dark'?'white':'black',}} >About</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={myStyle} // Applied dynamic styles for button background and text
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              {/* Applied dynamic styles for accordion body */}
              <strong>This is the first item's accordion body.</strong> You can customize this content.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle} // Applied dynamic styles for button background and text
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              {/* Applied dynamic styles for accordion body */}
              <strong>This is the second item's accordion body.</strong> You can customize this content.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle} // Applied dynamic styles for button background and text
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
              {/* Applied dynamic styles for accordion body */}
              <strong>This is the third item's accordion body.</strong> You can customize this content.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
