import React from 'react'
import Parent from "../components/Parent"
import Profile from "../components/Profile"
import Form from "../hooks/Form"
import State from "../hooks/State"
import Reducer from "../hooks/Reducer"
import {Link} from "react-router-dom"
import {userContext} from "../App"
import {useState} from "react"

const Home = () => {
  const [user,setUser]=useState("abcd")
  return (
    <div>
      <Link to={'/form'}>Form</Link><br/>
      <Link to={'/state'}>UseState Example</Link><br/>
       <Link to={'/reducer'}>UseReducer Example</Link><br/>

       <userContext.Provider value={user}>
           <Profile name="Vidhu" age="20" skills={["HTML","CSS","JS","REACT"]}/>
       </userContext.Provider>   
    </div>
  )
}
export default Home
