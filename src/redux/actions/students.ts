
import { STUDENTS_ACTIONS } from '../../utils/constants/reduxConstants';
import { Istudents, Iaction } from '../../utils/constants/interfaces';

export const newStudent =  (newStudent: Istudents): Iaction => {

  return {
    type: STUDENTS_ACTIONS.ADD_STUDENT,
    payload: newStudent,
  }
};
export const studentDetails =  (student: Istudents): Iaction => {

  return {
    type: STUDENTS_ACTIONS.STUDENT_DETAILS,
    payload: student,
  }
};
export const purgeStudent =  (studentsRemaining:Array<Istudents>): Iaction => {
  return {
    type: STUDENTS_ACTIONS.PURGE,
    payload: studentsRemaining
  }
};