type types = 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out'

declare interface Chaser {
    target: number,
    value: number,
    duration: number,
    timingFunction: types
}

declare let chaser: (defaultValue: number, duration?: number, timingFunction?: types) => Chaser;

declare module 'chaser' {
    export default chaser;
}