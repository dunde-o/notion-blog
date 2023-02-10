export const clearEmptyObject = <T extends Object>(
  obj: T
): Exclude<T, null | undefined> =>
  Object.entries(obj)
    .filter(([_, value]) => value != null)
    .reduce(
      (newObj, [key, value]) => ({
        ...newObj,
        [key]: value,
      }),
      {} as Exclude<T, null | undefined>
    );
