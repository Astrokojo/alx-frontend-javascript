// Returns the sum of all the students ids
//
export default function getStudentIdsSum(studentList) {
  const idSum = studentList.reduce((accumulator, student) => accumulator + student.id, 0);
  return idSum;
}
