/**
 * @description find the index of target element in a specified array if not found then if returns -1.
 * @param {Array} arr
 * @param {number} target_element
 * @returns {number}
 */
function findIndex(arr, target_element) {
  if (typeof target_element !== "number") {
    throw "target element must of type number";
  }

  let x = 0;
  let y = arr.length - 1;

  while (x <= y) {
    const mid = Math.floor((x + y) / 2);

    if (arr[mid] > target_element) {
      // if value is greater than target element
      y = mid - 1;
    } else if (arr[mid] < target_element) {
      // if value is less than taget element
      x = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
}

module.exports = { findIndex };
