
import React, { useState } from "react";
import * as Regex from "../utils/constants/regex";
import { newStudent } from "../redux/actions";
import { useDispatch,useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { IProps, Istudents,IRootState } from "../utils/constants/interfaces";


const NewStudents: React.FC<IProps> = (props): JSX.Element  => {

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

    switch (e.target.name) {
      case "firstName":
          setFormData({...formData, firstName: e.target.value})
        break;
      case "lastName":
          setFormData({...formData, lastName: e.target.value})
        break;
      case "street":
          setFormData({...formData, street: e.target.value})
        break;
      case "city":
          setFormData({...formData, city: e.target.value})
        break;
      case "zipcode":
          setFormData({...formData, zipcode: e.target.value})
        break;
      case "state":
          setFormData({...formData, state: e.target.value})
        break;
      case "email":
          setFormData({...formData, email: e.target.value})
        break;
      case "phoneNumber":
          setFormData({...formData, phoneNumber: e.target.value})
        break;
      case "gpa":
          setFormData({...formData, gpa: e.target.value})
        break;
    
      default:
        break;
    }
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

  return (
    <div className="container">
      <form onSubmit={submitHandler}>
          <label> First Name 
            <input 
            onChange={changeHandler} 
            type="text" 
            name="firstName" 
            value={formData.firstName}
            placeholder=" First name..."
            />
          </label>
          <label> Last Name 
            <input 
            onChange={changeHandler} 
            type="text" 
            name="lastName"  
            value={formData.lastName}
            placeholder="Last name..."
            />
          </label>
          <label> Address 
            <input 
            onChange={changeHandler} 
            type="text" 
            name="street" 
            value={formData.street}
            placeholder="Street name and number"
            />
          </label>

            <input 
            onChange={changeHandler} 
            type="text" 
            name="city" 
            value={formData.city}
            placeholder="City"
            /> 

            <input 
            onChange={changeHandler} 
            type="text" 
            name="state" 
            value={formData.state}
            placeholder=" State"
            /> 

            <input 
            onChange={changeHandler} 
            type="text" 
            name="zipcode" 
            value={formData.zipcode}
            placeholder=" Zipcode ##### (five digits ) "
            /> 

          <label> Phone Number 
            <input 
            onChange={changeHandler} 
            type="text" 
            name="phoneNumber" 
            value={formData.phoneNumber}
            placeholder=" Phone Number 7-16 digits..."
            /> 
          </label>
          <label> Email
            <input 
            onChange={changeHandler} 
            type="email" 
            name="email" 
            value={formData.email}
            placeholder=" example@domain.com"
            /> 
          </label>
          <label> GPA 
            <input 
            onChange={changeHandler} 
            type="text" 
            name="gpa" 
            value={formData.gpa}
            placeholder=" from 1.0 to 4.0 ..."
            /> 
          </label>
          <div className="saveButton">
            <input disabled={isDisabled} type="submit" value="Save Student" />
          </div>
      </form>
    </div>
  );
}

export { NewStudents };