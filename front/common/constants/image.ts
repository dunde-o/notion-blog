/**
 * square, pixel unit
 * @example
 * ICON: 50,
 * SMALL: 100,
 * MIDDLE: 500,
 * LARGE: 1000,
 * BACKGROUND: 2000
 */
export const IMG_SIZES = {
  ICON: { width: 50, height: 50 },
  SMALL: { width: 100, height: 100 },
  MIDDLE: { width: 500, height: 500 },
  LARGE: { width: 1000, height: 1000 },
  BACKGROUND: { width: 2000, height: 2000 },
};

export const IMG_DEFAULT_PATH = "/assets/images";

export const IMG_INFOS = {
  NOT_FOUND: { fileName: "not_found.png", description: "not found image" },
  SAMPLE: { fileName: "sample.jpeg", description: "sample image" },
  SETTING: { fileName: "setting.png", description: "setting image" },
  GITHUB: { fileName: "github.png", description: "github icon image" },
  CLOSE_X: { fileName: "close_x.svg", description: "close button image" },
  LOADING: { fileName: "loading.gif", description: "loading image" },
};

export const IMG_PATHS: Record<keyof typeof IMG_INFOS, string> = Object.entries(
  IMG_INFOS
).reduce(
  (dict, [key, { fileName }]) => ({
    ...dict,
    [key]: IMG_DEFAULT_PATH + "/" + fileName,
  }),
  {} as Record<keyof typeof IMG_INFOS, string>
);

export const IMG_PROPS: Record<
  keyof typeof IMG_INFOS,
  { src: string; alt: string }
> = (Object.keys(IMG_INFOS) as (keyof typeof IMG_INFOS)[]).reduce(
  (dict, key) => ({
    ...dict,
    [key]: { src: IMG_PATHS[key], alt: IMG_INFOS[key].description },
  }),
  {} as Record<keyof typeof IMG_INFOS, { src: string; alt: string }>
);
