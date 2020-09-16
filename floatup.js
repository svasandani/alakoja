var scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60)};

let floatUp = Array.from(document.querySelectorAll(".float-up"));

let header = document.querySelector("header");

let preloader = document.querySelector(".preloader");

let oldoffset = 0;
let offset = 0;

let haswork = true;

function loop() {

    floatUp.forEach((el) => {
        if (isElementInViewport(el) && preloader.classList.contains("ready")) {
            el.classList.add('floated');
            floatUp = floatUp.filter((e) => (e != el));
        }
    })

    /* oldclientX = lerp(oldclientX, clientX, 0.36);
    oldclientY = lerp(oldclientY, clientY, 0.36);

    R = Math.atan2(clientY - oldclientY, clientX - oldclientX) * 180 / Math.PI;
    oldR = lerp(oldR, R, 0.95);

    center.style.transform = `translate(${clientX}px, ${clientY}px)`;
    ring.style.transform = `translate(${lerp(oldclientX, clientX, 0.1)}px, ${lerp(oldclientY, clientY, 0.1)}px) rotate(${oldR}deg) scaleY(${1 - 4*((Math.abs(clientX - oldclientX) + Math.abs(clientY - oldclientY)) / (oldclientX + oldclientY))})`;
    */

    if (haswork) {
        try {
            doWork();
        } catch(e) {
            haswork = false;
        }
    }

    scroll(loop);
}

loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
    }

    var rect = el.getBoundingClientRect();
    return (
      (rect.top <= 0
        && rect.bottom >= 0)
      ||
      (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.top <= (window.innerHeight || document.documentElement.clientHeight))
      ||
      (rect.top >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}
