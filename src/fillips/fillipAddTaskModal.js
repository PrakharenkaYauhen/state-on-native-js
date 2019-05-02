// fillipAddTaskModal

import { addTaskModal, addTaskModalCover, addTaskInTheListInput } from './../index.js';

let fillipAddTaskModal = e => {
    var target = e.target;

    if (target.tagName !== 'TD' && target.tagName !== 'BUTTON') return; 

    addTaskModal.classList.toggle('modal_visible');
    addTaskModalCover.classList.toggle('modal__cover_visible');
    addTaskInTheListInput.focus();
}

export {
    fillipAddTaskModal
}