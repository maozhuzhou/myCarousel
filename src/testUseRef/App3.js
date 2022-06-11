import { useState, useEffect, useRef } from "react";

/**
  Tracking State Changes
  The useRef Hook can also be used to keep track of previous state values.

  This is because we are able to persist useRef values between renders.

  Example:
  Use useRef to keep track of previous state values:
 */


const App3 = () => {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");

    // // cDM, inputValue
    useEffect(() => {
        //console.log('previousInputValue.current = '+previousInputValue.current);
        previousInputValue.current = inputValue;
        console.log('previousInputValue.current = '+previousInputValue.current);
    }, [inputValue]);
    // useEffect(() => {
    //     //console.log('previousInputValue.current = '+previousInputValue.current);
    //     previousInputValue.current = inputValue;
    //     console.log('previousInputValue.current = '+previousInputValue.current);
    // });
    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {previousInputValue.current}</h2>
        </>
    );
}

export default App3;