export default function (array) {
  if (!(array instanceof Array)) {
    return [];
  }
  const idArray = array.map((student) => student.id);
  return idArray;
}
