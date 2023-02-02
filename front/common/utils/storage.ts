import {
  LOCAL_STORAGE,
  LocalStorageKey,
  LocalStorageValue,
} from "@common/constants/storage";
import { isEmpty } from "@local/shared/dist/util/validate";

export const customLocalStorage = {
  get: <K extends LocalStorageKey>(key: K) => {
    const value = localStorage.getItem(key);
    return isEmpty(value) ? undefined : (value as LocalStorageValue<K>);
  },
  set: <K extends LocalStorageKey>(key: K, value: LocalStorageValue<K>) => {
    localStorage.setItem(key, value ?? "");
  },
};

export const loadLocalStorage = () =>
  Object.keys(LOCAL_STORAGE).forEach((key) => {
    LOCAL_STORAGE[key as LocalStorageKey] = customLocalStorage.get(
      key as LocalStorageKey
    );
  });
