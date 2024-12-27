import React, { useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);

   const increment = ()=>{
        setCount(count+1);
    }
   const decrement = ()=>{
        setCount(count-1);
    }
   const reset = ()=>{
        setCount(0);
    }
  return (
    <div>
      <h1>Counter</h1>
      <p>Count:{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Counter
