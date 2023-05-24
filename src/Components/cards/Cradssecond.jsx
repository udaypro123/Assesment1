import React from 'react'
import './card.css'

const Cradssecond = (props) => {
  return (
    <>
       <div class="card mt-3 carddiv1" style={{"width": "18rem", height:"26rem"}}>
                <img src={props.imgsrc} class="card-img-top" alt="..."/>
                <p className='para2cardsecond'>Lorem ipsum dolor, sit amet  Quod, aperiam?</p>
                <p className="para3"> $26225 <span>|</span>  <span className='sqspan'> 15235 sqft</span></p>    
            </div>
            
    </>
  )
}

export default Cradssecond
