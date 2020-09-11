/* NAV BTN */

document.querySelector(".nav-btn").addEventListener('click', toggleVisibility)

document.querySelectorAll("nav a").forEach((navlink) => {
    navlink.addEventListener('click', toggleVisibility);
})

function toggleVisibility() {
    let nav = document.querySelector("nav");

    if (nav.classList.contains("hidden")) {
        nav.classList.remove("hidden");
    } else {
        nav.classList.add("hidden");
    }
}

/* MOUSE */

let center = document.querySelector(".cursor-center");
let ring = document.querySelector(".cursor-outside");

let oldclientX = -100;
let oldclientY = -100;
let clientX = -100;
let clientY = -100;
let counter = 0;

document.addEventListener("mousemove", (e) => {
    clientX = e.clientX;
    clientY = e.clientY;
});

// function for linear interpolation of values
const lerp = (a, b, n) => {
    return (1 - n) * a + n * b;
};

/* SCROLL FLOAT-UP ELEMENTS */

var scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60)};

let floatUp = Array.from(document.querySelectorAll(".float-up"));

function loop() {

    floatUp.forEach((el) => {
        if (isElementInViewport(el)) {
            el.classList.add('floated');
            floatUp = floatUp.filter((e) => (e != el));
        }
    })

    if (counter < 2) {
        oldclientX = lerp(oldclientX, clientX, 0.36);
        oldclientY = lerp(oldclientY, clientY, 0.36);
        counter++;
    } else {
        oldclientX = lerp(oldclientX, clientX, 0.36);
        oldclientY = lerp(oldclientY, clientY, 0.36);
        counter = 0;
    }

    center.style.transform = `translate(${clientX}px, ${clientY}px)`;
    ring.style.transform = `translate(${lerp(oldclientX, clientX, 0.1)}px, ${lerp(oldclientY, clientY, 0.1)}px) rotate(${Math.atan2(clientY - oldclientY, clientX - oldclientX) * 180 / Math.PI}deg) scaleY(${1 - 3*((Math.abs(clientX - oldclientX) + Math.abs(clientY - oldclientY)) / (oldclientX + oldclientY))})`;

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