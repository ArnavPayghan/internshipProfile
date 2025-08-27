import React from 'react';

function App() {
    const [ greenButton, setGreenButton ] = React.useState(false);
    const [ redButton, setRedButton ] = React.useState(false);
    
    function greenChange() {
        setGreenButton(true);
        setRedButton(false);
    }
    
    function redChange() {
        setRedButton(true);
        setGreenButton(false);
    }
    
    let headingColor = greenButton ? 'green' : redButton ? 'red' : 'white';
    
    return (
    <div id="app">
      <h1 style={{
          color: headingColor
      }}>CSS is great!</h1>
      <menu>
        <li>
          <button onClick={setGreenButton}>Yes</button>
        </li>
        <li>
          <button onClick={setRedButton}>No</button>
        </li>
      </menu>
    </div>
  );
}

export default App;
