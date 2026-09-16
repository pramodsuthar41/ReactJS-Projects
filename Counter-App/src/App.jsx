
import { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0);

  const onIncrementClick = () =>{
    setCount(count + 1);
  }

    const onDecrementClick = () =>{
    setCount(count - 1);
  }

    const onResetClick = () =>{
    setCount(0);
  }
  
  return (
    <>
     <div className="App">
        <h1>Counter App</h1>
        {count}
        <button onClick={onIncrementClick}>Increment</button>
        <button onClick={onDecrementClick}>Decrement</button>
        <button onClick={onResetClick}>Reset</button>
     </div>
    </>
  )
}

export default App
