export default function getStudentIdsSum(array) {
  let result = 0;

  if (Array.isArray(array)) {
    result = array.reduce((sum, student) => sum + student.id, 0);
  }
  return result;
}
