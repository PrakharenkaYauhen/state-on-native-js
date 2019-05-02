// reducer case 'GET-WEATHER'

function getWeather(nextState, state, action) {

    return nextState = {
        task: state.tasksList,
        // modalActive: state.modalActive,
        currentDate: state.currentDate,
        currentDayInTheCalendar: state.currentDayInTheCalendar,
        currentLocalStorageKey: state.currentLocalStorageKey,
        loadComplete: action.payload.loadComplete,
        weatherObject: action.payload.weatherObject,
    }
}

export {
    getWeather
}