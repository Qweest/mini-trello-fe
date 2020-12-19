import { RefObject, useEffect } from 'react';

export const useOutsideClick = (
  ref: RefObject<HTMLElement>,
  cb: () => void,
  deps?: any[],
): void => {
  const handleMouseDown = (e: MouseEvent) => {
    if (ref.current?.contains(e.target as Node)) {
      return;
    }

    cb();
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown);

    return () => {
      document.removeEventListener('mousedown', handleMouseDown);
    };
  }, deps);
};
