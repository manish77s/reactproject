import React from 'react'
import { useParams } from 'react-router-dom'

function Details() {
const {id}=  useParams();
    
return (
    <div>
      <h1>Details..</h1>
      <h2>{id.heading}</h2>
      <img src={id.image}/>
      <p>{id.description}</p>

    </div>
  )
}

export default Details;