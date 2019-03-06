window.onscroll = function () {
    scrollFunction();
    getInnerHeight();
}

window.onload = function () {
    openMenu();
    closeMenu();

}

function getInnerHeight() {
    const scroll = window.scrollY;
    const div = document.getElementById('menu');
    return div.style.top = scroll;
}

function scrollFunction() {
    const viewHeight = (window.innerHeight - 89);
    const viewHeightBis = (window.innerHeight - 40);
    const nav = document.getElementById('nav');

    if (document.body.scrollTop > viewHeight || document.documentElement.scrollTop > viewHeight) {
        nav.classList.add('sticky');
        nav.classList.remove('noSticky');


    } else if (document.body.scrollTop < viewHeightBis || document.documentElement.scrollTop < viewHeightBis) {
        nav.classList.remove('sticky');
        nav.classList.add('noSticky');
    }
}

function openMenu() {
    let menu = document.getElementById('menu');
    const overlay = document.getElementById('overlay');
    const scroll = window.scrollY;
    if (menu.classList.contains('noVisible')) {
        menu.classList.add('visible');
        menu.classList.remove('noVisible');
        body.classList.add('noOverflow');
        overlay.classList.add('overlay');
        overlay.classList.remove('noOverlay');
        return overlay.style.top = scroll;
    }
}

function closeMenu() {
    let menu = document.getElementById('menu');
    const overlay = document.getElementById('overlay');
    const scroll = window.scrollY;
    if (menu.classList.contains('visible')) {
        menu.classList.remove('visible');
        menu.classList.add('noVisible');
        body.classList.remove('noOverflow');
        overlay.classList.remove('overlay');
        overlay.classList.add('noOverlay');
    }
}