import React from 'react'
import {useState,useEffect} from "react"
const State = () => {
    const [count,setCount]=useState(0)//count state
    const [like,setlike]=useState(0)//like state
    useEffect(()=>{
      console.log("from useEffect")
    },[count])//[]dependencies []empty->one time it runs.....[state]->runs only when that state calls...if no dependency->run infinite times,for all the state
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
