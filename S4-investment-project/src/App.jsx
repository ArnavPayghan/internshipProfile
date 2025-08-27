import { useState } from "react";

import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [ userInput, setUserInput ] = useState({
    initialInvestment: 10000,
    annualInvestment: 5000,
    expectedReturn: 10,
    duration: 10,
  });

  const inputIsValid = ( userInput.duration >=1 ? true : false );

  function handleChange( inputIdentifier, newValue ) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: +newValue, // The "+" converts it from string to number.
            };
        });
    }

  return (
    <>
      <UserInput userInput={userInput} onChange={handleChange} />
      {!inputIsValid && <p className="center">Please Enter Valid Duration Data!</p>}
      {inputIsValid && <Results input={userInput}/>}
    </>
  )
}

export default App
