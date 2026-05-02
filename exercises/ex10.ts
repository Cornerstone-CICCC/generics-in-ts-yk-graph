// Develop a generic function named `customMap` that takes an array of type `T[]` and a mapping function `mapper: (item: T) => U`, and returns a new array of type `U[]`.
// Test the function with arrays of different types and custom mapping functions.

function customMap<T, U>(array: T[], mapper: (item: T) => U): U[] {
  const result: U[] = []
  for (const item of array) {
    result.push(mapper(item))
  }
  return result
}

const numbers2 = [1, 2, 3, 4]
const squaredNumbers = customMap(numbers2, (num) => num * num)
console.log(squaredNumbers) // Output: [1, 4, 9, 16]

const strings2 = ['Hello', 'World']
const stringLengths = customMap(strings2, (str) => str.length)
console.log(stringLengths) // Output: [5, 5]

const booleans2 = [true, false, true]
const booleanStrings = customMap(booleans2, (bool) => (bool ? 'Yes' : 'No'))
console.log(booleanStrings) // Output: ['Yes', 'No', 'Yes']
