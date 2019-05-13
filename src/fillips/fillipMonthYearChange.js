// fillipMonthYearChange

import { store } from './../index.js';

let fillipMonthYearChange = e => {
    var target = e.target;

    if (target.tagName !== 'SPAN') return; 

    const state = store.getState();
    const currentDate = state.currentDate;
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    let newDate;
    let currentDayInTheCalendar = 1;

    switch (target.className) {
        case 'icon-undo2':
            newDate = new Date(currentYear - 1, currentMonth, 1);
            break;

        case 'icon-arrow-left2':
            newDate = new Date(currentYear, currentMonth - 1, 1);
            break;

        case 'icon-arrow-right2':
            newDate = new Date(currentYear, currentMonth + 1, 1);
            break;

        case 'icon-redo2':
            newDate = new Date(currentYear + 1, currentMonth, 1);
            break;

        default:
            break;
    }

    let currentLocalStorageKey = newDate.getFullYear() + ' ' + newDate.getMonth() + ' ' + currentDayInTheCalendar;
    let todaysTasks = JSON.parse(localStorage.getItem(currentLocalStorageKey));

    store.dispatch({
        type: 'DATE-MONTH-YEAR-CALENDAR',
        payload: {
            currentDate: newDate,
            currentDayInTheCalendar: currentDayInTheCalendar,
            currentLocalStorageKey: currentLocalStorageKey,
            task: todaysTasks,
        },
    })
}

export {
    fillipMonthYearChange
}