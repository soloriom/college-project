
import React, { useState } from "react";
import * as Regex from "../utils/constants/regex";
import { newStudent } from "../redux/actions";
import { useDispatch,useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { IProps, Istudents,IRootState, IinputProps } from "../utils/constants/interfaces";
import { InputCP } from "./index";

const arrayInputs: Array<IinputProps> = [
    {
      label: "First Name",
      type:"text",
      name:"firstName",
      value: "firstName",
      placeHolder: "First name..."
    },
    {
      type:"text",
      label: "Last Name",
      name:"lastName",
      value: "lastName",
      placeHolder: "Last name..."
    },
    {
      label: "Address",
      type:"text",
      name:"street",
      value: "street",
      placeHolder: "Street name and number"
    },
    {
      type:"text",
      name:"city",
      value: "city",
      placeHolder: "City"
    },
    {
      type:"text",
      name:"state",
      value: "state",
      placeHolder: "State"
    },
    {
      type:"text",
      name:"zipcode",
      value: "zipcode",
      placeHolder: "Zipcode ##### (five digits )"
    },
    {
      label: "Phone Number",
      type:"text",
      name:"phoneNumber",
      value: "phoneNumber",
      placeHolder: "Phone Number 7-16 digits..."
    },
    {
      label: "Email",
      type:"email",
      name:"email",
      value: "email",
      placeHolder: "example@domain.com"
    },
    {
      label: "GPA",
      type:"text",
      name:"gpa",
      value: "gpa",
      placeHolder: "from 1.0 to 4.0 ..."
    }
  ];


export const NewStudents: React.FC<IProps> = (props): JSX.Element  => {

  const [formData, setFormData] = useState<Istudents>({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    phoneNumber: "",
    email: "",
    zipcode: "",
    state: "",
    gpa: "",
  });
  const students: Array<Istudents> = useSelector((state: IRootState ) => state.students.allStudents);

  const isDisabled: boolean = Object.values(formData).some(data => !data);
  const dispatch = useDispatch();

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const inputName = e.target.name;

      setFormData({...formData, [inputName]: e.target.value })
  }
  
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let trimmedData: Istudents = formData;
    for (let data in formData){
      trimmedData[data] = formData[data].trim();
    }
    if(!Regex.text.test(trimmedData.firstName)){
      Swal.fire('Oops...!', 'Just letters are accepted at First Name!', 'error')
      return;
    }
    if(!Regex.text.test(trimmedData.lastName)){
      Swal.fire('Oops...!', 'Just letters are accepted at Last Name.', 'error')
      return;
    }
    if(!Regex.textNumber.test(trimmedData.street)){
      Swal.fire('Oops...!', `Just letters and numbers are accepted at Street input.`, 'error')
      return;
    }
    if(!Regex.text.test(trimmedData.city) ){
      Swal.fire('Oops...!', 'Just letters are accepted at city input.', 'error')
      return;
    }
    if(!Regex.text.test(trimmedData.state) ){
      Swal.fire('Oops...!', 'Just letters are accepted at state input.', 'error')
      return;
    }
    if(!Regex.zipcode.test(trimmedData.zipcode) ){
      Swal.fire('Oops...!', 'Bad Zipcode input, check placeholder for guidance!', 'error')
      return;
    }
    if(!Regex.phone.test(trimmedData.phoneNumber)){
      Swal.fire('Oops...!', 'Bad Phone Number input, check placeholder for guidance', 'error')
      return;
    }
    if(!Regex.email.test(trimmedData.email)){
      Swal.fire('Oops...!', 'Bad Email input, check placeholder for guidance!', 'error')
      return;
    }
    if(!Regex.gpa.test(trimmedData.gpa)){
      Swal.fire('Oops...!', 'Bad GPA input, check placeholder for guidance', 'error')
      return;
    }
    if(students.some(student => 
      student.email.toLocaleLowerCase() === trimmedData.email.toLocaleLowerCase()
      && student.firstName.toLocaleLowerCase() === trimmedData.firstName.toLocaleLowerCase()
      && student.lastName.toLocaleLowerCase() === trimmedData.lastName.toLocaleLowerCase())){
      Swal.fire(`Oops... Repeated Student`, ` ${trimmedData.firstName} ${trimmedData.lastName} with the email ${trimmedData.email} is already registered`, 'error')
      return;
    }
    
    
    dispatch(newStudent(trimmedData));
    props.history.replace("/dashboard");
  }

  
  const renderInputs= () => {
    return(
      arrayInputs.map( (item,i) => 
          <InputCP 
            key ={i}
            label={item.label}
            changeHandler={changeHandler}
            type={item.type} 
            name={item.name} 
            value={formData[item.value]}
            placeHolder={item.placeHolder}
            />
      )
    )
  }
  

  return (
    <div className="inputContainer">
      <form onSubmit={submitHandler}>
        {renderInputs()}
        <div className="saveButton">
          <input disabled={isDisabled} type="submit" value="Save Student" />
        </div>
      </form>
    </div>
  );
}
