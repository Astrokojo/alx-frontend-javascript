// Returns an array of ids from a list of objects
//
export default function getListStudentIds(arrOfObj) {
  if (!Array.isArray(arrOfObj)) {
    return [];
  }
  return arrOfObj.map((student) => student.id);
}
