/* NAV BTN */
let nav = document.querySelector("nav");

document.querySelector(".nav-btn").addEventListener('click', toggleVisibility)

document.querySelectorAll("nav a").forEach((navlink) => {
    navlink.addEventListener('click', toggleVisibility);
})

function toggleVisibility() {
    if (nav.classList.contains("hidden")) {
        nav.classList.remove("hidden");
    } else {
        nav.classList.add("hidden");
    }
}

/* MOUSE 

let center = document.querySelector(".cursor-center");
let ring = document.querySelector(".cursor-outside");

let oldclientX = -100;
let oldclientY = -100;
let clientX = -100;
let clientY = -100;

let oldR = 0;
let R = 0;

let squarehover = document.querySelectorAll(".square-hover");

document.addEventListener("mousemove", (e) => {
    clientX = e.clientX;
    clientY = e.clientY;
});

squarehover.forEach((el) => {
    el.addEventListener('mouseover', () => {
        ring.style.borderRadius = "5px";
    })

    el.addEventListener('mouseout', () => {
        ring.style.borderRadius = "50%";
    })
})

// function for linear interpolation of values
const lerp = (a, b, n) => {
    return (1 - n) * a + n * b;
};

/* SCROLL FLOAT-UP ELEMENTS */

var scroll = window.requestAnimationFrame || function(callback){ window.setTimeout(callback, 1000/60)};

let floatUp = Array.from(document.querySelectorAll(".float-up"));

let header = document.querySelector("header");

let oldoffset = 0;
let offset = 0;

function loop() {

    floatUp.forEach((el) => {
        if (isElementInViewport(el)) {
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

    oldoffset = offset;

    // header scroll bar
    offset = window.scrollY - (window.innerHeight * (0.7 - 0.115)) - 5;

    if (offset < 0) {
        header.style.transform = "translateY(0px)";
    } else {
        header.style.transform = "translateY(-" + offset + "px)";
    }

    // nav function to hide on scroll
    if (oldoffset != offset) {
        nav.classList.add("hidden");
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

/* VIDEOS */

let videos = document.querySelectorAll("video.work-img");

videos.forEach((v) => {
    v.addEventListener('mouseover', () => {
        v.play();
    })

    v.addEventListener('mouseout', () => {
        v.pause();
    })
})

/* HERO VIDEO */

let toggle = 1;
let herovid = document.querySelector(".hero-img");

function showNext() {
    if (toggle == 0) {
        herovid.setAttribute("src", "nyu.mp4");
        toggle = 1;
        herovid.play();
    } else if (toggle == 1) {
        herovid.setAttribute("src", "terraling.mp4");
        toggle = 2;
        herovid.play();
    } else if (toggle == 2) {
        herovid.setAttribute("src", "codecademy.mp4");
        toggle = 0;
        herovid.play();
    }
}

/* PRELOADER */

window.addEventListener('load', onloadfunc);

function onloadfunc() {
    let preloader = document.querySelector(".preloader");

    preloader.classList.add("ready");
    
    document.body.style.overflow = "auto";
}

/* CLIENTS */
let clients = document.querySelectorAll(".client");

clients.forEach((client) => {
    let imgtag = client.getAttribute("data-bg");

    let img = document.querySelector(".client-img-bg ." + imgtag);

    client.addEventListener('mouseover', () => {
        console.log(client);
        img.style.opacity = "0.24";
    })

    client.addEventListener('mouseout', () => {
        img.style.opacity = "0";
    })
});