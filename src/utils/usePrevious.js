import { useEffect, useRef } from "react";

// Hook
function usePrevious(value) {
  const ref = useRef();

  // Store current value in ref
  useEffect(() => {
    ref.current = value;
  }, [value]);

  // Return previous value
  return ref.current;
}

export default usePrevious;
