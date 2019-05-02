import './index.css';
import { createStore, reducer } from './App';
import { subscribeTaskList } from './subscribers/subscribeTaskList.js';
// import { subscribeModalWindow } from './subscribers/subscribeModalWindow.js';
import { subscribeFillTheCalendar } from './subscribers/subscribeFillTheCalendar.js';
import { subscribePreloader } from './subscribers/subscribePreloader.js';
import { subscribeWeatherRequest } from './subscribers/subscribeWeatherRequest.js';
// import { fillipAddTask } from './fillips/fillipAddTask.js';
// import { fillipDeleteTask } from './fillips/fillipDeleteTask.js';
// import { fillipModalTask, } from './fillips/fillipModalTask.js';
import { fillipDateChange, } from './fillips/fillipDateChange.js';
import { fillipAddTaskModal, } from './fillips/fillipAddTaskModal.js';
import { fillipAddTaskInTheList, } from './fillips/fillipAddTaskInTheList.js';
import { fillipGetWeather, } from './fillips/fillipGetWeather.js';

const root = document.getElementById('root');
const taskList = document.getElementById('task-list');
// const addTaskInput = document.getElementsByClassName('new-task');
const addTaskInput = document.getElementById('new-task');
// const addTaskButton = document.getElementsByClassName('add-new-task');
const addTaskButton = document.getElementById('add-new-task');
const modal = document.getElementById('modal');
const table = document.getElementById('todo__table');

const addTaskModal = document.querySelector('.modal');
const addTaskModalCover = document.querySelector('.modal__cover');
const addTaskModalExit = document.querySelector('.modal__button_exit');
const addTaskModalButton = document.querySelector('.modal-button__button');

const addTaskInTheListButton = document.querySelector('.modal__button_enter');
const addTaskInTheListInput = document.querySelector('.modal__textarea');

const theList = document.querySelectorAll('.todo__tasks__list');

let modalTaskButton = document.getElementById('modal-task');

let weather = document.querySelector('.weather__content');


const store = createStore(reducer);

store.subscribe(subscribeTaskList);
// store.subscribe(subscribeModalWindow);
store.subscribe(subscribeFillTheCalendar);
store.subscribe(subscribePreloader);
store.subscribe(subscribeWeatherRequest);

store.dispatch({}); // Sets the inital state


// addTaskButton.addEventListener('click', fillipAddTask);

// for (let i = 0; i < addTaskButton.length; i++) {
//     addTaskButton[i].addEventListener('click', fillipAddTask);
// }

table.addEventListener('click', fillipDateChange);
table.addEventListener('dblclick', fillipAddTaskModal);
addTaskModalExit.addEventListener('click', fillipAddTaskModal);
addTaskModalButton.addEventListener('click', fillipAddTaskModal);

addTaskInTheListButton.addEventListener('click', fillipAddTaskInTheList);

fillipGetWeather();

// let deleteTaskButton = document.getElementsByClassName('delete-task');

// for (let i = 0; i < deleteTaskButton.length; i++) {
//     deleteTaskButton[i].addEventListener('click', fillipDeleteTask);
// }

// document.addEventListener('click', fillipModalTask);

export {
    root,
    taskList,
    addTaskInput,
    addTaskButton,
    modalTaskButton,
    modal,
    store,
    addTaskModal,
    addTaskModalCover,
    addTaskInTheListInput,
    theList,
    weather
};