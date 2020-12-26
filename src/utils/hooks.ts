import { RefObject, useEffect } from 'react';

export const useOutsideClick = (
  ref: RefObject<HTMLElement>,
  cb: (e?: MouseEvent) => void,
  focused: boolean,
  otherDeps: any[] = [],
): void => {
  const handleMouseDown = (e: MouseEvent) => {
    if (ref.current?.contains(e.target as Node)) {
      return;
    }

    cb(e);
  };

  useEffect(() => {
    if (focused) {
      document.addEventListener('mousedown', handleMouseDown);

      return () => {
        document.removeEventListener('mousedown', handleMouseDown);
      };
    }
  }, [focused, ...otherDeps]);
};

export const useScrollOnFocus = (
  ref: RefObject<HTMLElement>,
  focused: boolean,
): void => {
  useEffect(() => {
    if (focused) {
      ref.current?.scrollIntoView(false);
    }
  }, [focused]);
};
