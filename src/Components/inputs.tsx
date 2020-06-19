import React from 'react';
import { IinputProps } from '../utils/constants/interfaces';


export const InputCP: React.FC<IinputProps> = (props) => {
  
  return(
    props.label ? 
    <label> 
     {props.label}
    <input 
      onChange={props.changeHandler} 
      type={props.type}
      name={props.name}
      value={props.value}
      placeholder={props.placeHolder}
    />
  </label>
  :
  <input 
      onChange={props.changeHandler} 
      type={props.type}
      name={props.name}
      value={props.value}
      placeholder={props.placeHolder}
    />
  );
}
