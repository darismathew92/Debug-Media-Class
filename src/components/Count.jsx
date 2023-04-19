import React from "react";

export function Count({onDecrement,onIncrement,count}){
    
    return(
        <>
        <div>
        <h1>Count</h1>
        <h1>{count}</h1>
        <button onClick={onIncrement}> Increment</button>  
        <button onClick={onDecrement}> Decrement</button>
        </div>
        </>
    )
}