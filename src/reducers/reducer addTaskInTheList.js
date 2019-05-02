// reducer case 'ADD-TASK-IN-THE-LIST'

function addTaskInTheList(nextState, state, action) {

    let todaysTasks = JSON.parse(localStorage.getItem(state.currentLocalStorageKey));

    let tasksList = todaysTasks ? todaysTasks : [];
    let newTask = {};

    newTask.id = new Date().getTime();
    newTask.content =  action.payload.task;

    tasksList.push(newTask);

    localStorage.setItem(state.currentLocalStorageKey, JSON.stringify(tasksList));

    return nextState = {
        task: tasksList,
        // modalActive: state.modalActive,
        currentDate: state.currentDate,
        currentDayInTheCalendar: state.currentDayInTheCalendar,
        currentLocalStorageKey: state.currentLocalStorageKey,
    }
}

export {
    addTaskInTheList
}