import CalendarDates from 'calendar-dates';
const calendarDates = new CalendarDates();
const date = new Date();

let options = { weekday: 'short' };

const main = async () => {
  const meta = await calendarDates.getMatrix(date);
  console.dir(meta);
};

main();
