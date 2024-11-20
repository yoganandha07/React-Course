import { useState } from 'react'
import './App.css'

function App() {
  
  const [counter, setCounter]= useState(0)
  //let counter = 15;


  const addValue = () =>{
    setCounter((prevCounter) => prevCounter +1)
    setCounter((prevCounter) => prevCounter +1)
    setCounter((prevCounter) => prevCounter +1)
    setCounter((prevCounter) => prevCounter +1)
  }
  const removeValue = () =>{
    setCounter((prevCounter) => prevCounter -1)
    setCounter((prevCounter) => prevCounter -1)
    setCounter((prevCounter) => prevCounter -1)
    setCounter((prevCounter) => prevCounter -1)
  }
  const resetValue = ()=>{
    setCounter(0)
  }

  return (
    <>
     <h1>Sample Counter React App</h1>
     <p>Counts 4 times the Value</p>
     <h2>Counter value: {counter}</h2>
     <button onClick={addValue}>Add value </button>{" "}
     <button onClick={resetValue}>Reset Value  </button>{" "}
     <button onClick={removeValue}>Remove Value </button>
     
    </>
  )
}

export default App
