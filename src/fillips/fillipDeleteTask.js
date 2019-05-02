// fillipDeleteTask

import { store } from './../index.js';

let fillipDeleteTask = e => {

    // console.log('----- Previous state', store.getState());
    store.dispatch({
        type: 'DELETE-TASK-IN-THE-LIST',
        payload: {
            task: e.target.parentNode.innerHTML,
        },
    })
    // console.log('+++++ New state', store.getState());

}

export {
    fillipDeleteTask
}