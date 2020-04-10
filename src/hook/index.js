import { useRef, useState, useEffect, useCallback } from "react";
import chaser from "../index";

function useChaser(initialValue, duration = 1000) {
  const chasingValue = useRef(chaser(initialValue, duration, "ease-in-out"));
  const [target, setTargetState] = useState(initialValue);
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    if (!chasingValue) return;
    requestAnimationFrame(() => {
      setValue(chasingValue.current.value);
    });
  }, [target, value, setValue, chasingValue]);

  const setTarget = useCallback(
    target => {
      chasingValue.current.target = target;
      setTargetState(target);
    },
    [chasingValue]
  );

  return [value, setTarget];
}

module.exports = {
  useChaser
};
