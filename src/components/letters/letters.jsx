import React, { useEffect } from 'react';
import './letters.scss'
const Letters = (props) => {
    useEffect(()=>{
        console.log(props.dogs)
    },[props.dogs])
    return(
        <div className="container-letters">
            <img src={props.dogs} alt="dogs" className="image-dogs"/>
        </div>
    )
}
export default Letters