import React from 'react';
import { studentDetails, purgeStudent } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import {  IRootState, Istudents, IProps } from "../utils/constants/interfaces";

export const Dashboard: React.FC<IProps> = (props): JSX.Element => {
  const dispatch = useDispatch();
  const students: Array<Istudents> = useSelector((state: IRootState ) => state.students.allStudents);
  const hasStudents:boolean =students.length?true:false;
  const noStudetns: JSX.Element = <h1 style={{ position: 'fixed', left: '30%',  top:'30%' }}>There is no students registered. <br/><br/> Start adding clicking on add button below</h1>;
  const addStudentHandler = () => {
    props.history.replace("/addStudent")
  }
  const deleteStudentHandler = (student:Istudents) => {
    const filteredStudent:Array<Istudents> = students.filter((item:Istudents) =>  !(JSON.stringify(item) === JSON.stringify(student)));
    dispatch(purgeStudent(filteredStudent))
  }
  const renderStudents = (): JSX.Element[]=> {
    return students.map( (student:Istudents,index: number) => {
      return (
        <tr key={index} >
          <td onClick={()=>handleClick(student)}>{student.firstName}</td> 
          <td onClick={()=>handleClick(student)}>{student.lastName}</td> 
          <td onClick={()=>handleClick(student)}>{student.phoneNumber}</td> 
          <td onClick={()=>handleClick(student)}>{student.gpa}</td> 
          <td><input type="button" value="Delete Student" onClick={()=>deleteStudentHandler(student)}/></td> 
       </tr>
      )
    });
  }
  const handleClick = (selectedStudent: Istudents) => {
    dispatch(studentDetails(selectedStudent))
    props.history.push("/details");
  }
  return (
    <>
      {!hasStudents? noStudetns:
        <div >
          <table className="studentsTable">
            <thead>
              <tr>
                <th>Firts Name</th>
                <th>Last Name</th>
                <th>Phone Number</th>
                <th>GPA</th>
                <th>Delete Student</th>
              </tr>
            </thead>
            <tbody>
            {renderStudents()}
            </tbody>
          </table>
          
        </div>
      }
      <div className="tooltip">
        <button className="addStudent"  onClick={addStudentHandler}>+</button>
        <span className="tooltipText">Add new student</span>
      </div>
    </>
  );
};

