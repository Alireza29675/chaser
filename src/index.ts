import * as easing from './easing'

const clamp = (val: number, min: number, max: number) => Math.min(max, Math.max(min, val))

interface IChaserArgs {
    defaultValue: number
    duration: number
    timingFunction: easing.TTimingFunction
}

class Chaser {
    public timingFunction: easing.TTimingFunction
    public duration: number

    private privateInitial: number
    private privateTarget: number
    private startTime: number = 0

    constructor({ defaultValue, duration, timingFunction }: IChaserArgs) {
        this.privateInitial = this.privateTarget = defaultValue
        this.timingFunction = timingFunction
        this.duration = duration
    }

    set target(value: number) {
        if (value === this.target) {
            return
        }
        this.privateInitial = this.value
        this.startTime = Date.now()
        this.privateTarget = value
    }

    get target() {
        return this.privateTarget
    }

    set value(instantValue: number) {
        this.privateInitial = this.privateTarget = instantValue
    }

    get value() {
        const passedTime = clamp((Date.now() - this.startTime) / this.duration, 0, 1)
        return this.privateInitial + (this.privateTarget - this.privateInitial) * this.timingFunction(passedTime)
    }
}

export default ({ defaultValue = 0, duration = 1000, timingFunction = easing.easeInCubic }: IChaserArgs) => {
    const chaser = new Chaser({
        defaultValue,
        duration,
        timingFunction,
    })
    return chaser
}

export { easing }
