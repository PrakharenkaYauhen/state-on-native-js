// initial state of the App

const getInitialState = () => {

    const currentDate = new Date();
    const currentDayInTheCalendar = new Date().getDate();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();

    let currentLocalStorageKey = currentYear + ' ' + currentMonth + ' ' + currentDayInTheCalendar;


    return {
        task: JSON.parse(localStorage.getItem(currentLocalStorageKey)),
        // modalActive: false,
        currentDate: currentDate,
        currentDayInTheCalendar: currentDayInTheCalendar,
        currentLocalStorageKey: currentLocalStorageKey,
        loadComplete: false,
        weatherObject: null,
    };
};

export {getInitialState}