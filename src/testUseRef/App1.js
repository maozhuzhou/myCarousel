import { useState, useEffect, useRef } from "react";

/**Does Not Cause Re-renders
  If we tried to count how many times our application renders using the useState Hook,
  we would be caught in an infinite loop since this Hook itself causes a re-render.
  To avoid this, we can use the useRef Hook.
  Example:
  Use useRef to track application renders.*/
const App1 = () => {
    const [inputValue, setInputValue] = useState("");
    //const [count, setCount] = useState(0);
    const count = useRef(0);

    // cDM, cDU
    useEffect(() => {
        //setCount((c) => c+1)
        count.current = count.current + 1;
        console.log(count.current)
    }, [inputValue]);

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Render Count: {count.current}</h1>
        </>
    );
}

export default App1;