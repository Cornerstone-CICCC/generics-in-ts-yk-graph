// Define a generic function named `createPair` that takes two arguments of types `A` and `B` and returns them as a pair within an array `[A, B]`.
// Provide test cases using different types for `A` and `B` parameters.

const createPair = <A, B>(a: A, b: B): [A, B] => {
  return [a, b]
}

const pair1 = createPair(1, 'one')
console.log(pair1) // Output: [1, 'one']

const pair2 = createPair(true, { name: 'Alice' })
console.log(pair2) // Output: [true, { name: 'Alice' }]

const pair3 = createPair([1, 2, 3], { key: 'value' })
console.log(pair3) // Output: [[1, 2, 3], { key: 'value' }]

const pair4 = createPair('hello', 42)
console.log(pair4) // Output: ['hello', 42]

const pair5 = createPair(null, undefined)
console.log(pair5) // Output: [null, undefined]
