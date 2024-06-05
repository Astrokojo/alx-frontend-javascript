// Returns an array of students for a specific city with their new grade
//
export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const studentsCity = studentList.filter((student) => student.location === city);

  const updatedStudents = studentsCity.map((student) => {
    const studentGrade = newGrades.find((grade) => grade.studentId === student.id);
    const updatedGrade = studentGrade ? studentGrade.grade : 'N/A';

    return { ...student, grade: updatedGrade };
  });
  return updatedStudents;
}
