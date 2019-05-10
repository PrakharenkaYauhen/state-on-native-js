// reducer case 'DATE-MONTH-YEAR-CALENDAR'

function monthYearChange(nextState, state, action) {

    return nextState = {
        task: state.task,
        currentDate:  action.payload.currentDate,
        currentDayInTheCalendar:  action.payload.currentDayInTheCalendar,
        currentLocalStorageKey: state.currentLocalStorageKey,
        loadComplete: state.loadComplete,
        weatherObject: state.weatherObject,
        loadJuventusComplete: state.loadJuventusComplete,
        juventusObject: state.juventusObject,
    }
}

export {
    monthYearChange
}