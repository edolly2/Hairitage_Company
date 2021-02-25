import './Hairitage_Apt_Form.css';
import dayjs from 'dayjs';
const weekday = require('dayjs/plugin/weekday');
const weekOfYear = require('dayjs/plugin/weekOfYear');
const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const INITIAL_YEAR = dayjs().format('YYYY');
const INITIAL_MONTH = dayjs().format('M');

dayjs.extend(weekday);
dayjs.extend(weekOfYear);
document.getElementById('app').innerHTML =

    <
    div class = "calendar-month" >
    <!-- The calendar header -->
    <
    section class = "calendar-month-header" >
    <!-- Month name -->
    <
    div
id = "selected-month"
class = "calendar-month-header-selected-month" >
    July 2020 <
    /div>

<!-- Pagination -->
<
div class = "calendar-month-header-selectors" >
    <
    span id = "previous-month-selector" > << /span> <
span id = "present-month-selector" > Today < /span> <
span id = "next-month-selector" >> < /span> < /
    div > <
    /section>

<!-- Calendar grid header -->
<
ol
id = "days-of-week"
class = "day-of-week" >
    <
    li > Mon < /li>
    ... <
    li > Sun < /li> < /
    ol >

    <!-- Calendar grid -->
    <
    ol
id = "calendar-days"
class = "date-grid" >
    <
    li class = "calendar-day" >
    <
    span >
    1 <
    /span>
    ... <
    span >
    29 <
    /span> < /
    li > <
    /ol> < /
    div > ;
// Select the calendar grid header element
const daysOfWeekElement = document.getElementById('days-of-week');

// Loop through the array of weekdays
WEEKDAYS.forEach((weekday) => {
    // For each item in the array, make a list item element
    const weekDayElement = document.createElement('li');
    // Append a child element inside the list item...
    daysOfWeekElement.appendChild(weekDayElement);
    /// ...that contains the value in the array
    weekDayElement.innerText = weekday;
});

function getNumberOfDaysInMonth(year, month) {
    return dayjs(`${year}-${month}-01`).daysInMonth();
}

function createDaysForCurrentMonth(year, month) {
    return [...Array(getNumberOfDaysInMonth(year, month))].map((day, index) => {
        return {
            date: dayjs(`${year}-${month}-${index + 1}`).format('YYYY-MM-DD'),
            dayOfMonth: index + 1,
            isCurrentMonth: true,
        };
    });
}

function getWeekday(date) {
    return dayjs(date).weekday();
}

function createDaysForPreviousMonth(year, month) {
    const firstDayOfTheMonthWeekday = getWeekday(currentMonthDays[0].date);

    const previousMonth = dayjs(`${year}-${month}-01`).subtract(1, 'month');

    // Account for first day of the month on a Sunday (firstDayOfTheMonthWeekday === 0)
    const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday ?
        firstDayOfTheMonthWeekday - 1 :
        6;

    const previousMonthLastMondayDayOfMonth = dayjs(currentMonthDays[0].date)
        .subtract(visibleNumberOfDaysFromPreviousMonth, 'day')
        .date();

    return [...Array(visibleNumberOfDaysFromPreviousMonth)].map((day, index) => {
        return {
            date: dayjs(
                `${previousMonth.year()}-${previousMonth.month() + 1}-${
          previousMonthLastMondayDayOfMonth + index
        }`
            ).format('YYYY-MM-DD'),
            dayOfMonth: previousMonthLastMondayDayOfMonth + index,
            isCurrentMonth: false,
        };
    });
}

function createDaysForNextMonth(year, month) {
    const lastDayOfTheMonthWeekday = getWeekday(
        `${year}-${month}-${currentMonthDays.length}`
    );

    const visibleNumberOfDaysFromNextMonth = lastDayOfTheMonthWeekday ?
        7 - lastDayOfTheMonthWeekday :
        lastDayOfTheMonthWeekday;

    return [...Array(visibleNumberOfDaysFromNextMonth)].map((day, index) => {
        return {
            date: dayjs(`${year}-${Number(month) + 1}-${index + 1}`).format(
                'YYYY-MM-DD'
            ),
            dayOfMonth: index + 1,
            isCurrentMonth: false,
        };
    });
}
let currentMonthDays = createDaysForCurrentMonth(INITIAL_YEAR, INITIAL_MONTH);
let previousMonthDays = createDaysForPreviousMonth(
    INITIAL_YEAR,
    INITIAL_MONTH,
    currentMonthDays[0]
);
let nextMonthDays = createDaysForNextMonth(INITIAL_YEAR, INITIAL_MONTH);

let days = [
    ...this.previousMonthDays,
    ...this.currentMonthDays,
    ...this.nextMonthDays,
];

// Same as before ...

const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const INITIAL_YEAR = dayjs().format('YYYY');
const INITIAL_MONTH = dayjs().format('M');
const daysOfWeekElement = document.getElementById('days-of-week');

// Add weekdays to calendar header
WEEKDAYS.forEach((weekday) => {
    const weekDayElement = document.createElement('li');
    daysOfWeekElement.appendChild(weekDayElement);
    weekDayElement.innerText = weekday;
});

let currentMonthDays = createDaysForCurrentMonth(INITIAL_YEAR, INITIAL_MONTH);
let previousMonthDays = createDaysForPreviousMonth(INITIAL_YEAR, INITIAL_MONTH);
let nextMonthDays = createDaysForNextMonth(INITIAL_YEAR, INITIAL_MONTH);
let days = [...previousMonthDays, ...currentMonthDays, ...nextMonthDays];

console.log(days);

function getNumberOfDaysInMonth(year, month) {
    return dayjs(`${year}-${month}-01`).daysInMonth();
}

function createDaysForCurrentMonth(year, month) {
    return [...Array(getNumberOfDaysInMonth(year, month))].map((day, index) => {
        return {
            date: dayjs(`${year}-${month}-${index + 1}`).format('YYYY-MM-DD'),
            dayOfMonth: index + 1,
            isCurrentMonth: true,
        };
    });
}

function createDaysForPreviousMonth(year, month) {
    const firstDayOfTheMonthWeekday = getWeekday(currentMonthDays[0].date);
    const previousMonth = dayjs(`${year}-${month}-01`).subtract(1, 'month');

    // Cover first day of the month being sunday (firstDayOfTheMonthWeekday === 0)
    const visibleNumberOfDaysFromPreviousMonth = firstDayOfTheMonthWeekday ?
        firstDayOfTheMonthWeekday - 1 :
        6;

    const previousMonthLastMondayDayOfMonth = dayjs(currentMonthDays[0].date)
        .subtract(visibleNumberOfDaysFromPreviousMonth, 'day')
        .date();

    return [...Array(visibleNumberOfDaysFromPreviousMonth)].map((day, index) => {
        return {
            date: dayjs(
                `${previousMonth.year()}-${previousMonth.month() + 1}-${
          previousMonthLastMondayDayOfMonth + index
        }`
            ).format('YYYY-MM-DD'),
            dayOfMonth: previousMonthLastMondayDayOfMonth + index,
            isCurrentMonth: false,
        };
    });
}

function createDaysForNextMonth(year, month) {
    const lastDayOfTheMonthWeekday = getWeekday(
        `${year}-${month}-${currentMonthDays.length}`
    );
    const nextMonth = dayjs(`${year}-${month}-01`).add(1, 'month');
    const visibleNumberOfDaysFromNextMonth = lastDayOfTheMonthWeekday ?
        7 - lastDayOfTheMonthWeekday :
        lastDayOfTheMonthWeekday;
    return [...Array(visibleNumberOfDaysFromNextMonth)].map((day, index) => {
        return {
            date: dayjs(
                `${nextMonth.year()}-${nextMonth.month() + 1}-${index + 1}`
            ).format('YYYY-MM-DD'),
            dayOfMonth: index + 1,
            isCurrentMonth: false,
        };
    });
}

function getWeekday(date) {
    return dayjs(date).weekday();
}

const calendarDaysElement = document.getElementById('calendar-days');

function appendDay(day, calendarDaysElement) {
    const dayElement = document.createElement('li');
    const dayElementClassList = dayElement.classList;

    // Generic calendar day class
    dayElementClassList.add('calendar-day');

    // Container for day of month number
    const dayOfMonthElement = document.createElement('span');

    // Content
    dayOfMonthElement.innerText = day.dayOfMonth;

    // Add an extra class to differentiate current month days from prev/next month days
    if (!day.isCurrentMonth) {
        dayElementClassList.add('calendar-day--not-current');
    }

    // Append the element to the container element
    dayElement.appendChild(dayOfMonthElement);
    calendarDaysElement.appendChild(dayElement);
}