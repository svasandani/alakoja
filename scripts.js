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