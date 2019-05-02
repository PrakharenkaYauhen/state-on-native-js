// subscribePreloader

import { store, weather } from './../index.js';
import imgUrl from './../free-loader-gif-3.gif';

let subscribePreloader = () => {
    const state = store.getState();
    const loadComplete = state.loadComplete;

    if (loadComplete) return;

    weather.innerHTML = '';
    let img = document.createElement('img');
    img.setAttribute('src', imgUrl);
    weather.appendChild(img);
}

export {
    subscribePreloader
}