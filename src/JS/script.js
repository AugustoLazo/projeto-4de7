function accordion() {
    const openAccordionBtn = document.querySelectorAll('.js--accordion__btn');

    openAccordionBtn.forEach((item) => {
        item.addEventListener('click', () => {
            item.nextElementSibling.classList.toggle('is--active');
        });
    });
};

document.addEventListener("DOMContentLoaded", () => {
    accordion();

});