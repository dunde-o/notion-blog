import React, { useCallback, useLayoutEffect, useState } from "react";
import styles from "./Switch.module.scss";
import { SwitchProps } from "./Switch.type";
import DefaultSwitch from "./shared/DefaultSwitch";

const Switch: React.FC<SwitchProps> = (props) => {
  const {
    children,
    defaultSwitchProps,
    defaultAction,
    otherAction,
    commonAction,
    ...rest
  } = props;
  const [switchState, setSwitchState] = useState<boolean>(true);

  useLayoutEffect(() => {
    setSwitchState(defaultSwitchProps?.state ?? true);
  }, [defaultSwitchProps?.state]);

  const handleButtonClick = useCallback(() => {
    switchState ? otherAction?.() : defaultAction?.();
    commonAction?.();
    setSwitchState((state) => !state);
  }, [switchState, defaultAction, otherAction, commonAction]);

  return (
    <button className={styles.Switch} {...rest} onClick={handleButtonClick}>
      {defaultSwitchProps == null ? (
        children
      ) : (
        <DefaultSwitch state={switchState} icon={defaultSwitchProps.icon} />
      )}
    </button>
  );
};

Switch.displayName = "Switch";

export default Object.assign(Switch, { DefaultSwitch });
