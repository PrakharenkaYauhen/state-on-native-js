import './index.css';
import './style.css';
import { createStore, reducer } from './App';
import { subscribeTaskList } from './subscribers/subscribeTaskList.js';
import { subscribeFillTheCalendar } from './subscribers/subscribeFillTheCalendar.js';
import { subscribePreloader } from './subscribers/subscribePreloader.js';
import { subscribeWeatherRequest } from './subscribers/subscribeWeatherRequest.js';
import { subscribeJuventusRequest } from './subscribers/subscribeJuventusRequest.js';
import { fillipDeleteTask } from './fillips/fillipDeleteTask.js';
import { fillipDateChange, } from './fillips/fillipDateChange.js';
import { fillipAddTaskModal, } from './fillips/fillipAddTaskModal.js';
import { fillipAddTaskInTheList, } from './fillips/fillipAddTaskInTheList.js';
import { fillipMonthYearChange, } from './fillips/fillipMonthYearChange.js';

const root = document.getElementById('root');
const taskList = document.getElementById('task-list');
const addTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-new-task');
const table = document.getElementById('todo__table');
const addTaskModal = document.querySelector('.modal');
const addTaskModalCover = document.querySelector('.modal__cover');
const addTaskModalExit = document.querySelector('.modal__button_exit');
const addTaskModalButton = document.querySelector('.modal-button__button');
const addTaskInTheListButton = document.querySelector('.modal__button_enter');
const addTaskInTheListInput = document.querySelector('.modal__textarea');
const theList = document.querySelectorAll('.todo__tasks__list');
const listTasksLeft = document.getElementById('todo__tasks__left');
const juventus = document.querySelector('.juventus__content');

let modalTaskButton = document.getElementById('modal-task');
let weather = document.querySelector('.weather__content');


const store = createStore(reducer);

store.subscribe(subscribeTaskList);
store.subscribe(subscribeFillTheCalendar);
store.subscribe(subscribePreloader);
store.subscribe(subscribeWeatherRequest);
store.subscribe(subscribeJuventusRequest);

store.dispatch({}); // Sets the inital state

table.addEventListener('click', fillipDateChange);
table.addEventListener('click', fillipMonthYearChange);
table.addEventListener('dblclick', fillipAddTaskModal);
addTaskModalExit.addEventListener('click', fillipAddTaskModal);
addTaskModalButton.addEventListener('click', fillipAddTaskModal);
addTaskInTheListButton.addEventListener('click', fillipAddTaskInTheList);
listTasksLeft.addEventListener('click', fillipDeleteTask);

// let deleteTaskButton = document.getElementsByClassName('delete-task');

// for (let i = 0; i < deleteTaskButton.length; i++) {
//     deleteTaskButton[i].addEventListener('click', fillipDeleteTask);
// }

export {
    root,
    taskList,
    addTaskInput,
    addTaskButton,
    modalTaskButton,
    store,
    addTaskModal,
    addTaskModalCover,
    addTaskInTheListInput,
    theList,
    weather,
    juventus
};