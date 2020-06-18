import { STUDENTS_ACTIONS, preDefinedStudents } from '../../utils/constants/reduxConstants';
import { IallStudents, Iaction  } from '../../utils/constants/interfaces';
// Set enableMock to true to enable mock students
const enableMock = false;
const INITIAL_STATE: IallStudents = {
  allStudents:  enableMock ? preDefinedStudents : [],
  studentDetails: {
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    phoneNumber: "",
    email: "",
    zipcode: "",
    state: "",
    gpa: "",
  }
};

export default function (state = INITIAL_STATE, action: Iaction ): any {
  switch (action.type) {
    case STUDENTS_ACTIONS.ADD_STUDENT:
      return { ...state, allStudents : [...state.allStudents, action.payload] };
    case STUDENTS_ACTIONS.STUDENT_DETAILS:
      return { ...state, studentDetails : action.payload };
    case STUDENTS_ACTIONS.PURGE:
      return { ...state, allStudents : action.payload };
    default:
      return state;
  }
}