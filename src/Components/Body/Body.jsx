import React from 'react';
import "./Body.css"
import { Carrusel } from '../Carrusel/Carrusel';
import { Texto } from '../Texto/Texto';


const Body = () => {
    return(
        <div className='bodyn'>
           <Texto/>

           <Carrusel/>
        
    
        </div>
    )
}

export { Body }