# Concept Review

Assume you are in a pair programming session, and are the navigator. Your driver for this exercise will be [chatGPT](https://chat.openai.com/). For each of the lines of code below, provide the (nerdy) english instructions that you would describe to chatGPT so that it will return the code shown.

For example, if you wanted chatGPT to return this code:

```javascript
const number = parseInt("2");
```

You would say:

> Use JS to declare a variable called number and assign it the return value from running the parseInt function with the argument "2"

## JavaScript Objects

```javascript
const character = {
  name: 'Mario',
  age: 35,
  occupation: 'Plumber',
  powerUps: ['Super Mushroom', 'Fire Flower', 'Starman'],
  getBio: function() {
    return `${this.name} is a ${this.age}-year-old ${this.occupation} who has the following power-ups: ${this.powerUps.join(", ")}.`;
  }
};
```

```javascript
console.log(character.name);
```

```javascript
const keyword = 'powerUps';
```

```javascript
console.log(character[keyword][1]);
```

```javascript
const props = ['name', 'age', 'occupation', 'powerUps', 'getBio'];
```

```javascript
for( let i = 0; i < props.length; i++) {
  console.log( props[i],  character[props[i]]  );
}
```

## Functions

```javascript
function sayHi(name) {
  console.log('Hi', name);
}
```

```javascript
const screamHello = function(name) {
  console.log( 'HELLO', name.toUpperCase() );
}
```

```javascript
sayHi('Ada');
```

```javascript
screamHello('Victor');
```

## Constructors

```javascript
function Person(name) {
  this.fullName = name;
}
```

```javascript
Person.prototype.sayMyName = function() {
  console.log(this.fullName.toUpperCase());
}
```

```javascript
Person.whisper = function() {
  console.log('sssshhhh');
}
```

```javascript
Person.sayMyName();
```

```javascript
const ada = new Person('Ada Lovelace');
```

```javascript
ada.sayMyName();
```

```javascript
ada.whisper();
```

```javascript
Person.whisper();
```
