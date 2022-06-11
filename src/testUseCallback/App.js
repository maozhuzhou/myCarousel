import { useState, useCallback, useMemo } from "react";
import Todos from "./Todos";

const App = () => {
    console.log("App render");
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    //const calculation = expensiveCalculation(count);
    const calculation = useMemo(() => expensiveCalculation(count), [count]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    // const addTodo = () => {
    //     setTodos((t) => [...t, "New Todo"]);
    // };
    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    }, [todos]);

    return (
        <>
            <Todos todos={todos} addTodo={addTodo} />
            <hr />
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </>
    );
};
const expensiveCalculation = (num) => {
    //console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};

export default App;

/**
 const expensiveCalculation = (num) => {
    //console.log("Calculating...");
    for (let i = 0; i < 1000000000; i++) {
        num += 1;
    }
    return num;
};

 <h2>Expensive Calculation</h2>
       {calculation}
 */