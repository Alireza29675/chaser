# Chaser

![chaser](https://user-images.githubusercontent.com/2771377/60268250-400b2500-9901-11e9-8ab4-69478a4d9dc2.png)

JavaScript variable chaser

## Installation

```bash
npm install --save chaser
```

## Usage

```javascript
const chaser = require('chaser')

const myAnimatedVar = chaser(12) // 12 is our initial value here
myAnimateVar.target = 20

setInterval(() => {
    console.log(myAnimatedVar.value) // You can use .value anywhere and it will be generated accurately by timing function and passed time.
}, 10)
```

## Chaser using React Hooks with `useChaser`

```javascript
import { useChaser } from 'chaser'

function MovingBox() {
    const [posX, setPosX] = useChaser(0 /* initialValue */)

    return (
        <div style={{ transform: `translateX(${posX}px)` }}>
            <button onClick={() => setPosX(Math.random() * 100)} />
        </div>
    )
}
```

## Example

If you're looking for an example, here's a unclean example! but works:
[https://alireza29675.github.io/chaser/](https://alireza29675.github.io/chaser/)

## Contribute

Put issues! Suggest me what you need.
