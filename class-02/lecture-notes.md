# Class 02 - Lecture Notes

## JavaScript

Considered a **loosely typed** and **dynamic language**

- Loosely typed: we don't have to know the type of data before declaring a variable
- Dynamic: we can change that type of data of that variable after it has been declared

- `let num;`
- `num = 4;`
- `num = 'cat';`

## Data Types

### Strings

- Sequence of characters that represent text
- `hello` OR `fjeowanoifejr4eowa3qroi`

### Numbers

- numeric data type
- full numbers, negatives, decimals
- `-2343` OR `4.134343`

### Boolean

- logical data type
- `true` OR `false`

#### TRUTHY & FALSEY VALUES

##### NUMBERS

- 0 IS THE ONLY FALSEY VALUE
- ANY OTHER # IS CONSIDERED TRUTHY

##### STRINGS

- AN EMPTY STRING IS THE ONLY FALSEY VALUE
- ANY OTHER STRING REPRESENTATION IS A TRUTHY VALUE

```javascript
if(-1){
  console.log('this is a truthy value')
}

if(0){
  console.log('this is a falsey value')
}

if('HEY I\'M A STRING'){
  console.log('this is a truthy value')
}

if(''){
  console.log('this is a falsey value')
}
```

### Undefined

- it hasn't been defined
- `let num;`

### Null

- defined but as none or nothing
- `let num = null;`

## Comparison Operators

- `==` 'loose equality'...value must be the same, but type can be different
  - `6 == '6' // evaluates to true`
- `===` 'strict equality'...value and type must be the same
  - `6 == '6' // evaluates to false` but...
  - `6 === 6 // evaluates to true`
- `!=` 'loose inequality'
  - `6 != '6' // evaluates as false`
  - `6 != 'a' // evaluates as true`
- `!==` 'strict inequality'
  - `6 !== '6' // evaluates as true`
  - `6 !== 6 // evaluates as false`
- `>` greater than; `<` less than
- `>=` greater than or equal to; `<=` less than or equal to

```javascript
let a = 10;
console.log(a === '10'); // false
console.log(a == '10'); // true
console.log(a >= '10');
```

## Logical Operators

- `&&` and;
- `||` or;
- `!` not, also refered to as the bang symbol. Gives you the opposite of whatever it is placed in front of
  - `!true` this will equate to false

```javascript
let b = 100;

if(b < 1000 && b > 5){ // BOTH NEED TO BE TRUE
  console.log('this code will run')
}

if(b === 'abc' || b > 5){ // ONLY ONE NEEDS TO BE TRUE
  console.log('will this one run?');
}
```
