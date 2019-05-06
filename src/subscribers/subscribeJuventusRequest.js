// subscribeJuventusRequest

import { store, juventus } from './../index.js';

let previousJuventusString;

let subscribeJuventusRequest = () => {
    const state = store.getState();
    const currentDate = state.currentDate;
    const currentDayInTheCalendar = state.currentDayInTheCalendar;
    const loadJuventusComplete = state.loadJuventusComplete;
    const juventusObject = state.juventusObject;

    let currentJuventusString = JSON.stringify(juventusObject);

    if (previousJuventusString !== currentJuventusString) {
        previousJuventusString = currentJuventusString;
    } else {
        return
    }

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    let eventsArray = [];
    let todayGame = '';

    if (juventusObject) {
        for (let i = 0; i < juventusObject[1].events.length; i++) {
            eventsArray.push(juventusObject[1].events[i].dateEvent);           
        }
    }
    
    for (let i = 0; i < eventsArray.length; i++) {
        let newArray = eventsArray[i].split('-');
        if (currentYear === +newArray[0] && (currentMonth + 1) === +newArray[1] && currentDayInTheCalendar === +newArray[2]) {
            for (let i = 0; i < juventusObject[1].events.length; i++) {
                if (juventusObject[1].events[i].dateEvent === newArray.join('-')) {
                    todayGame = `<div class='juventus__today-game'>
                                            <h3 class='juventus__header3'>Today's game:</h3>
                                            <p class='juventus__paragraph'>Date: ${juventusObject[1].events[i].dateEvent}</p>
                                            <p class='juventus__paragraph'>Event: ${juventusObject[1].events[i].strEvent}</p>
                                            <p class='juventus__paragraph'>Tornament: ${juventusObject[1].events[i].strLeague}</p>
                                            <p class='juventus__paragraph'>Round: ${juventusObject[1].events[i].intRound}</p>
                                            <p class='juventus__paragraph'>Time: ${juventusObject[1].events[i].strTime}</p>
                                            </div>`
                };           
            }
            break;
        } else {
            todayGame = `<div class='juventus__today-game'>
                                    <h3 class='juventus__header3'>Today's game:</h3>
                                    <p class='juventus__paragraph'>There is no games today</p>
                                    </div>`
        }
    }

    if (!loadJuventusComplete) return;

    let string = `<div class='juventus__team'>
                        <h3 class='juventus__header3'>Team: ${juventusObject[0].teams[0].strTeam}</h3>     
                        <img class='juventus__badge' src="${juventusObject[0].teams[0].strTeamBadge}">                   
                        <img class='juventus__logo' src="${juventusObject[0].teams[0].strTeamLogo}">
                        <img class='juventus__jersey' src="${juventusObject[0].teams[0].strTeamJersey}">
                        <p class='juventus__paragraph'>Location: ${juventusObject[0].teams[0].strStadiumLocation}</p>
                        <p class='juventus__paragraph'>Tornament: ${juventusObject[0].teams[0].strLeague}</p>
                        <p class='juventus__paragraph'>Manager: ${juventusObject[0].teams[0].strManager}</p>
                        </div>`;

    string += `<div class='juventus__stadium'>
                        <h3 class='juventus__header3'>Stadium: ${juventusObject[0].teams[0].strStadium}</h3>
                        <img class='juventus__stadium-photo' src="${juventusObject[0].teams[0].strStadiumThumb}">
                        <p class='juventus__paragraph'>Location: ${juventusObject[0].teams[0].strStadiumLocation}</p>
                        </div>`;
    string += todayGame;

    string += `<div class='juventus__next-game'>
                        <h3 class='juventus__header3'>Next game:</h3>
                        <p class='juventus__paragraph'>Date: ${juventusObject[1].events[0].dateEvent}</p>
                        <p class='juventus__paragraph'>Event: ${juventusObject[1].events[0].strEvent}</p>
                        <p class='juventus__paragraph'>Tornament: ${juventusObject[1].events[0].strLeague}</p>
                        <p class='juventus__paragraph'>Round: ${juventusObject[1].events[0].intRound}</p>
                        <p class='juventus__paragraph'>Time: ${juventusObject[1].events[0].strTime}</p>
                        </div>`;

    juventus.innerHTML = string;
}

export {
    subscribeJuventusRequest
}