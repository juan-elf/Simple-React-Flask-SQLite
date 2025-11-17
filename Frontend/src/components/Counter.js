import { useState } from "react";

function Counter () {
// state declaration
    const [count, setCount] = useState(0);

    const increment = ()=> setCount(count+1);
    const decrement = ()=> setCount(count-1);

    return(
        <div style={{textAlign:"center", marginTop:"20px"}}>
            <h2>React Counter</h2>
            <h3>{count}</h3>

            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default Counter;