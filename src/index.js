import linear from 'eases/linear'
import easeIn from 'eases/sine-in'
import easeOut from 'eases/sine-out'

const clamp = (val, min, max) => Math.min(max, Math.max(min, val));
class Chaser {

    constructor (defaultValue = 0, duration = 1000, timingFunction = linear) {
        this._initial = this._target = defaultValue;
        this.timingFunction = timingFunction;
        this.duration = duration;
        this.startTime = 0;
    }

    set target (value) {
        this.startTime = Date.now()
        this._initial = this.value;
        this._target = value;
    }

    get target () {
        return this._target;
    }

    set value (instantValue) {
        // TODO: Instant change
    }

    get value () {
        let passedTime = clamp(((Date.now() - this.startTime) / this.duration), 0, 1);
        return this._initial + (this._target - this._initial) * this.timingFunction(passedTime);
    }

}

export default (defaultValue, duration, timingFunction) => {
    const chaser = new Chaser(defaultValue, duration, timingFunction);
    return chaser;
}