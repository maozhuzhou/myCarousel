import { useRef } from "react";
/** Accessing DOM Elements
 In general, we want to let React handle all DOM manipulation.
 But there are some instances where useRef can be used without causing issues.
 In React, we can add a ref attribute to an element to access it directly in the DOM.
 Example:
 Use useRef to focus the input:
 */
const App2 = () => {
    const inputElement = useRef();
    //const input = <input type="text" id={"id2"}  ref={inputElement} />;

    const focusInput = () => {
        inputElement.current.focus();
        //document.getElementById("id1").focus();
        //input.focus();
    };

    return (
        <>
            <input type="text" id={"id1"}  ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button>
        </>
    );
}

export default App2;