import React from 'react';
import { useSelector } from "react-redux";
import { IProps, IRootState, Istudents } from '../utils/constants/interfaces';


export const Details: React.FC<IProps> = (props): JSX.Element => {
  const students: Istudents = useSelector((state: IRootState ) => state.students.studentDetails);
  return ( 
    <div className="card">
      <img src={window.location.origin + "/avatar.png"} alt="Avatar" />

      <label><b>First Name</b></label><br/>
      <p>{students.firstName}</p><br/>
      <label><b>Last Name</b></label><br/>
      <p>{students.lastName}</p><br/>
      <label><b>Address</b></label><br/>
      <p>{`${students.street}, ${students.city}, 
      ${students.state}, ${students.zipcode}.`}</p><br/>
      <label><b>Phone Number</b></label><br/>
      <p>{students.phoneNumber}</p><br/>
      <label><b>Email</b></label><br/>
      <p>{students.email}</p><br/>
      <label><b>GPA</b></label><br/>
      <p>{students.gpa}</p><br/>
      <button className="returnBtn" onClick={() => props.history.replace("dashboard")}>Return</button>
    </div>
  );
};
