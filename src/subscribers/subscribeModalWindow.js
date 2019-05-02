// subscribeModalWindow of the App

import { modal, store } from './../index.js';

let subscribeModalWindow = () => {
    const state = store.getState();
    const modalStatus = state.modalActive;

    if (modalStatus) {
        modal.classList.add('modal-vision')
    } else {
        modal.classList.remove('modal-vision')
    }
}

export {
    subscribeModalWindow
}