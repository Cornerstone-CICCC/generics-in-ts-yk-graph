// Write a generic function called `getFirstElement` that accepts an array of type `T[]` and returns the first element.
// Create test cases using arrays of various types to demonstrate that the function works correctly.
// Don't forget to cover the situation where the array is empty.

const getFirstElement = <T>(arr: T[]): T | undefined => {
  return arr.length > 0 ? arr[0] : undefined
}

const numbers = [1, 2, 3, 4, 5]
const strings = ['a', 'b', 'c', 'd']
const booleans = [true, false, true]
const emptyArray: number[] = []

console.log(getFirstElement(numbers)) // Output: 1
console.log(getFirstElement(strings)) // Output: 'a'
console.log(getFirstElement(booleans)) // Output: true
console.log(getFirstElement(emptyArray)) // Output: undefined
