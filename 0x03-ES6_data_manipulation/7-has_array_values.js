// More set data structure
//
export default function hasValuesFromArray(set, array) {
  return array.every((element) => set.has(element));
}
