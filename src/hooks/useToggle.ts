import { useState, useCallback } from 'react';

/**
 * Custom hook for boolean toggle state
 * 
 * @param initialValue - Initial boolean value (default: false)
 * @returns [value, toggle, setValue] - Current value, toggle function, and setter
 * 
 * @example
 * const [isOpen, toggle] = useToggle(false);
 * <button onClick={toggle}>Toggle</button>
 */
export function useToggle(initialValue: boolean = false) {
  const [value, setValue] = useState<boolean>(initialValue);

  const toggle = useCallback(() => {
    setValue((prev) => !prev);
  }, []);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return [value, toggle, setValue, setTrue, setFalse] as const;
}
