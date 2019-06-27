# Chaser

JavaScript variable chaser

## Installation

```bash
npm install --save chaser
```

## Usage

```javascript
const chaser = require('chaser');

const myAnimatedVar = chaser(12); // 12 is our initial value here
myAnimateVar.target = 20;

setInterval(() => {
    console.log(myAnimatedVar.value); // You can use .value anywhere and it will be generated accurately by timing function and passed time.
}, 10)
```

## More options

```javascript
const chaser = require('chaser');

const myAnimatedVar = chaser();
myAnimateVar.duration = 2000; // 2000ms of transition (default 1000ms)
myAnimateVar.target = 20;
```

## Example

If you're looking for an example, here's a unclean example! but works:
[https://alireza29675.github.io/chaser/](https://alireza29675.github.io/chaser/)

## Contribute

I'll be glad if you fork and contribute this. I believe it can help in our apps.