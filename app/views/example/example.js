// import React, { useState, useEffect } from "react";

// export default function DelayedCount() {
//   const [count, setCount] = useState(0);

//   function handleClickAsync(e) {   
//     //   alert(e.target.id)  
//     setTimeout(function delay() {
//       setCount((count)=>count + 1);
//     }, 4000);
//   }
// useEffect(() => {
//   return () => {
    
//   };
// }, [])


//   function handleClickSync() {
//     setCount((count)=>count + 1);
//   }

//   return (
//     <div>
//       {count}
//       <button onClick={handleClickAsync}>Increase async</button>
//       <button onClick={handleClickSync}>Increase sync</button>
//     </div>
//   );
// }
// validator.escape(e.target.value)
// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/; HttpOnly; secure"
// document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "")
// .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
// 'use strict';
// display: flex;
// flex-direction: column;
// flex-wrap: nowrap;
// import React, {memo, useState} from 'react';
// function Test(){
//     const [display, setDisplay] = useState('');
//     const [count, setCount] = useState(0);

//     const handleIncrement=(e)=>{
//         e.preventDefault();
//         let value = count + 1
//         setCount(value);
//         handleFizzBuzz(value);
//     }
//     const handleDecrement=(e)=>{
//         e.preventDefault();
//         let value = count - 1
//         setCount(value);
//         handleFizzBuzz(value);
//     }
//     const handleFizzBuzz =(value)=>{
//         if(value % 5 === 0 ) setDisplay("Fizz");
//         else if(value % 3 === 0 ) setDisplay("Buzz");
//         else setDisplay(value)

//     }
//     return(
//         <div>
//             <div> Value: {display}</div>
//             <div> Count: {count}</div>
//             <button onClick={handleIncrement}> Increment</button>
//             <button onClick={handleDecrement}> Decrement</button>
//         </div>
//     )
// }
// export default memo(Test);
import React, {useEffect, useState, useMemo, useCallback, useRef, memo } from "react";
import axios from 'axios';


function Example() {
    const [placeholders, setPlaceholders] = useState([]);
    const [count, setCount] = useState(0)
    useEffect(() => {
      fetchData();
    }, []);

    const ref = useRef();
    useEffect(()=>{
        ref.current = placeholders;
        console.log('== Re-rendering ==');
    },[placeholders])

    const fetchData = () => {
      axios
        .get(`https://jsonplaceholder.typicode.com/posts`)
        .then(({ data }) => {
          setPlaceholders(data);
        })
        .catch((err) => console.log(err));
    };
    const handleClick = useCallback((e)=>{
        e.preventDefault();
        const {current} = ref;
        const id = Number(e.target.id);
        setCount(current.length + id);
    },[]);

  
      const renderData = useMemo(() => placeholders.map((item, value)=> <li key={item.id+value} onClick={handleClick} id={item.id}> Name:{item.title}, Id: {item.id} </li>), [placeholders]);
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
    <h2>Start editing to see some magic happen! {count} </h2>
        <ol>{renderData}</ol>
      </div>
    );
  }
  export default memo(Example);
//   export default Example;

//    const specialVariable = useRef("SPECIAL_VARAIBLE");
// The only way to update the ref object is to directly set the value of the current property; e.g.
// specialVariable.current = "NEW_SPECIAL_VARIABLE".
//   function Counter() {
//     const [count, setCount] = useState(0);
  
//     const prevCountRef = useRef();
//     useEffect(() => {
//       prevCountRef.current = count;
//     });
//     const prevCount = prevCountRef.current;
  
//     return <h1>Now: {count}, before: {prevCount}</h1>;
//   }

// Unlike a ‘normal’ variable, the specialVariable ref object is not recomputed when the Count component is re-rendered.

// custom hook for getting previous value 
// function usePrevious(value) {
//     const ref = useRef();
//     useEffect(() => {
//       ref.current = value;
//     });
//     return ref.current;
//   }
  
//   // the App where the hook is used 
//   function Counter() {
//     const [count, setCount] = useState(0);
//     // 👇 look here
//     const prevCount = usePrevious(count)
  
//     return <h1>Now: {count}, before: {prevCount}</h1>;
//   }