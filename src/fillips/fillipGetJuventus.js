// fillipGetJuventus

import { store } from './../index.js';

let fillipGetJuventus = () => {

    const state = store.getState();
    const currentDayInTheCalendar = state.currentDayInTheCalendar;

    Promise.all([
            fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Juventus'),
            fetch('https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=133676')
        ])
        .then(res => {
            // console.log(res);
            return res.map(juventusObject => juventusObject.json())
        })
        .then(res => {
            console.log(res);
            Promise.all(res)
                .then(
                    (result) => {
                        console.log(result);
                        store.dispatch({
                            type: 'GET-JUVENTUS',
                            payload: {
                                loadJuventusComplete: true,
                                juventusObject: result,
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
    fillipGetJuventus
}