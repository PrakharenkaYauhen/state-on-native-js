// state of the App

const createStore = (reducer, initialState) => {
    const store = {};
    store.state = initialState;
    store.listeners = [];
    store.getState = () => store.state;
    store.subscribe = listener => {
        store.listeners.push(listener);
    };
    store.dispatch = action => {
        // console.log('> Action', action);
        // console.log(store.state, action);
        store.state = reducer(store.state, action);
        store.listeners.forEach(listener => listener());
    };
    return store;
};

export {createStore}