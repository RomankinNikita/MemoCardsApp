import { useCallback, useState } from "react";

export default function useToggle(initialValue: boolean = false) {
  const [isOn, setIsOn] = useState<boolean>(initialValue);

  const toggle = useCallback(() => {
    setIsOn((p) => !p);
  }, []);

  const on = useCallback(() => {
    setIsOn(true);
  }, []);

  const off = useCallback(() => {
    setIsOn(false);
  }, []);

  return { on, off, isOn, toggle };
}
