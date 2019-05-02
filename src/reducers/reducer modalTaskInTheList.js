// reducer case 'MODAL-TASK-IN-THE-LIST'

function modalTaskInTheList(nextState, action) {
    nextState = {
        modalActive: action.payload.modalActive,
    }
    return nextState;
}

export {
    modalTaskInTheList
}