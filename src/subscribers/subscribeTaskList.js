// subscribeTaskList of the App

import { theList, store } from './../index.js';
import { fillipDeleteTask } from './../fillips/fillipDeleteTask.js';

let subscribeTaskList = () => {
    const state = store.getState();
    const task = state.task;

    // console.log(state);

    theList[0].innerHTML = '';

    if (!task) return theList[0].innerHTML = "You don't have any task now";
    
    for (let i = 0; i < task.length; i++) {
        let li = document.createElement('li');
        li.classList.add('todo__tasks__item');
        let span = document.createElement('span');
        span.innerHTML = task[i].content;
        li.appendChild(span);
        let button = document.createElement('button');
        button.classList.add('todo__tasks__button');
        li.appendChild(button);
        theList[0].appendChild(li);
    }

//     <li class='todo__tasks__item'>
//     <span>{props.task}</span>
//     <button class='todo__tasks__button'></button>
//     <button class='todo__tasks__button'></button>
//     <button class='todo__tasks__button'></button>
// </li>


    // if (task === undefined || task.length === 0) {
    //     taskList.innerHTML = '';
    //     let button = document.createElement('button');
    //     button.classList.add('modal-task');
    //     button.setAttribute('id', 'modal-task');
    //     button.innerHTML = 'add a new task';
    //     taskList.appendChild(button);
    //     // let modalTaskButton = document.getElementById('modal-task');
    //     // console.log(modalTaskButton);
    // } else {
    //     taskList.innerHTML = '';
    //     for (let i = 0; i < task.length; i++) {
    //         let li = document.createElement('li');
    //         let span = document.createElement('span');
    //         li.innerHTML = task[i];
    //         span.innerHTML = ' X';
    //         span.classList.add('delete-task')
    //         li.appendChild(span);
    //         taskList.appendChild(li);
    //         span.addEventListener('click', fillipDeleteTask);
    //     }
    // }
}

export {
    subscribeTaskList
}