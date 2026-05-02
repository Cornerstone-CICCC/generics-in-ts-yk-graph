// Create a function called concatSum that takes two generic arguments.
// These arguments could be strings or numbers. If both are strings, use the concat method; otherwise, just sum the numbers.
// If they are not of the same type, print an error message to the console; If they are not string or number, print an error message

const concatSum = () => {
  function concatSum<T, U>(arg1: T, arg2: U): string | number {
    if (typeof arg1 === 'string' && typeof arg2 === 'string') {
      return arg1.concat(arg2)
    } else if (typeof arg1 === 'number' && typeof arg2 === 'number') {
      return arg1 + arg2
    } else {
      console.error(
        'Error: Both arguments must be of the same type (either string or number).',
      )
      return NaN // Return NaN to indicate an error in case of mismatched types
    }
  }

  // Demonstration of the function with different inputs
  console.log(concatSum('Hello, ', 'World!')) // Output: "Hello, World!"
  console.log(concatSum(5, 10)) // Output: 15
  console.log(concatSum('Hello', 5)) // Output: Error message and NaN
  console.log(concatSum(true, false)) // Output: Error message and NaN
}
