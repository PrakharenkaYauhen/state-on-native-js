// subscribePreloader

import { store, weather, juventus } from './../index.js';
import imgUrl from './../free-loader-gif-3.gif';

let subscribePreloader = () => {
    const state = store.getState();
    const loadComplete = state.loadComplete;
    const loadJuventusComplete = state.loadJuventusComplete;

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

    if (loadJuventusComplete) {
        return;
    } else {
        juventus.innerHTML = '';
        let img = document.createElement('img');
        let p = document.createElement('p');
        img.classList.add('preloader');    
        img.setAttribute('src', imgUrl);
        p.classList.add('juventus__paragraph');
        p.innerHTML = 'We are looking for an information';
        juventus.appendChild(p);
        juventus.appendChild(img);
    }
}

export {
    subscribePreloader
}