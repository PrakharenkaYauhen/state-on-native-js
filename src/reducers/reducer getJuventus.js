// reducer case 'GET-JUVENTUS'

function getJuventus(nextState, state, action) {

    return nextState = {
        task: state.task,
        modalActive: state.modalActive,
        currentDate: state.currentDate,
        currentDayInTheCalendar: state.currentDayInTheCalendar,
        currentLocalStorageKey: state.currentLocalStorageKey,
        loadComplete: state.loadComplete,
        weatherObject: state.weatherObject,
        loadJuventusComplete: action.payload.loadJuventusComplete,
        juventusObject: action.payload.juventusObject,
    }
}

export {
    getJuventus
}