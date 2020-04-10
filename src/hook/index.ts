import { useCallback, useEffect, useRef, useState } from 'react'
import chaser from '../index'

export const useChaser = (initialValue: number, duration: number = 1000) => {
    const chasingValue = useRef(
        chaser({
            duration,
            initialValue,
        }),
    )
    const [targetState, setTargetState] = useState(initialValue)
    const [value, setValue] = useState(initialValue)

    useEffect(() => {
        if (!chasingValue) {
            return
        }
        requestAnimationFrame(() => {
            setValue(chasingValue.current.value)
        })
    }, [targetState, value, setValue, chasingValue])

    const setTarget = useCallback(
        target => {
            chasingValue.current.target = target
            setTargetState(target)
        },
        [chasingValue],
    )

    return [value, setTarget]
}
