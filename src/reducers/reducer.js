// reducer of the App

import { getInitialState } from '../state/getInitialState.js';
import { addTaskInTheList } from './reducer addTaskInTheList.js';
import { deleteTaskInTheList } from './reducer deleteTaskInTheList.js';
import { modalTaskInTheList } from './reducer modalTaskInTheList.js';
import { fillTheCalendar } from './reducer fillTheCalendar.js';
import { dateChange } from './reducer dateChange.js';
import { getWeather } from './reducer getWeather.js';

const reducer = (state = getInitialState(), action) => {
    let nextState = {};

    switch (action.type) {

        case 'ADD-TASK-IN-THE-LIST':
            return addTaskInTheList(nextState, state, action);

        case 'DELETE-TASK-IN-THE-LIST':
            return deleteTaskInTheList(nextState, state, action);

        case 'MODAL-TASK-IN-THE-LIST':
            return modalTaskInTheList(nextState, action);

        case 'FILL-THE-CALENDAR-LIST':
            return fillTheCalendar(nextState, state, action);

        case 'DATE-CHANGE-CALENDAR':
            return dateChange(nextState, state, action);

        case 'GET-WEATHER':
            return getWeather(nextState, state, action);


        default:
            return state;
    }
};

export {
    reducer
}