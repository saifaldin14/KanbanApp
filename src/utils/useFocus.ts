import { useRef, useEffect } from "react";

export const useFocus = () => {
  // use the useRef hook to get access to the rendered input element
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    ref.current?.focus;
  });
  return ref;
};
