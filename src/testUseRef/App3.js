import { useRef } from "react";

const App2 = () => {
    const inputElement = useRef();

    const focusInput = () => {
        inputElement.current.focus();
        //document.getElementById("id1").focus();
    };

    return (
        <>
            <input type="text" ref={inputElement} />
            <button onClick={focusInput}>Focus Input</button>
        </>
    );
}

export default App2;