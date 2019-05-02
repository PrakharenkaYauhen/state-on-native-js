// fillipAddTask

import { store, addTaskInput, } from './../index.js';

let fillipAddTask = () => {

    if (addTaskInput.value.length !== 0) {
        // console.log('----- Previous state', store.getState());
        store.dispatch({
            type: 'ADD-TASK-IN-THE-LIST',
            payload: {
                task: addTaskInput.value,
            },
        })
    } else {
        return
    }
    // console.log('+++++ New state', store.getState());

}

// let fillipAddTask = () => {

//     for (let i = 0; i < addTaskInput.length; i++) {
//         if (addTaskInput[i].value.length !== 0) {
//             // console.log('----- Previous state', store.getState());
//             store.dispatch({
//                 type: 'ADD-TASK-IN-THE-LIST',
//                 payload: {
//                     task: addTaskInput[i].value,
//                 },
//             })
//         } else {
//             return
//         }
//         // console.log('+++++ New state', store.getState());
//     }
// }

export {
    fillipAddTask
}