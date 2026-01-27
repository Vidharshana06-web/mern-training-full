import React from 'react'
import {useState} from "react"
const State = () => {
    const [count,setCount]=useState(0)
    const [like,setlike]=useState(0)
  return (
    <>
    <div>State</div>
    <h1>Count:{count}</h1>
    <button onClick={()=>setCount(count+1)}>Increment
    </button>
    <h2>Like:{like}</h2>
    <button onClick={()=>setlike(like+1)}>Like</button>
    <button onClick={()=>setlike(like-1)}>DisLike</button>

    </>
    
  )
}

export default State
