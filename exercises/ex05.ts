// Develop a generic function named `duplicateElements` that takes an array of type `T[]` and a number `n`, and returns a new array with each element duplicated `n` times.
// Test the function with different types of arrays and values of `n`.

function duplicateElements<T>(arr: T[], n: number): T[] {
  const result: T[] = []
  for (const element of arr) {
    for (let i = 0; i < n; i++) {
      result.push(element)
    }
  }
  return result
}

const numbers1 = [1, 2, 3]
const duplicatedNumbers = duplicateElements(numbers1, 2)
console.log(duplicatedNumbers) // Output: [1, 1, 2, 2, 3, 3]

const strings1 = ['a', 'b', 'c']
const duplicatedStrings = duplicateElements(strings1, 3)
console.log(duplicatedStrings) // Output: ['a', 'a', 'a', 'b', 'b', 'b', 'c', 'c', 'c']

const booleans1 = [true, false]
const duplicatedBooleans = duplicateElements(booleans1, 4)
console.log(duplicatedBooleans) // Output: [true, true, true, true, false, false, false, false]
