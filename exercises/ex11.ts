// Create a generic function named `safeAccess` that safely accesses nested properties of an object using an array of keys.
// Demonstrate the function with different object structures and key sequences, including arrays and objects.

function safeAccess<T>(obj: T, keys: (string | number)[]): any {
  return keys.reduce((acc, key) => {
    if (acc && typeof acc === 'object' && key in acc) {
      return (acc as Record<string | number, any>)[key]
    }
    return undefined
  }, obj)
}

const data = {
  user: {
    name: 'Alice',
    address: {
      city: 'Wonderland',
      zip: '12345',
    },
    hobbies: ['reading', 'gaming'],
  },
}

console.log(safeAccess(data, ['user', 'name'])) // Output: Alice
console.log(safeAccess(data, ['user', 'address', 'city'])) // Output: Wonderland
console.log(safeAccess(data, ['user', 'hobbies', 0])) // Output: reading
console.log(safeAccess(data, ['user', 'hobbies', 1])) // Output: gaming
console.log(safeAccess(data, ['user', 'age'])) // Output: undefined
console.log(safeAccess(data, ['user', 'address', 'country'])) // Output: undefined
console.log(safeAccess(data, ['user', 'hobbies', 2])) // Output: undefined
