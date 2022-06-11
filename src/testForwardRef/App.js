import React, { useEffect, useRef } from 'react';
import Input from './Input';
import FancyButton from './FancyButton';
import './App.css';

const App = () => {
    const firstNameRef = useRef(null);
    const lastNameRef = useRef(null);
    const submitRef = useRef(null);

    useEffect(() => {
        firstNameRef.current.focus();
    }, []);

    function firstKeyDown(e) {
        if (e.key === 'Enter') {
            lastNameRef.current.focus();
        }
    }
    function lastKeyDown(e) {
        if (e.key === 'Enter') {
            submitRef.current.focus();
        }
    }
    function submitKeyDown(e) {
        console.log('form submitted!');
    }
    return (
      <div className="App">
          <Input
              type="text"
              onKeyDown={firstKeyDown}
              ref={firstNameRef}
              placeholder={"enter first name"}
          />
          <Input
              type="text"
              onKeyDown={lastKeyDown}
              ref={lastNameRef}
              placeholder={"enter last name"}
          />
          <FancyButton onKeyDown={submitKeyDown} ref={submitRef}>
              Submit
          </FancyButton>
      </div>
    );
}
// // The FancyButton component we imported is the LogProps HOC.
// // Even though the rendered output will be the same,
// // Our ref will point to LogProps instead of the inner FancyButton component!
// // This means we can't call e.g. ref.current.focus()
// const App = () => {
//     let handleClick = (e) => {
//         console.dir(e.target)
//         console.log(ref.current.target)
//     };
//     return (<FancyButton
//         label="Click Me"
//         onClick={handleClick}
//         ref={ref}
//     />);
// }
export default App;