/* NAV BTN */
let nav = document.querySelector("nav");

let navbtn = document.querySelector(".nav-btn");

navbtn.addEventListener('click', toggleVisibility)

document.querySelectorAll("nav a").forEach((navlink) => {
    navlink.addEventListener('click', toggleVisibility);
})

function toggleVisibility() {
    if (nav.classList.contains("hidden")) {
        fadeNavBtn("✕");
        nav.classList.remove("hidden");
    } else {
        fadeNavBtn("☰");
        nav.classList.add("hidden");
    }
}

function fadeNavBtn(text) {
    navbtn.style.opacity = "0";
    setTimeout(() => {
        navbtn.innerHTML = text;
        setTimeout(() => {
            navbtn.style.opacity = "1";
        }, 150);
    }, 150);
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

/* HEADER */

const doWork = () => {
    oldoffset = offset;

    // header scroll bar
    offset = window.scrollY - (window.innerHeight * (0.7 - 0.115)) - 5;

    // nav function to hide on scroll
    if (oldoffset != offset) {
        nav.classList.add("hidden");
    }

    if (offset < 0) {
        header.style.transform = "translateY(0px)";
    } else {
        header.style.transform = "translateY(-" + offset + "px)";
    }
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

/* CLIENTS */
let clients = document.querySelectorAll(".client");

clients.forEach((client) => {
    let imgtag = client.getAttribute("data-bg");

    let img = document.querySelector(".client-img-bg ." + imgtag);

    client.addEventListener('mouseover', () => {
        img.style.opacity = "0.44";
    })

    client.addEventListener('mouseout', () => {
        img.style.opacity = "0";
    })
});