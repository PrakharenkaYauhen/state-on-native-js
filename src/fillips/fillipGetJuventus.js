// fillipGetJuventus

import { store } from './../index.js';

// let previousJuventusString;

let fillipGetJuventus = () => {

    Promise.all([
        fetch('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=Juventus'),
        fetch('https://www.thesportsdb.com/api/v1/json/1/eventsnext.php?id=133676')
    ])
        .then(res => {
            // console.log(res);
            return res.map(juventusObject => juventusObject.json())
        })
        .then(res => {
            // console.log(res);
            Promise.all(res)
                .then(
                    (result) => {
                        console.log(result);

                        // let currentJuventusString = JSON.stringify(result);

                        // if (previousJuventusString !== currentJuventusString) {
                        //     previousJuventusString = currentJuventusString;
                        // } else {
                        //     return
                        // }

                        outer: for (let i = 0; i < result[1].events.length; i++) {
                            let localStorageKeyString = result[1].events[i].dateEvent.split('-');
                            let localStorageKey = `${+localStorageKeyString[0]} ${+localStorageKeyString[1] - 1} ${+localStorageKeyString[2]}`;
                            let todaysTasks = JSON.parse(localStorage.getItem(localStorageKey));

                            let tasksList = todaysTasks ? todaysTasks : [];
                            let newTask = {};

                            newTask.id = new Date().getTime();
                            newTask.content = `Game: ${result[1].events[i].strEvent}`;
                            newTask.game = true;

                           if (localStorage.getItem(localStorageKey)) {
                                for (let i = 0; i < (JSON.parse(localStorage.getItem(localStorageKey))).length; i++) {
                                    if (JSON.parse(localStorage.getItem(localStorageKey))[i].content === newTask.content) break outer;
                                }
                            }

                            tasksList.push(newTask);

                            localStorage.setItem(localStorageKey, JSON.stringify(tasksList));
                        }

                        // localStorage.setItem(state.currentLocalStorageKey, JSON.stringify(newTasks))


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