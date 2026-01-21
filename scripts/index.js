'use strict';

window.onscroll = function (e) {
    document.querySelector('.first-section-title').style.transform = `translateX(${window.scrollY * 1.5}px)`;
}