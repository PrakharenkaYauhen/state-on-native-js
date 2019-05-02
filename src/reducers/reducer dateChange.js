// reducer case 'DATE-CHANGE-CALENDAR'

// import { addTaskInput } from './../index.js';

function dateChange(nextState, state, action) {
    const currentDate = action.payload.currentDate;
    const currentDayInTheCalendar = action.payload.currentDayInTheCalendar;
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    let currentLocalStorageKey = currentYear + ' ' + currentMonth + ' ' + currentDayInTheCalendar;
    let todaysTasks = JSON.parse(localStorage.getItem(currentLocalStorageKey));

    console.log(action);
    nextState = {
        task: todaysTasks,
        // modalActive: state.modalActive,
        currentDate: action.payload.currentDate,
        currentDayInTheCalendar: action.payload.currentDayInTheCalendar,
        currentLocalStorageKey: currentLocalStorageKey,
    }
    return nextState;
}

export {
    dateChange
}