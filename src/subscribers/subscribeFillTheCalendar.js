// subscribeFillTheCalendar

import { store } from './../index.js';
// import { fillipDeleteTask } from './../fillips/fillipDeleteTask.js';
import { fillipGetWeather } from './../fillips/fillipGetWeather.js';
import { fillipGetJuventus } from './../fillips/fillipGetJuventus.js';
// import imgUrl from './../Sun.png';
import imgPinBoardURL from './../pin-board.png';

let previousDate = null;

let subscribeFillTheCalendar = () => {
    const state = store.getState();
    const currentDate = state.currentDate;
    const currentDayInTheCalendar = state.currentDayInTheCalendar;

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const firstDayOfTheMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInThisMonth = 32 - new Date(currentYear, currentMonth, 32).getDate();
    const week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const monthes = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let tableBody = document.getElementById('table-body');

    if (currentDayInTheCalendar !== previousDate) {
        fillipGetWeather();
        fillipGetJuventus();
        previousDate = currentDayInTheCalendar;
    }

    if (!tableBody.innerHTML) {

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

    }



    // let currentLocalStorageKey = currentYear + ' ' + currentMonth + ' ' + currentDayInTheCalendar;
    // let datesWithTasks = [];

    // for (let key in localStorage) {
    //     if (localStorage.getItem(key)) {
    //         if (currentLocalStorageKey.substr(0, 6) === key.substr(0, 6)) {
    //             datesWithTasks.push(+key.split(' ')[2]);
    //         }
    //     }
    // }

    const tableRows = document.querySelectorAll('.todo__table__data_cells');

    for (let i = 0; i < daysInThisMonth; i++) {
        if (firstDayOfTheMonth !== 0) {
            tableRows[firstDayOfTheMonth - 1 + i].innerHTML = i + 1;
        } else {
            tableRows[6 + i].innerHTML = i + 1;
        }

        for (let i = 0; i < tableRows.length; i++) {
            if (parseFloat(tableRows[i].innerHTML) === currentDayInTheCalendar) {
                tableRows[i].classList.add('todo__table__data_choisen');
            } else {
                tableRows[i].classList.remove('todo__table__data_choisen');
            }

            let localStorageKeysArray = Object.keys(localStorage);
            for (let j = 0; j < localStorageKeysArray.length; j++) {
                if (localStorageKeysArray[j].split(' ').slice(-1)[0] === tableRows[i].innerHTML) {
                    let imgPinBoard = document.createElement('img');
                    imgPinBoard.setAttribute('src', imgPinBoardURL);
                    imgPinBoard.classList.add('todo__table__pin');
                    tableRows[i].appendChild(imgPinBoard);
                }
            }
        }
    }

    // console.log(Object.keys(localStorage));

    const weatherObject = state.weatherObject;

    for (let i = 0; i < tableRows.length; i++) {
        if (parseFloat(tableRows[i].innerHTML) === new Date().getDate()) {
            if (weatherObject) {
                
                let img = document.createElement('img');
                img.setAttribute('src', "https://openweathermap.org/img/w/" + weatherObject[0].weather['0'].icon + ".png");
                img.classList.add('todo__table__sun');
                // console.log(img);
                tableRows[i].appendChild(img);
                for (let j = 1; j <= 4; j++) {
                    let img = document.createElement('img');
                    img.setAttribute('src', "https://openweathermap.org/img/w/" + weatherObject[1].list[j * 8 + 1 + ''].weather['0'].icon + ".png");
                    img.classList.add('todo__table__sun');
                    tableRows[i + j].appendChild(img);
                }
            }
        }
    }

    //     if (firstDayOfTheMonth !== 0) {
    //         if (datesWithTasks.some(number => number === (1 + i))) {

    //             cells[firstDayOfTheMonth - 1 + i] = <TableCellsVisionDatesWithTasks
    //                 onClick={props.onClickCell}
    //                 content={i + 1}
    //                 key={firstDayOfTheMonth - 1 + i} />;
    //                 <td className='todo__table__data todo__table__data_cells todo__table__data_tasks'
    //         onClick={props.onClick}>
    //         {props.content}
    //     </td>
    //         } else {
    //             cells[firstDayOfTheMonth - 1 + i] = <TableCellsVision
    //                 onClick={props.onClickCell}
    //                 content={i + 1}
    //                 key={firstDayOfTheMonth - 1 + i} />;
    //         }
    //     } else {
    //         if (datesWithTasks.some(number => number === (1 + i))) {
    //             cells[6 + i] = <TableCellsVisionDatesWithTasks
    //                 onClick={props.onClickCell}
    //                 content={i + 1}
    //                 key={6 + i} />;
    //         } else {
    //             cells[6 + i] = <TableCellsVision
    //                 onClick={props.onClickCell}
    //                 content={i + 1}
    //                 key={6 + i} />;
    //         }
    //     }

    //     if (firstDayOfTheMonth !== 0) {
    //         cells[firstDayOfTheMonth - 1 + currentDayInTheCalendar - 1] = <TableCellsVisionCurrentDate
    //             currentDayInTheCalendar={currentDayInTheCalendar}
    //             onClick={props.onClickCell}
    //             onDoubleClickOpenModal={props.modalCalendarOpenCloseClick}
    //             key={firstDayOfTheMonth - 1 + currentDayInTheCalendar - 1} />;
    //     } else {
    //         cells[6 + firstDayOfTheMonth + currentDayInTheCalendar - 1] = <TableCellsVisionCurrentDate
    //             currentDayInTheCalendar={currentDayInTheCalendar}
    //             onClick={props.onClickCell}
    //             onDoubleClickOpenModal={props.modalCalendarOpenCloseClick}
    //             key={6 + firstDayOfTheMonth + currentDayInTheCalendar - 1} />;
    //     }

    // }
}

export {
    subscribeFillTheCalendar
}