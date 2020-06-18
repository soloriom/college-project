import { History } from "history";
import { type } from "os";
export interface IRootState {
  students: IallStudents
}
export interface IallStudents {
  allStudents: Array<Istudents>;
  studentDetails: Istudents;
}

export interface Istudents {
  [key: string]: string;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
  phoneNumber: string;
  email: string;
  gpa: string;
}

export interface IProps {
  history: History;
}

export interface Iaction{
 readonly type: string;
  payload: Array<Istudents> | Istudents;
}

export interface Itype{
 readonly ADD_STUDENT: string;
 readonly PURGE: string;
 readonly STUDENT_DETAILS: string;
}