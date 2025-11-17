import React, { useState} from "react";

function Counter(){

    const [count, setCount] = useState(0);

    return(
        <div style={{marginTop:"30px"}}>
            <h2> Counting Number </h2>
            <p>Value : {count} </p>

            <button onClick={()=> setCount(count -1)}>-</button>
            <button onClick={()=> setCount(count +1)}>+</button>
        </div>
    );
}

export default Counter;