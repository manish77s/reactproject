import React, { useContext } from 'react'
import { Store } from '../Datastore';
import './homestyle.css'
import { Link } from 'react-router-dom';
import Hollywood from '../Hollywood';
import Food from '../Foodcomp';
import Fitness from '../Fitness';

const Lateststory = () => {
  const [Storylate]=useContext(Store)
  return (
  <>
  <hr/><h3>Latest story</h3><hr/>
    <div className='bottomstory'>
    <div className='homeStory'>
    {Storylate.filter((item) =>item.id===14).map((data,index)=>{
      console.log(data);
      return(
        <div key={index} className='borderStory'>
          
          {/* <img className='top4' src={data.image}/> */}
          {/* <h3>{data.heading}</h3> */}
         
          <Link to={`/details/${Hollywood.heading}`} state={data}><h3>{data.heading}</h3> <p>{data.description}</p> </Link> 
        </div>
      )
        
     })}
    </div>

    <div className='homeStory'>
    {Storylate.filter((item) =>item.id===51).map((data,index)=>{
      console.log(data);
      return(
        <div key={index} className='borderStory'>
          
          {/* <img className='top4' src={data.image}/> */}
          {/* <h3>{data.heading}</h3>
          <p>{data.description}</p>   */}
          <Link to={`/details/${Food.heading}`} state={data}><h3>{data.heading}</h3> <p>{data.description}</p> </Link> 
       
        </div>
       
      )
        
     })}
    </div>
    

    <div className='homeStory'>
    {Storylate.filter((item) =>item.id===37).map((data,index)=>{
      console.log(data);
      return(
        <div key={index} className='borderStory'>
          
          {/* <img className='top4' src={data.image}/> */}
          {/* <h3>{data.heading}</h3>
          <p>{data.description}</p>   */}
          <Link to={`/details/${Fitness.heading}`} state={data}><h3>{data.heading}</h3> <p>{data.description}</p> </Link> 
     
        </div>
      )
        
     })}
    </div>
    </div>
      
    </>
  )
}

export default Lateststory