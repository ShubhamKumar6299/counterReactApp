// import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   // let counter = 0
//   const [counter, setCounter] = useState(0);
//   const addValue = ()=>{
//     // console.log("value Added",Math.random());
//     // counter = counter+1;
//     setCounter(counter +1)
    
//   }

//   const removeValue=()=>{
//     // counter=  counter-1;
//     setCounter(counter-1)
//   }
  

//   return (
//     <>
//     <h1>chai aurrrrrr reacttt</h1>
//     <h2>count value:{counter}</h2>
//     {counter === 7 && <h3>Thala for a reason🔥</h3>}
//     <button
//     onClick={addValue}>Add value</button>
//     <br />
//     <button
//     onClick={removeValue}>remove value</button>
      
//     </>
//   )
// }

// export default App


import { useState } from "react";
import "./App.css";
// import { setErrorMap } from "zod";

// import React from 'react';
function App(){
  const [counter,  setCounter] = useState(0);

  const addValue = ()=>{
    setCounter(counter+1);
  };
  const deleteValue = ()=>{
    // setCounter(counter -1)
    setCounter((prevCounter)=>Math.max(prevCounter-1, 0))
  };

  return (
    <>
    <h1>chai aurrrrrr reacttt</h1>
    <h2>count value : {counter}</h2>
    {counter === 7 && <h2>thatla for a reason🔥</h2>}

    <button onClick={addValue}>addValue</button>

    <button onClick={deleteValue}>deleteValue</button>
    {counter < 0 && <h3>counter can not be less than zero!</h3>}
    </>
  )
};

export default App
