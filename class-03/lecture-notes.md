# Class 03 Lecture notes

## Arrays

- Data type -- Data Structure **special type of object**
- A collection or list of elements
  - Can be mixed -- can store numbers, strings, or arrays all in the same array structure
- Don't have to determine the size my array upon creation
- Every element will have a position - referred to it as its index
  - Array are zero based

```javascript
//                0        1         2     3
let myArray = ['hello', 'goodbye', 'hi', 'bye'];
```

- Array have methods!
  - `.push()` - add an element to the end of the array
  - `.pop()` - remove the last element of the array

- Array property
  - `.length` - size of the array

## Loops

### For

- Great for executing code a certain number of times
- Great for looping through an array (array have sizes/length)

```javascript
// anatomy of a for loop
  for(starting value; condition; increment/decrement the starting value){
      code that will run until the condition in no longer true
  }
```

### While

- Execute code until the condition it is given is no longer true
- Beware of infinite loops!

```javascript
// anatomy of a while loop
  while(condition){
      code that will run until the condition is no longer true
  }
```
