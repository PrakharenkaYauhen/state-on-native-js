// subscribePreloader

import { store, weather } from './../index.js';
import imgUrl from './../free-loader-gif-3.gif';

let subscribePreloader = () => {
    const state = store.getState();
    const loadComplete = state.loadComplete;

    if (loadComplete) return;

    weather.innerHTML = '';
    let img = document.createElement('img');
    let p = document.createElement('p');
    img.classList.add('preloader');    
    img.setAttribute('src', imgUrl);
    p.classList.add('weather__paragraph');
    p.innerHTML = 'We are looking for an information';
    weather.appendChild(p);
    weather.appendChild(img);
}

export {
    subscribePreloader
}