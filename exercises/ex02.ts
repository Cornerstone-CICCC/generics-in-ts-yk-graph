// Create a generic function named `identity` that takes a single argument of type `T` and returns that argument.
// Create a few test cases, such as using the function with numbers, strings, and custom objects to demonstrate its type flexibility.

const identity = <T>(arg: T): T => {
  return arg
}

console.log(identity(42)) // Output: 42
console.log(identity('Hello')) // Output: "Hello"
console.log(identity({ name: 'Alice', age: 30 })) // Output: { name: 'Alice', age: 30 }
