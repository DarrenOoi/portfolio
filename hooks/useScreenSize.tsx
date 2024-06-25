import { useState, useEffect, useLayoutEffect, useCallback } from 'react';
import throttle from 'lodash/throttle';

type ScreenSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';

interface ScreenDimension {
  screenSize: ScreenSize | undefined;
  width: number | undefined;
  height: number | undefined;
}

function getScreenSize(width: number): ScreenSize {
  if (width >= 1536) {
    return '2xl';
  } else if (width >= 1280) {
    return 'xl';
  } else if (width >= 1024) {
    return 'lg';
  } else if (width >= 768) {
    return 'md';
  } else if (width >= 640) {
    return 'sm';
  } else {
    return 'xs';
  }
}

export function useScreenSize(): ScreenDimension {
  const [dimension, setDimension] = useState<ScreenDimension>({
    screenSize: undefined, // Default to 'xs'
    width: undefined,
    height: undefined,
  });

  // Define the resize handler
  const handleResize = useCallback(() => {
    if (typeof window !== 'undefined') {
      const newSize = getScreenSize(window.innerWidth);
      setDimension({
        screenSize: newSize,
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
  }, []);

  // Create a throttled version of the resize handler
  const throttledHandleResize = useCallback(throttle(handleResize, 300), [
    handleResize,
  ]);

  useLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      // Run the handler immediately to set the initial screen size
      handleResize();

      // Set up the throttled resize listener
      window.addEventListener('resize', throttledHandleResize);

      // Clean up
      return () => {
        throttledHandleResize.cancel(); // Cancel the throttle function on cleanup
        window.removeEventListener('resize', throttledHandleResize);
      };
    }
  }, [throttledHandleResize]);

  return dimension;
}
