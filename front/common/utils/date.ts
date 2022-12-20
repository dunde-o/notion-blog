/**
 * Date 형식을 "yy. MM. dd. hh:mm" 형태로 변환한다.
 * @param date
 */
export const getDateFormat = (date: Date) => {
  const locales: string | string[] = "default";
  const options: Intl.DateTimeFormatOptions = {
    dateStyle: "short",
    timeStyle: "short",
    hour12: false,
    hourCycle: "h24",
  };

  return new Intl.DateTimeFormat(locales, options).format(date);
};
