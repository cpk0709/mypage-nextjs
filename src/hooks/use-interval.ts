import { useEffect, useRef } from 'react';

type Props = {
  callback: () => void;
  delay: number | null;
};

function useInterbal({ callback, delay }: Props) {
  const savedCallback = useRef<() => void>();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);

      return () => clearInterval(id);
    }
  }, [delay]);

  return savedCallback.current;
}

export default useInterbal;
