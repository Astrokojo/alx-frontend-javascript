// Returns an array of objects located in a specific location
//
export default function getStudentsByLocation(studentList, city) {
  const filteredStudents = studentList.filter((student) => student.location === city);
  return filteredStudents;
}
