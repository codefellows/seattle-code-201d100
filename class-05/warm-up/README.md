# Concept Review

Assume you are in a pair programming session, and are the navigator. Your driver for this exercise will be [chatGPT](https://chat.openai.com/). For each of the lines of code below, provide the (nerdy) english instructions that you would describe to chatGPT so that it will return the code shown.

For example, if you wanted chatGPT to return this code:

```javascript
let number = parseInt('2');
```

You would say:
> Declare a variable called number and assign it the return value from running the parseInt function with the argument '2'

## Javascript Fundamentals

```javascript
let name = 'Hedy Lamarr';
```

```javascript
alert(`${name} was an Austrian-born actress and dubbed 'the mother of Wi-Fi'` );
```

```javascript
let numArray = new Array(10).fill('');
```

```javascript
let nums = [];

for( let i = 1; i <= 100; i++ ) {
  nums.push(i);
}
```

```javascript
console.log(nums.length);
```

```javascript
console.log(nums[3]);
```

## CSS Selectors

Ref: https://teamtreehouse.com/library/css-selector-reference

Describe the elements these selectors would target to chatGPT and verify that chatGPT is writing or providing you correct code examples. If you are unsure of what these selectors would target, refer to the reference link above.

```css
div
```

```css
div.car
```

```css
.car
```

```css
#thing
```

```css
div > span
```

```css
div span
```

```css
div + span
```

```css
div ~ span
```

```css
input[type=text]
```

```css
div:hover
```
