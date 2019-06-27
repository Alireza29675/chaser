import linear from 'eases/linear'
import easeIn from 'eases/sine-in'
import easeOut from 'eases/sine-out'

const clamp = (val, min, max) => Math.min(max, Math.max(min, val));

const types = {
    linear,
    'ease-in': easeIn,
    'ease-out': easeOut
}

class Chaser {

    constructor (defaultValue = 0, duration = 1000, timingFunction = 'ease-in') {
        this._initial = this._target = defaultValue;
        this.timingFunction = timingFunction;
        this.duration = duration;
        this.startTime = 0;
    }

    set timingFunction (value) {
        if (!types[value]) return console.error(`${value} is not a timing-function!`);
        this._timingFunction = types[value];
        this._timingFunctionName = value;
    }

    get timingFunction () {
        return this._timingFunctionName;
    }

    set target (value) {
        if (value === this.target) return;
        this._initial = this.value;
        this.startTime = Date.now()
        this._target = value;
    }

    get target () {
        return this._target;
    }

    set value (instantValue) {
        this._initial = this._target = instantValue;
    }

    get value () {
        let passedTime = clamp(((Date.now() - this.startTime) / this.duration), 0, 1);
        return this._initial + (this._target - this._initial) * this._timingFunction(passedTime);
    }

}

export default (defaultValue, duration, timingFunction) => {
    const chaser = new Chaser(defaultValue, duration, timingFunction);
    return chaser;
}