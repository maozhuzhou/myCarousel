import { useState, useEffect, useRef } from "react";

/** todo
 * Modify “OuterClickExample” at
 * https://reactjs.org/docs/accessibility.html
 */

const App = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleContainer = useRef(null);

    useEffect(()=>{
        window.addEventListener('click', onClickOutsideHandler);
        console.log('useEffect90: window.addEventListener')
        return () => window.removeEventListener('click', onClickOutsideHandler);
        },[]);
    const onClickHandler = () => {
        console.log(isOpen)
        setIsOpen((isOpen) => {
            const bl = !isOpen;
            console.log(bl)
            return bl;
        });

    }
    const onClickOutsideHandler = (e) => {
        console.log('onClickOutsideHandler isOpen='+isOpen)
        if( !toggleContainer.current.contains(e.target)) {
            setIsOpen(false);
        }
    }
    return (
        <div ref={toggleContainer}>
            <button onClick={onClickHandler}>Select an option</button>
            {isOpen && (
                <ul>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                </ul>
            )}
        </div>
    );
}

export default App;