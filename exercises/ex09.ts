// Define a generic class named `Stack` that implements a stack data structure for elements of type `T`.
// Implement methods for pushing and popping elements from the stack.
// Create test cases using various types for elements pushed and popped from the stack.

class Stack<T> {
  private items: T[] = []

  push(element: T): void {
    this.items.push(element)
  }

  pop(): T | undefined {
    return this.items.pop()
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1]
  }

  isEmpty(): boolean {
    return this.items.length === 0
  }

  size(): number {
    return this.items.length
  }
}

const numberStack = new Stack<number>()
numberStack.push(1)
numberStack.push(2)
numberStack.push(3)
console.log(numberStack.pop()) // Output: 3
console.log(numberStack.peek()) // Output: 2
console.log(numberStack.size()) // Output: 2

const stringStack = new Stack<string>()
stringStack.push('Hello')
stringStack.push('World')
console.log(stringStack.pop()) // Output: 'World'
console.log(stringStack.peek()) // Output: 'Hello'
console.log(stringStack.isEmpty()) // Output: false

const booleanStack = new Stack<boolean>()
booleanStack.push(true)
booleanStack.push(false)
console.log(booleanStack.pop()) // Output: false
console.log(booleanStack.peek()) // Output: true
console.log(booleanStack.isEmpty()) // Output: false
