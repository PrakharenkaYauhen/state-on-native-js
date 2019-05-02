// subscribeWeatherRequest

import { store, weather } from './../index.js';

let subscribeWeatherRequest = () => {
    const state = store.getState();
    const loadComplete = state.loadComplete;
    const weatherObject = state.weatherObject;

    if (!loadComplete) return;

    let string = `<p class='weather__paragraph'>Temperature in ${weatherObject.name} now: ${weatherObject.main.temp}°C</p>
                        <img class='weather__icon' src=${"https://openweathermap.org/img/w/" + weatherObject.weather['0'].icon + ".png"}
                            alt="icon of weather" />
                        <p class='weather__paragraph'>"${weatherObject.weather['0'].description}"</p>
                        <p class='weather__paragraph'>Wind: ${weatherObject.wind.speed}м/c»</p>
                        <p class='weather__paragraph'>Humidity: ${weatherObject.main.humidity}%»</p>`

    weather.innerHTML = string;
}

export {
    subscribeWeatherRequest
}