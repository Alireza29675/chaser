export type TTimingFunction = (t: number) => number

export const linear: TTimingFunction = (t: number) => t
export const easeInQuad: TTimingFunction = (t: number) => t * t
export const easeOutQuad: TTimingFunction = (t: number) => t * (2 - t)
export const easeInOutQuad: TTimingFunction = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t)
export const easeInCubic: TTimingFunction = (t: number) => t * t * t
export const easeOutCubic: TTimingFunction = (t: number) => --t * t * t + 1
export const easeInOutCubic: TTimingFunction = (t: number) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
export const easeInQuart: TTimingFunction = (t: number) => t * t * t * t
export const easeOutQuart: TTimingFunction = (t: number) => 1 - --t * t * t * t
export const easeInOutQuart: TTimingFunction = (t: number) => (t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t)
export const easeInQuint: TTimingFunction = (t: number) => t * t * t * t * t
export const easeOutQuint: TTimingFunction = (t: number) => 1 + --t * t * t * t * t
