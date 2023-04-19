import { useState } from 'react'
import './App.css'
import { Count } from './components/Count';

function App() {
  const [count, setCount] = useState(0);

  function onIncrement() {
    if(count<10){
    setCount((prev)=>prev+1);
    }
  }

  function onDecrement() {
    if(count>0){
    setCount((prev)=>prev-1);
    }
  }

  return (
    <>
   <Count onDecrement={onDecrement} onIncrement={onIncrement} count={count}/>
    </>
  )
}

export default App
