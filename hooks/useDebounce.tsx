import { useDebounce } from "@uidotdev/usehooks";
import { useState } from "react";

export const useDebouce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useDebounce(() => {
    setDebouncedValue(value);
  }, delay);

  return debouncedValue;
};
