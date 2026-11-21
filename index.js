document.addEventListener("DOMContentLoaded", function () {
    const leftBtn = document.getElementById('left-btn');
    const rightBtn = document.getElementById('right-btn');
    const cards = document.querySelector('.cards');

    const scrollAmount = 300; // pixels per click

    leftBtn.addEventListener('click', () => {
        cards.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    rightBtn.addEventListener('click', () => {
        cards.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
});