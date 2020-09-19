import React, {memo, useState, useEffect, useMemo, useCallback, useRef} from 'react';
import axios from 'axios';

/*
function Examples(props){
  const [lists, setLists] = useState([]);
  const [display, setDisplay] = useState('');
  const ref = useRef();
  useEffect(()=>{
    fetchData();
  },[]);

  useEffect(()=>{
    ref.current = lists;
  },[lists])

  const fetchData =()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
    .then(({data})=>{
      setLists(data)
    })
    .catch(err=>console.log(err));
  }

  const handleClick = useCallback((e)=>{
    const {current} = ref;
// return the length of the array with the length;
  let id = Number(e.target.id) + current.length;
    setDisplay(id);
  },[])

const renderData = useMemo(()=>lists.map((item, index)=><li key={item.id+index} id={item.id} onClick={handleClick}>Name:{item.title} ID: {item.id}</li>), [lists])


  return(
    <div>
      <div>{display}</div>
        <ul>
          {renderData}
        </ul>
    </div>
  )
}
*/


function Examples(){
  const [count, setCount] = useState(0);
  const ref =  useRef();

  useEffect(()=>{
    ref.current = count;
  },[count])

  function handleClickAsync(e) {  
    
    setTimeout(function delay() {
      const {current} = ref; 
      setCount(current + 1);
      console.log('count === ', current);
    }, 4000);
  }
const handleIncrement=()=>{
  setCount(count+1)
}

  return(
    <div>
      <div>{count}</div>
      <button onClick={handleClickAsync}>Increment Async</button>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

//NEXT DO FIZZBUZZ

export default memo(Examples);