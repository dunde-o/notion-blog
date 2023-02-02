export const changeColorPalette = {
  getRootStyle() {
    const rootElement = document.querySelector(":root");
    return rootElement == null ? null : getComputedStyle(rootElement);
  },
  setBodyStyle(variable: string, value: string) {
    document.body.style.setProperty(variable, value);
  },
  dark() {
    const root = this.getRootStyle();
    if (root == null) {
      return;
    }

    this.setBodyStyle("--theme-mode", "dark");
    this.setBodyStyle(
      "--font-color_default",
      root.getPropertyValue("--dark--font-color_default")
    );
    this.setBodyStyle(
      "--background-color_default",
      root.getPropertyValue("--dark--background-color_default")
    );
    this.setBodyStyle(
      "--background-color_gradiant",
      root.getPropertyValue("--dark--background-color_gradiant")
    );
  },
  light() {
    const root = this.getRootStyle();
    if (root == null) {
      return;
    }

    this.setBodyStyle("--theme-mode", "light");
    this.setBodyStyle(
      "--font-color_default",
      root.getPropertyValue("--light--font-color_default")
    );
    this.setBodyStyle(
      "--background-color_default",
      root.getPropertyValue("--light--background-color_default")
    );
    this.setBodyStyle(
      "--background-color_gradiant",
      root.getPropertyValue("--light--background-color_gradiant")
    );
  },
};
