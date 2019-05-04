// fillipDeleteTask

import { store } from './../index.js';

let fillipDeleteTask = e => {

    var target = e.target;

    const state = store.getState();
    const currentLocalStorageKey = state.currentLocalStorageKey;

    if (!target.classList.contains('todo__tasks__button_delete')) return; 

    let todaysTasks = JSON.parse(localStorage.getItem(currentLocalStorageKey));

    let newTasks = todaysTasks.filter(function(object) {
        return target.parentElement.firstChild.innerHTML !== object.content;
      });

    newTasks.length ? localStorage.setItem(state.currentLocalStorageKey, JSON.stringify(newTasks)) : localStorage.removeItem(state.currentLocalStorageKey);

    console.log(target.parentElement.firstChild.innerHTML);

    // console.log('----- Previous state', store.getState());
    store.dispatch({
        type: 'DELETE-TASK-IN-THE-LIST',
        payload: {
            task: newTasks,
        },
    })
    // console.log('+++++ New state', store.getState());

}

export {
    fillipDeleteTask
}