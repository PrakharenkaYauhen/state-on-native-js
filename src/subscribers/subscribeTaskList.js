// subscribeTaskList of the App

import { theList, store } from './../index.js';

let previousTasksString;

let subscribeTaskList = () => {
    const state = store.getState();
    const task = state.task;
    let currentTuskString = JSON.stringify(task);

    if (previousTasksString !== currentTuskString) {
        previousTasksString = currentTuskString;
    } else {
        return
    }

    // console.log(state);

    theList[0].innerHTML = '';

    if (!task || task.length === 0) return theList[0].innerHTML = "You don't have any task now";
    
    for (let i = 0; i < task.length; i++) {
        let li = document.createElement('li');
        li.classList.add('todo__tasks__item');
        let span = document.createElement('span');
        span.innerHTML = task[i].content;
        li.appendChild(span);        
        let buttonDelete = document.createElement('button');
        buttonDelete.classList.add('todo__tasks__button');
        buttonDelete.classList.add('todo__tasks__button_delete');
        li.appendChild(buttonDelete);
        let buttonDone = document.createElement('button');
        buttonDone.classList.add('todo__tasks__button');
        buttonDone.classList.add('todo__tasks__button_done');
        li.appendChild(buttonDone);
        let buttonCorrect = document.createElement('button');
        buttonCorrect.classList.add('todo__tasks__button');
        buttonCorrect.classList.add('todo__tasks__button_correct');
        li.appendChild(buttonCorrect);
        theList[0].appendChild(li);
    }
}

export {
    subscribeTaskList
}