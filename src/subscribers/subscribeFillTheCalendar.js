// subscribeFillTheCalendar

import { store } from './../index.js';
import { fillipGetWeather } from './../fillips/fillipGetWeather.js';
import { fillipGetJuventus } from './../fillips/fillipGetJuventus.js';
import imgPinBoardURL from './../pin-board150.png';
import imgBallURL from './../ball150.png';

let previousDate = null;
// let previousLocalStorage = null;

let subscribeFillTheCalendar = () => {
    const state = store.getState();
    const currentDate = state.currentDate;
    const currentDayInTheCalendar = state.currentDayInTheCalendar;
    const loadComplete = state.loadComplete;

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const firstDayOfTheMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInThisMonth = 32 - new Date(currentYear, currentMonth, 32).getDate();
    const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let tableBody = document.getElementById('table-body');

    // console.log(currentDate);
    // console.log(currentDayInTheCalendar);

    if (currentDayInTheCalendar !== previousDate) {
        fillipGetWeather();
        fillipGetJuventus();
        previousDate = currentDayInTheCalendar;
    }

    // if (!tableBody.innerHTML) {
        tableBody.innerHTML = '';
        // console.log(currentMonth);

        let headerYearMonth = document.getElementById('table-header-year-month');
        headerYearMonth.innerHTML = `${monthes[currentMonth]} ${currentYear}`;

        let rowOfDays = document.createElement('tr');
        for (let i = 0; i < 7; i++) {
            let td = document.createElement('td');
            td.innerHTML = week[i];
            td.classList.add('todo__table__data');
            td.classList.add('todo__table__data_name');
            rowOfDays.appendChild(td);
        }
        tableBody.appendChild(rowOfDays);

        for (let j = 0; j < 6; j++) {
            let row = document.createElement('tr');
            for (let i = 0; i < 7; i++) {
                let td = document.createElement('td');
                td.innerHTML = null;
                td.classList.add('todo__table__data');
                td.classList.add('todo__table__data_cells');
                row.appendChild(td);
                tableBody.appendChild(row);
            }
        }

    // }

    const tableRows = document.querySelectorAll('.todo__table__data_cells');

    for (let i = 0; i < daysInThisMonth; i++) {
        if (firstDayOfTheMonth !== 0) {
            tableRows[firstDayOfTheMonth - 1 + i].innerHTML = i + 1;
        } else {
            tableRows[6 + i].innerHTML = i + 1;
        }

        // for (let i = 0; i < tableRows.length; i++) {
        //     if (parseFloat(tableRows[i].innerHTML) === currentDayInTheCalendar) {
        //         tableRows[i].classList.add('todo__table__data_choisen');
        //     } else {
        //         tableRows[i].classList.remove('todo__table__data_choisen');
        //     }

        //     let localStorageKeysArray = Object.keys(localStorage);
        //     for (let j = 0; j < localStorageKeysArray.length; j++) {
        //         if (+localStorageKeysArray[j].split(' ')[2] === +tableRows[i].innerHTML && +localStorageKeysArray[j].split(' ')[1] === (currentMonth)) {
        //             let imgPinBoard = document.createElement('img');
        //             imgPinBoard.setAttribute('src', imgPinBoardURL);
        //             imgPinBoard.classList.add('todo__table__pin');
        //             tableRows[i].appendChild(imgPinBoard);
        //             if (JSON.parse(localStorage.getItem(localStorageKeysArray[j]))[0].game) {
        //                 let imgBall = document.createElement('img');
        //                 imgBall.setAttribute('src', imgBallURL);
        //                 imgBall.classList.add('todo__table__ball');
        //                 tableRows[i].appendChild(imgBall);
        //             }
        //         }
        //     }
        // }
    }

    let localStorageKeysArray = Object.keys(localStorage);
    let checkingLocalStorageKey;
    // let currentLocalStorage = JSON.stringify(localStorage);

    if (loadComplete) {
        // previousLocalStorage = currentLocalStorage;

        for (let i = 0; i < tableRows.length; i++) {
            if (parseFloat(tableRows[i].innerHTML) === currentDayInTheCalendar) {
                tableRows[i].classList.add('todo__table__data_choisen');
            } else {
                tableRows[i].classList.remove('todo__table__data_choisen');
            }

            // console.log(localStorageKeysArray.length);
            for (let j = 0; j < localStorageKeysArray.length; j++) {
                checkingLocalStorageKey = localStorageKeysArray[j].split(' ');
                // console.log(checkingLocalStorageKey[0]);
                if (+checkingLocalStorageKey[2] === +tableRows[i].innerHTML 
                    && +checkingLocalStorageKey[1] === currentMonth 
                    && +checkingLocalStorageKey[0] === currentYear) {
                    let imgPinBoard = document.createElement('img');
                    imgPinBoard.setAttribute('src', imgPinBoardURL);
                    imgPinBoard.classList.add('todo__table__pin');
                    tableRows[i].appendChild(imgPinBoard);
                    if (JSON.parse(localStorage.getItem(localStorageKeysArray[j]))[0].game) {
                        let imgBall = document.createElement('img');
                        imgBall.setAttribute('src', imgBallURL);
                        imgBall.classList.add('todo__table__ball');
                        tableRows[i].appendChild(imgBall);
                    }
                }
            }
        }
    }

    const weatherObject = state.weatherObject;

    if (weatherObject) {
        for (let i = 0; i < tableRows.length; i++) {
            if (parseFloat(tableRows[i].innerHTML) === new Date().getDate() 
            && +currentDate.getMonth()  === new Date().getMonth() 
            && +currentDate.getFullYear() === new Date().getFullYear() ) {
                // if (weatherObject) {

                let img = document.createElement('img');
                img.setAttribute('src', "https://openweathermap.org/img/w/" + weatherObject[0].weather['0'].icon + ".png");
                img.classList.add('todo__table__sun');
                tableRows[i].appendChild(img);
                for (let j = 1; j <= 4; j++) {
                    let img = document.createElement('img');
                    img.setAttribute('src', "https://openweathermap.org/img/w/" + weatherObject[1].list[j * 8 + 1 + ''].weather['0'].icon + ".png");
                    img.classList.add('todo__table__sun');
                    tableRows[i + j].appendChild(img);
                }
                break;
            }
        }
    }
}

export {
    subscribeFillTheCalendar
}