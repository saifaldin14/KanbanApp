import { useRef, useEffect } from "react";

export const useFocus = () => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    ref.current?.focus;
  });
  return ref;
};
