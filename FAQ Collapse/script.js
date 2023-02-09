const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.parentElement.classList.toggle('active');
    });
})