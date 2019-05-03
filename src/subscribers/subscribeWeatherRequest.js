// subscribeWeatherRequest

import { store, weather } from './../index.js';

let subscribeWeatherRequest = () => {
    const state = store.getState();
    const currentDayInTheCalendar = state.currentDayInTheCalendar;
    const loadComplete = state.loadComplete;
    const weatherObject = state.weatherObject;    

    if (!loadComplete) return;

    let differentInDays = currentDayInTheCalendar - new Date().getDate();
    let positionInObject = differentInDays * 8 + 1;
    let string;

    // if (weatherObject.main) {
    //     string = `<p class='weather__paragraph'>Temperature in ${weatherObject.name} now: ${weatherObject.main.temp}°C</p>
    //                     <img class='weather__icon' src=${"https://openweathermap.org/img/w/" + weatherObject.weather['0'].icon + ".png"}
    //                         alt="icon of weather" />
    //                     <p class='weather__paragraph'>"${weatherObject.weather['0'].description}"</p>
    //                     <p class='weather__paragraph'>Wind: ${weatherObject.wind.speed}m/s»</p>
    //                     <p class='weather__paragraph'>Humidity: ${weatherObject.main.humidity}%»</p>`
    // } else {
    //     string = (positionInObject < 40) ? `<p class='weather__paragraph'>Temperature in ${weatherObject.city.name} now: ${weatherObject.list[''+positionInObject].main.temp}°C</p>
    //                     <img class='weather__icon' src=${"https://openweathermap.org/img/w/" + weatherObject.list[''+positionInObject].weather['0'].icon + ".png"}
    //                         alt="icon of weather" />
    //                     <p class='weather__paragraph'>"${weatherObject.list[''+positionInObject].weather['0'].description}"</p>
    //                     <p class='weather__paragraph'>Wind: ${weatherObject.list[''+positionInObject].wind.speed}m/s»</p>
    //                     <p class='weather__paragraph'>Humidity: ${weatherObject.list[''+positionInObject].main.humidity}%»</p>` 
    //                     : `<p class='weather__paragraph'>Sorry, but we don't have an information for so long period of time.</p>`;
    // }

    if (weatherObject) {
        if (currentDayInTheCalendar === new Date().getDate()) {
            string = `<p class='weather__paragraph'>Temperature in ${weatherObject[0].name} now: ${weatherObject[0].main.temp}°C</p>
                        <img class='weather__icon' src=${"https://openweathermap.org/img/w/" + weatherObject[0].weather['0'].icon + ".png"}
                            alt="icon of weather" />
                        <p class='weather__paragraph'>"${weatherObject[0].weather['0'].description}"</p>
                        <p class='weather__paragraph'>Wind: ${weatherObject[0].wind.speed}m/s»</p>
                        <p class='weather__paragraph'>Humidity: ${weatherObject[0].main.humidity}%»</p>`
        } else {
            // string = (positionInObject < 40 && positionInObject > 2) ? `<p class='weather__paragraph'>Temperature in ${weatherObject[1].city.name} now: ${weatherObject[1].list[''+positionInObject].main.temp}°C</p>
            //             <img class='weather__icon' src=${"https://openweathermap.org/img/w/" + weatherObject[1].list[''+positionInObject].weather['0'].icon + ".png"}
            //                 alt="icon of weather" />
            //             <p class='weather__paragraph'>"${weatherObject[1].list[''+positionInObject].weather['0'].description}"</p>
            //             <p class='weather__paragraph'>Wind: ${weatherObject[1].list[''+positionInObject].wind.speed}m/s»</p>
            //             <p class='weather__paragraph'>Humidity: ${weatherObject[1].list[''+positionInObject].main.humidity}%»</p>` 
            //             : `<p class='weather__paragraph'>Sorry, but we don't have an information for so long period of time.</p>`;
                        if (positionInObject > 40) {
                            string = `<p class='weather__paragraph'>Sorry, but we don't have an information for so long period of time.</p>`
                        } else if (positionInObject < 40 && positionInObject > 2) {
                            string = `<p class='weather__paragraph'>Temperature in ${weatherObject[1].city.name} now: ${weatherObject[1].list[''+positionInObject].main.temp}°C</p>
                            <img class='weather__icon' src=${"https://openweathermap.org/img/w/" + weatherObject[1].list[''+positionInObject].weather['0'].icon + ".png"}
                                alt="icon of weather" />
                            <p class='weather__paragraph'>"${weatherObject[1].list[''+positionInObject].weather['0'].description}"</p>
                            <p class='weather__paragraph'>Wind: ${weatherObject[1].list[''+positionInObject].wind.speed}m/s»</p>
                            <p class='weather__paragraph'>Humidity: ${weatherObject[1].list[''+positionInObject].main.humidity}%»</p>` 
                        } else {
                            string = `<p class='weather__paragraph'>Sorry, we don't forecast weather for past.</p>`
                        }
        }
    }

    weather.innerHTML = string;
}

export {
    subscribeWeatherRequest
}