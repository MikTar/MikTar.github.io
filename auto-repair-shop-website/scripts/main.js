let today = new Date();
let dd =today.getDate();
let mm =today.getMonth();
mm = mm + 1;
mm = String(mm)

if(mm.length < 2){
    mm = `0${mm}`
}

let divToday = document.querySelector('#date-today');
let divTomorrow = document.querySelector('#date-tomorrow');
let divAftTomorrow = document.querySelector('#date-after-tomorrow');

divToday.innerText = `${dd}.${mm}`;
divTomorrow.innerText = `${dd+1}. ${mm}`;
divAftTomorrow.innerText = `${dd+2}. ${mm}`;

let hoursDisplay = document.querySelector('#div-hours');

