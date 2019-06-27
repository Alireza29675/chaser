import linear from 'eases/linear'
import easeIn from 'eases/sine-in'
import easeOut from 'eases/sine-out'

const chasers = [];

// TODO: Calling center must be improved in performance (Smart calls)
const centralLoop = () => {
    for (const chaser of chasers) chaser.loop();
    requestAnimationFrame(centralLoop);
}
centralLoop();

class Chaser {

    static LINEAR = linear;
    static EASE_IN = easeIn;
    static EASE_OUT = easeOut;

    timingFunction = Chaser.LINEAR;
    value = 0;
    target = 0;

    duration = 1000;

    constructor (defaultValue, duration, timingFunction) {
        this.value = this.target = defaultValue;
    }

    loop () {

    }
}

export default chaser = (defaultValue, duration, timingFunction) => {
    const chaser = new Chaser(defaultValue, duration, timingFunction);
    chasers.push(chaser);
    return chaser;
}