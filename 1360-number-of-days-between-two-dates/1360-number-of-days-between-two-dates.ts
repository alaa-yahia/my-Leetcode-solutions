function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function daysSince1971(year: number, month: number, day: number): number {
  const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let monthsToDays =
  months.slice(0, month-1).reduce((partialSum, a) => partialSum + a, 0) +
    (month> 2 && isLeapYear(year) ? 1 : 0);
  let yearsToDays = 0;
  for (let i = 1971; i < year; i++) {
    yearsToDays += isLeapYear(i) ? 366 : 365;
  }
  return yearsToDays + monthsToDays + day;
}

function daysBetweenDates(d1: string, d2: string): number {
  const date1 = d1.split('-').map((ele) => Number(ele)) as [number,number,number];
  const date2 = (d2.split('-').map((ele) => Number(ele))) as [number,number,number]; ;
  return Math.abs(daysSince1971(...date1 ) - daysSince1971(...date2));
}