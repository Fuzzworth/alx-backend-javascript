/* eslint-disable no-unused-vars */
/* eslint-disable */
export default function appendToEachArrayValue(array, appendString) {
  for (let idx of array) {
    array[idx] = appendString + idx;

  }

  return array;
}
