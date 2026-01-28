import React from 'react'
import {useEffect,useState} from 'react'
const About = () => {
  const [user,setuser]=useState([])
  useEffect(()=>{
      fetch('https://fakestoreapi.com/users')
     .then(response => response.json())
       .then(data => setuser(data));
  },[])
  return (
    <div>
      <h1>Users</h1>
      {user.map((user)=>(
        <div key={user.id}>
            <h4>Name:  {user.username}</h4>
            <h5>Email:  {user.email}</h5>
             <h5>Password:  {user.password}</h5>
           
        </div>
      ))}
    </div>
  )
}

export default About
