const { findIndex } = require("fast-search");

const targetElement = 7;
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const targetIndex = findIndex(arr, targetElement);

console.log(targetIndex); // Output: 6
