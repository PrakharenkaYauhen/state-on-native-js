// fillipDateChange

import { store } from './../index.js';

let fillipDateChange = e => {
    var target = e.target;

    const state = store.getState();
    const currentDate = state.currentDate;
    const currentDayInTheCalendar = state.currentDayInTheCalendar;

    if (target.tagName !== 'TD' || parseFloat(target.innerHTML) === currentDayInTheCalendar) return; 

    store.dispatch({
        type: 'DATE-CHANGE-CALENDAR',
        payload: {
            currentDate: currentDate,
            currentDayInTheCalendar: parseFloat(target.innerHTML)
        },
    })
}

export {
    fillipDateChange
}