// reducer case 'DATE-MONTH-YEAR-CALENDAR'

function monthYearChange(nextState, state, action) {
    console.log(state);
    console.log(action.payload);

    return nextState = {
        task: action.payload.task,
        currentDate:  action.payload.currentDate,
        currentDayInTheCalendar:  action.payload.currentDayInTheCalendar,
        currentLocalStorageKey: action.payload.currentLocalStorageKey,
        loadComplete: state.loadComplete,
        weatherObject: state.weatherObject,
        loadJuventusComplete: state.loadJuventusComplete,
        juventusObject: state.juventusObject,
    }
}

export {
    monthYearChange
}