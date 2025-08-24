import { useEffect } from 'react';

interface KeyPressOptions {
  onKeyDown?: () => void;
  onKeyUp?: () => void;
}

export function useKeyPress(targetKey: string, options: KeyPressOptions) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === targetKey && options.onKeyDown) {
        options.onKeyDown();
      }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === targetKey && options.onKeyUp) {
        options.onKeyUp();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [targetKey, options.onKeyDown, options.onKeyUp]);
}