// reducer case 'DELETE-TASK-IN-THE-LIST'

function deleteTaskInTheList(nextState, state, action) {
    // let delTasksArr = state.task;
    // let indexDelElement = delTasksArr.indexOf(action.payload.task.split('<span')[0]);
    // if (indexDelElement !== -1) {
        // delTasksArr.splice(indexDelElement, 1);
        nextState = {
            task: action.payload.task,
            currentDate: state.currentDate,
            currentDayInTheCalendar: state.currentDayInTheCalendar,
            currentLocalStorageKey: state.currentLocalStorageKey,        
            loadComplete: true,
            weatherObject: state.weatherObject,
        }
        return nextState;
    }
//     return nextState;
// }

export {
    deleteTaskInTheList
}