
//DATE

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

//-----------------------------------------------------------------------------------------------------------------------------------------------//
//CHOOSE DATE

let firstDate = document.querySelector('.first-date');
let secondDate = document.querySelector('.second-date');
let thirdDate = document.querySelector('.third-date');

firstDate.addEventListener('click', function(){
    firstDate.style.backgroundColor = 'orangered';
    firstDate.style.color = 'white';
    secondDate.style.backgroundColor = 'transparent';
    thirdDate.style.backgroundColor = 'transparent';
    secondDate.style.color = '#9497a1';
    thirdDate.style.color = '#9497a1';

});
secondDate.addEventListener('click', function(){
    secondDate.style.backgroundColor = 'orangered';
    secondDate.style.color = 'white';
    thirdDate.style.backgroundColor = 'transparent';
    firstDate.style.backgroundColor = 'transparent';
    thirdDate.style.color = '#9497a1';
    firstdDate.style.color = '#9497a1';
    
});
thirdDate.addEventListener('click', function(){
    thirdDate.style.backgroundColor = 'orangered';
    thirdDate.style.color = 'white';
    secondDate.style.backgroundColor = 'transparent';
    firstDate.style.backgroundColor = 'transparent';
    secondDate.style.color = '#9497a1';
    firstDate.style.color = '#9497a1';
});




//-----------------------------------------------------------------------------------------------------------------//
//CHOOSE HOUR


let divHours = document.querySelector('#div-hours');
let selectedHour;

divHours.onclick = function(event) {
  let target = event.target; // где был клик?
  if (target.tagName != 'SPAN')return; // не на TD? тогда не интересует

  changeBgColor(target); // подсветить TD
};

function changeBgColor(span) {
  if (selectedHour) { // убрать существующую подсветку, если есть
    selectedHour.classList.remove('selected-hour');
  }
  selectedHour = span;
  selectedHour.classList.add('selected-hour'); // подсветить новый td
}
//-----------------------------------------------------------------------------------------------------------------//