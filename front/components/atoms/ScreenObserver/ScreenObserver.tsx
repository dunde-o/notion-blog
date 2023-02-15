import React, { createRef, useLayoutEffect } from "react";
import { ScreenObserverProps } from "./ScreenObserver.type";

const ScreenObserver: React.FC<ScreenObserverProps> = (props) => {
  const { onInScreen, onOutScreen, wait = false } = props;
  const ref = createRef<HTMLDivElement>();

  useLayoutEffect(() => {
    let observer: IntersectionObserver;
    if (ref.current != null) {
      observer = new IntersectionObserver(
        async (entries, _observer) => {
          if (wait) {
            return;
          }
          const [entry] = entries;
          _observer.unobserve(entry.target);
          if (entry.isIntersecting) {
            await onInScreen?.();
          } else {
            await onOutScreen?.();
          }
          _observer.observe(entry.target);
        },
        { threshold: 1 }
      );
      observer.observe(ref.current);
    }
    return () => {
      if (observer != null) {
        observer.disconnect();
      }
    };
  }, [ref, wait, onInScreen, onOutScreen]);
  return <div ref={ref} />;
};

ScreenObserver.displayName = "ScreenObserver";

export default ScreenObserver;
