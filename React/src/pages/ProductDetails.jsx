import React from 'react'
import {useParams} from "react-router-dom"
const ProductDetails = () => {
     const products=[
        {id:1,name:"Laptop",price:"30000",description:'Acer Laptop i5 10th gen'},
        {id:2,name:"Mouse",price:"1000",description:'gaming mouse'},
        {id:3,name:"Mobile",price:"5000",description:'vivo Y56 5G'},
        {id:4,name:"Keyboard",price:"3000",description:'keyboard with light'},

    ]
 const {id}=useParams()
 const product=products.find((p)=>p.id==Number(id))
  return (
    <div>
      <h1>Product Details</h1>
      <h2>{product.name}</h2>
      <p>Price:{product.price}</p>
      <p>{product.description}</p>
    </div>
  )
}

export default ProductDetails
