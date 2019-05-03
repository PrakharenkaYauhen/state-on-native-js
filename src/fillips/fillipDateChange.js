// fillipDateChange

import { store } from './../index.js';

let fillipDateChange = e => {
    var target = e.target;

    const state = store.getState();
    const currentDayInTheCalendar = state.currentDayInTheCalendar;

    console.log(currentDayInTheCalendar);

    if (target.tagName !== 'TD' || parseFloat(target.innerHTML) === currentDayInTheCalendar) return; 

    store.dispatch({
        type: 'DATE-CHANGE-CALENDAR',
        payload: {
            currentDate: new Date(),
            currentDayInTheCalendar: parseFloat(target.innerHTML)
        },
    })
}

export {
    fillipDateChange
}