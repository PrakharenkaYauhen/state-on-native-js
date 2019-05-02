// fillipAddTaskInTheList

import { store, addTaskInTheListInput } from './../index.js';

let fillipAddTaskInTheList = () => {

    if (addTaskInTheListInput.value.length !== 0) {
        store.dispatch({
            type: 'ADD-TASK-IN-THE-LIST',
            payload: {
                task: addTaskInTheListInput.value,
            },
        })
        addTaskInTheListInput.focus();
        addTaskInTheListInput.value = '';
    } else {
        addTaskInTheListInput.focus();
        return
    }
    // console.log('+++++ New state', store.getState());

}

export {
    fillipAddTaskInTheList
}