// fillipModalTask

import { store } from './../index.js';

let fillipModalTask = e => {
    var target = e.target;
    if (target.classList.contains('modal-task')) {
        console.log(store.modalActive);
        store.modalActive = !store.modalActive ? true : false;
        console.log(store.modalActive);
        store.dispatch({
            type: 'MODAL-TASK-IN-THE-LIST',
            payload: {
                modalActive: store.modalActive,
            },
        })
    }
}

export {
    fillipModalTask,
}