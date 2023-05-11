# Class 09 Lecture Notes

## Events

### Browser Events

#### Types

- click
- submit(when a form is submitted)
- keypress
- hover
- mouseover
- page load

### Javascript Code: Event Listener

- Target an HTML element to "listen" to
- `.addEventListener()` method that takes in 2 arguments
  - type of event listed as a string
  - event handler // callback function -> a function that is passed in another function as an arg
    - WE DO NOT INVOKE CALLBACKS - the eventListner method will do that for us when it hears the event

```javascript

let button = document.querySelector('button');
let myButton = document.getElementById('my-button');

button.addEventListener('click', handleClick);  // method to listen to an HTML element
```

### JavaScript - Code pt 2: Event Handler - Callback function

- our handler gets passed a special object behind the scenes called 'event'.

```javascript
function handleClick(event){
  console.log('this button was clicked!');
}
```

### OLD WAYS - we won't be doing this!

```html
<button onClick="handleClick">CLICK ME!</button>
```

```javascript
button.onClick = handleClick;
```
