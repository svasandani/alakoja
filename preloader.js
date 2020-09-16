/* PRELOADER */

window.addEventListener('load', onloadfunc);

function onloadfunc() {
    let preloader = document.querySelector(".preloader");

    let h1 = preloader.querySelector("h1");

    const listener = () => {
        preloader.classList.add("ready");
        h1.removeEventListener('animationend', listener);
    };

    h1.addEventListener('animationend', listener);
    
    setTimeout(() => {preloader.classList.add("ready");}, 5000);
    
    document.body.style.overflow = "auto";
}

// fade out on link click

document.addEventListener('DOMContentLoaded', () => {
    let fader = document.querySelector(".fader");

    let links = document.querySelectorAll("a");

    links.forEach((link) => {
        if (link.hostname !== window.location.hostname || link.pathname === window.location.pathname) return;
        link.addEventListener('click', (e) => {
            const listener = () => {
                window.location = link.href;
                fader.removeEventListener('animationend', listener);
            };

            fader.addEventListener('animationend', listener);

            e.preventDefault();
            fader.classList.add("fade-in");
        });
    });
});

window.addEventListener('pageshow', (e) => {
    if (!e.persisted) {
      return;
    }
    let fader = document.querySelector(".fader");
    fader.classList.remove("fade-in");
});