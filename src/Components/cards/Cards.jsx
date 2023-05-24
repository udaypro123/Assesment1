import React from 'react'
import './card.css'
const Cards = (props) => {
    return (
        <>
            <div class="card mt-3 carddiv" style={{"width": "18rem", height:"20rem"}}>
                <img src={props.imgsrc} class="card-img-top" alt="..."/>
                    
            </div>
            
            
        </>
    )
}

export default Cards
