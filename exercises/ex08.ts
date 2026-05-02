// Create a generic dictionary class named `Dictionary` that allows associating keys of type `K` with values of type `V`.
// Implement methods for adding, retrieving, and deleting key-value pairs.
// Demonstrate the usage of this class with different key and value types.

class Dictionary<K, V> {
  private items: { [key: string]: V } = {}

  add(key: K, value: V): void {
    this.items[JSON.stringify(key)] = value
  }

  get(key: K): V | undefined {
    return this.items[JSON.stringify(key)]
  }

  delete(key: K): void {
    delete this.items[JSON.stringify(key)]
  }
}

const stringDictionary = new Dictionary<string, number>()
stringDictionary.add('one', 1)
stringDictionary.add('two', 2)
console.log(stringDictionary.get('one')) // Output: 1
stringDictionary.delete('one')
console.log(stringDictionary.get('one')) // Output: undefined

const numberDictionary = new Dictionary<number, string>()
numberDictionary.add(1, 'one')
numberDictionary.add(2, 'two')
console.log(numberDictionary.get(1)) // Output: "one"
numberDictionary.delete(1)
console.log(numberDictionary.get(1)) // Output: undefined

const objectDictionary = new Dictionary<{ id: number }, string>()
objectDictionary.add({ id: 1 }, 'object one')
objectDictionary.add({ id: 2 }, 'object two')
console.log(objectDictionary.get({ id: 1 })) // Output: "object one"
objectDictionary.delete({ id: 1 })
console.log(objectDictionary.get({ id: 1 })) // Output: undefined
