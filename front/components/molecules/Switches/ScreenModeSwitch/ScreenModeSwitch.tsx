import React, { useCallback, useLayoutEffect, useState } from "react";
import Switch from "@components/atoms/Switch/Switch";
import { Mode } from "@common/types/mode";
import { customLocalStorage, loadLocalStorage } from "@common/utils/storage";
import "@common/styles/variables/_color.scss";
import { changeColorPalette } from "@common/utils/color";

const ScreenModeSwitch: React.FC = () => {
  const [screenMode, setScreenMode] = useState<Mode>("light");

  useLayoutEffect(() => {
    const cachedMode = customLocalStorage.get("mode");
    if (cachedMode != null) {
      setScreenMode(cachedMode);
      changeColorPalette[cachedMode]();
      return;
    }
    const isSystemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (isSystemDark) {
      setScreenMode("dark");
    }
    console.log(isSystemDark);
  }, []);

  const handleSwitchClick = useCallback(() => {
    setScreenMode((state) => {
      const changeState = state === "dark" ? "light" : "dark";
      customLocalStorage.set("mode", changeState);
      loadLocalStorage();
      changeColorPalette[changeState]();
      return changeState;
    });
  }, []);

  return (
    <Switch
      commonAction={handleSwitchClick}
      defaultSwitchProps={{
        state: screenMode === "light",
        icon: { default: "☀︎", other: "☾" },
      }}
    />
  );
};

ScreenModeSwitch.displayName = "ScreenModeSwitch";

export default ScreenModeSwitch;
