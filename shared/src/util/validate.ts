export const isEmpty = (value: unknown) => {
  if (typeof value === 'string') {
    return value === '';
  }
  return value == null;
};

export const isAllNotEmpty = (array: unknown[]) => !array.some(isEmpty);
