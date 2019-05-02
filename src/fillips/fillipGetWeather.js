// fillipGetWeather

import { store } from './../index.js';

let fillipGetWeather = () => {

    let weatherDatesPromise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
            if (position) {
                setTimeout(() => resolve(position.coords), 2000);
            } else {
                reject(new Error('Weather dates is not received'));
            }
            // console.log(position.coords);
        })
    });

    weatherDatesPromise.then(coords => {
        let city = (coords) ? 'lat=' + coords.latitude.toFixed(6) + '&lon=' + coords.longitude.toFixed(6) : 'q=Minsk';
        // console.log(city);
        return city;
    })
        .then(city => fetch('http://api.openweathermap.org/data/2.5/weather?' + city + '&units=metric&lang=ru&APPID=2d009bc907c3f547b59f7129beb7c9ee'))
        .then(res => res.json())
        .then(
            (result) => {
                // console.log(result);
                store.dispatch({
                    type: 'GET-WEATHER',
                    payload: {
                        loadComplete: true,
                        weatherObject: result,
                    },
                })
            },
            // (error) => {
            //     store.dispatch({
            //         type: 'GET-WEATHER',
            //         payload: {
            //             loadComplete: true,
            //             weatherObject: error,
            //         },
            //     })
            // }
        )

}

export {
    fillipGetWeather
}