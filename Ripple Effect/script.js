const btnEl = document.querySelectorAll('.btn');

btnEl.forEach(btn => {
    btn.addEventListener('click', function(e) {
        const top = e.clientY;
        const left = e.clientX;
        const btnTop = e.target.offsetTop;
        const btnLeft = e.target.offsetLeft;

        const rippleEl = document.createElement('span');
        rippleEl.classList.add('ripple');
        rippleEl.style.left = left - btnLeft + 'px';
        rippleEl.style.top = top - btnTop + 'px';

        this.appendChild(rippleEl);

        setTimeout(rippleEl.remove, 500);
    })
})