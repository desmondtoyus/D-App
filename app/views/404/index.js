import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react';
import Wrapper from '../../components/wrapper';

function NotFound(props){

    return(
        <Wrapper viewId='404' desc={`desmond.pro - Page cannot be found`}>
         <div className="container" style={{marginTop:'10%'}}>
			<div className="site-title text-center">
				<h3>Page Not Found</h3>
			</div>
            </div>
         </Wrapper>
    )
}

export default memo(NotFound);

// inter
// import React, { useState } from "react";

// export default function DelayedCount() {
//   const [count, setCount] = useState(0);

//   function handleClickAsync(e) {   
//     //   alert(e.target.id)  
//     setTimeout(function delay() {
//       setCount((count)=>count + 1);
//     }, 4000);
//   }


//   function handleClickSync() {
//     setCount(count + 1);
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