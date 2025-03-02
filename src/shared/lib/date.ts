import { format, isToday, isYesterday } from "date-fns-jalali";

// All utility functions for working with date
export function persianDate(date: string | Date) {
  return format(new Date(date), "yyyy/MM/dd");
}

export function formatDateWithTime(date: string | Date) {
  const time = format(date, "HH:mm");
  if (isToday(date)) {
    return `امروز  ${time}`;
  } else if (isYesterday(date)) {
    return `دیروز  ${time}`;
  } else {
    return format(date, `yyyy/MM/dd ,  ${time}`);
  }
}

export function persianDateRow(date: string | Date) {
  if (isToday(date)) {
    return `امروز`;
  } else if (isYesterday(date)) {
    return `دیروز`;
  } else {
    return format(date, `yyyy/MM/dd`);
  }
}

export function timeDate(date: string | Date) {
  return format(new Date(date), "HH:mm");
}
