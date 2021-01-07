import { RefObject, useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ACCESS_TOKEN } from '../features/auth/constants';
import { fetchMeAction } from '../features/auth/thunks';
import { RootState } from '../store/entities';

export const useAuth = (): boolean[] => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);
  const hasToken = !!localStorage.getItem(ACCESS_TOKEN);
  const hasUser = !!user;

  useEffect(() => {
    if (hasToken) {
      dispatch(fetchMeAction());
    }
  }, []);

  return [hasToken, hasUser];
};

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

export const useLongPress = (
  cb: () => void,
  ms = 300,
  onMouseLeave?: () => void,
): any => {
  const [startLongPress, setStartLongPress] = useState(false);

  const start = useCallback(() => {
    setStartLongPress(true);
  }, []);

  const stop = useCallback(() => {
    setStartLongPress(false);
  }, []);

  const handleLeave = () => {
    stop();

    if (onMouseLeave) {
      onMouseLeave();
    }
  };

  useEffect(() => {
    let timerId: number | undefined;

    if (startLongPress) {
      timerId = setTimeout(cb, ms);
    } else {
      clearTimeout(timerId);
    }

    return () => clearTimeout(timerId);
  }, [startLongPress]);

  return {
    onMouseDown: start,
    onMouseUp: stop,
    onMouseLeave: handleLeave,
    onTouchStart: start,
    onTouchEnd: stop,
  };
};
