import React from 'react';
import '../styles/CustomButton.css';

export default function CustomButton({ ...props }) {
  return (
    <div >

        {props.icon &&
          <div className="input_icon">
              {props.icon}
          </div>
        }
        <button  
        type={props.type} 
        className= {props.class}
        onClick={props.onClick}
        >{props.btnText}</button>
    </div>
  )
}
