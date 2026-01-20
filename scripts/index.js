'use strict';

window.onscroll = function () {
    const title = document.querySelector('.first-section-title');
    title.style.transform = `translateX(${window.scrollY * 1.5 }px)`;
}