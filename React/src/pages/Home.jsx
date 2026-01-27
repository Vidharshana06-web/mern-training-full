import React from 'react'
import Parent from "../components/Parent"
import Profile from "../components/Profile"
import Form from "../hooks/Form"
import State from "../hooks/State"
const Home = () => {
  return (
    <div>
       <Profile name="Vidhu" age="20" skills={["HTML","CSS","JS","REACT"]}/>
       <State/>
       <Parent/>
       <Form/> 
    </div>
  )
}

export default Home
