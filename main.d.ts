type types = 'linear' | 'ease-in' | 'ease-out'

declare interface Chaser {
    target: number,
    value: number,
    duration: number,
    timingFunction: types
}

declare let chaser: (defaultValue: number, duration: number, timingFunction: types) => Chaser;

export default chaser;