import React from 'react';
import { IProps } from '../utils/constants/interfaces';


export const NavBar: React.FC<IProps> = (props): JSX.Element => {
  const goToDashboard = () =>{
    props.history.replace('/dashboard')
  }
  return(
    <div className="NavBar"><span className="NavBarText" onClick={goToDashboard}>Go To Dashboard</span></div>
  );

}