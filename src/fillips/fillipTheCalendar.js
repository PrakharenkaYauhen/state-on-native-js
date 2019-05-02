// fillipTheCalendar

import { store, addTaskInput, } from './../index.js';

let fillipTheCalendar = () => {
    store.dispatch({
        type: 'FILL-THE-CALENDAR-LIST',
        payload: {
            currentDate: new Date(),
            currentDayInTheCalendar: new Date().getDate(),
            cells: [],
        },
    })
}

export {
    fillipTheCalendar
}