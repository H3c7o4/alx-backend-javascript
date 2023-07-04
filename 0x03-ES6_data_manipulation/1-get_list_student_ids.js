export default function (array) {
  if (!(array instanceof Array)) {
    return [];
  }
  const idArray = [];
  for (const elt of array) {
    idArray.push(elt.id);
  }
  return idArray;
}
