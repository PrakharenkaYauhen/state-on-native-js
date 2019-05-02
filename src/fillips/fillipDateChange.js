// fillipDateChange

import { store } from './../index.js';

let fillipDateChange = e => {
    var target = e.target;

    if (target.tagName !== 'TD') return; 

    store.dispatch({
        type: 'DATE-CHANGE-CALENDAR',
        payload: {
            currentDate: new Date(),
            currentDayInTheCalendar: +target.innerHTML
        },
    })
}

export {
    fillipDateChange
}