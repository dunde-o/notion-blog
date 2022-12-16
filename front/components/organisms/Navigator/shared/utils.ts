import React, { useCallback, useLayoutEffect, useRef, useState } from 'react';
import { NavigatorProps } from '../Navigator.type';

/**
 * Navigator 와 함께 사용해야 합니다.
 * @example
 *  <main onScroll={scrollHandler}>
 *    <Navigator ref={navRef} position={navPosition} />
 *    ...
 *  </main>
 */
export const useNavigatorScroll = () => {
  const navRef = useRef<HTMLElement>(null);
  const [navHeight, setNavHeight] = useState<number>(Infinity);
  const [navPosition, setNavPosition] =
    useState<NavigatorProps["position"]>("absolute");

  const scrollHandler: React.UIEventHandler<HTMLElement> = useCallback(
    (event) => {
      if (navHeight < event.currentTarget.scrollTop) {
        setNavPosition("fixed");
      } else {
        setNavPosition("absolute");
      }
    },
    [navHeight]
  );

  useLayoutEffect(() => {
    setNavHeight(navRef.current?.offsetHeight ?? Infinity);
  }, [navRef]);

  return { navRef, navPosition, scrollHandler };
};
