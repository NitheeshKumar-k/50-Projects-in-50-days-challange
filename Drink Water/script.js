const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const smallCups = document.querySelectorAll('.cup.cup-small');
const remaining = document.getElementById('remaining');

calculatePercentage();

smallCups.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightCup(idx));
})

function highlightCup(idx) {
    if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--;
    }

    smallCups.forEach((cup, idx1) => {
        if(idx1 <= idx) {
            cup.classList.add('full');
        } else{
            cup.classList.remove('full');
        }
    });

    calculatePercentage();
}

function calculatePercentage() {
    const total = smallCups.length;
    const filledCups = document.querySelectorAll('.full').length;
    liters.innerText = `${2 - filledCups * 250 / 1000}L`;

    if(filledCups === 0) {
        percentage.style.height = 0;
        percentage.style.visibility = 'hidden';
    } else {
        percentage.style.height = `${filledCups / total * 330}px`;
        percentage.style.visibility = 'visible';
        percentage.innerText = `${filledCups/ total * 100}%`;
    }

    if(filledCups === total) {
        remaining.style.height = 0;
        remaining.style.visibility = 'hidden';
    } else {
        remaining.style.visibility = 'visible';
    }
}