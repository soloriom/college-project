
import { Itype, Istudents } from "./interfaces";


export const STUDENTS_ACTIONS: Itype = {
  ADD_STUDENT: 'add_student',
  PURGE: 'purge',
  STUDENT_DETAILS: 'student_detials',
};


export const preDefinedStudents: Array<Istudents> = [
  {firstName: "Jerry", lastName:"Smith",street:"10th Av ",state:"LA",city:"California",zipcode:"94219",phoneNumber:"333333333",gpa:"2.4", email:"jerry@oregon.com"},
  {firstName: "Joseph", lastName:"Noir",street:"Munder 999 ",state:"Munster",city:"Oregon",zipcode:"82732",phoneNumber:"333333333",gpa:"2.4", email:"jerry@oregon.com"},
  {firstName: "Terry", lastName:"Peck",street:"Rose St 55 ",state:"chicago",city:"Illinois",zipcode:"84738",phoneNumber:"333333333",gpa:"2.4", email:"jerry@oregon.com"},
  {firstName: "Lang", lastName:"Williams",street:"Plunder Av 45 ",state:"Munster",city:"Kansas",zipcode:"91283",phoneNumber:"333333333",gpa:"2.4", email:"jerry@oregon.com"},
];