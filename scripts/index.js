'use strict';

window.onscroll = function () {
    document.querySelector('.first-section-title').style.transform = `translateX(${window.scrollY * 1.5}px)`;
}