import { Mode } from "@common/types/mode";

export const LOCAL_STORAGE = {
  mode: undefined as Mode | undefined,
};

export type LocalStorageKey = keyof typeof LOCAL_STORAGE;
export type LocalStorageValue<K extends LocalStorageKey> =
  typeof LOCAL_STORAGE[K];
