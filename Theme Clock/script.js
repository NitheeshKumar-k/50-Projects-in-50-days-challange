const hoursEl = document.querySelector('.hours');
const minutesEl = document.querySelector('.minutes');
const secondsEl = document.querySelector('.seconds');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');
const htmlEl = document.querySelector('html');

const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];

const days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];

toggle.addEventListener('click', (e) => {
    if(htmlEl.classList.contains('dark')) {
        htmlEl.classList.remove('dark');
        e.target.innerHTML = 'Dark Mode';
    } else {
        htmlEl.classList.add('dark');
        e.target.innerHTML = 'Light Mode';
    }
})

setClock();

function setClock() {
    let date = new Date();
    const hours = date.getHours();
    const hoursInHalfDay = hours % 12;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const day = date.getDay();
    const month = date.getMonth();
    const dateOfMonth = date.getDate();
    const ampm = hours < 12 ? 'AM' : 'PM';

    hoursEl.style.transform = `translate(-50%, -100%) rotate(${scale(hoursInHalfDay, 0, 11, 0, 359)}deg)`;
    minutesEl.style.transform = `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 359)}deg)`;
    secondsEl.style.transform = `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 359)}deg)`;

    timeEl.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`;
    dateEl.innerHTML = `${days[day]}, ${months[month]} <span class='circle'>${dateOfMonth}</span>`
}

setInterval(setClock, 1000);
function scale(value, sourceRangeMin, sourceRangeMax, targetRangeMin, targetRangeMax) {
    var targetRange = targetRangeMax - targetRangeMin;
    var sourceRange = sourceRangeMax - sourceRangeMin;
    return (value - sourceRangeMin) * targetRange / sourceRange + targetRangeMin;
}