// fillipGetWeather

import { store } from './../index.js';

let fillipGetWeather = () => {

    let weatherDatesPromise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition((position) => {
            if (position) {
                setTimeout(() => resolve(position.coords), 2000);
                // resolve(position.coords)
            } else {
                reject(new Error('Weather dates is not received'));
            }
        })
    });

    weatherDatesPromise.then(coords => {
        let city = (coords) ? 'lat=' + coords.latitude.toFixed(6) + '&lon=' + coords.longitude.toFixed(6) : 'q=Minsk';
        return Promise.all([
            fetch('http://api.openweathermap.org/data/2.5/weather?' + city + '&units=metric&lang=en&APPID=2d009bc907c3f547b59f7129beb7c9ee'),
            fetch('http://api.openweathermap.org/data/2.5/forecast?' + city + '&units=metric&lang=en&APPID=2d009bc907c3f547b59f7129beb7c9ee')
        ])
    })
        .then(res => {
            // console.log(res);
            return res.map(wetherObject => wetherObject.json())
        })
        .then(res => {
            // console.log(res);
            Promise.all(res)
                .then(
                    (result) => {
                        console.log(result);
                        store.dispatch({
                            type: 'GET-WEATHER',
                            payload: {
                                loadComplete: true,
                                weatherObject: result,
                            },
                        })
                    },
                    (error) => {
                        console.log(error);
                    }
                )
        })

}

export {
    fillipGetWeather
}