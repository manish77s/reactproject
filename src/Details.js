import React from 'react'
import { useParams } from 'react-router-dom'

function Details() {
const {id}=  useParams();
    
return (
    <div>
      <h1>Details..</h1>
     {id}

    </div>
  )
}

export default Details;