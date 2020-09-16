st = window.sessionStorage;

if (st.getItem('darkmode') !== 'true') {
    darkmode = false;
} else {
    darkmode = true;
}

let darkmodebtn = document.querySelector(".dark-mode-btn");

setDarkmode(darkmodebtn);

function setDarkmode(darkmodebtn) {
    if (darkmode) {
        document.documentElement.classList.add("dark-mode");
        st.setItem('darkmode', 'true');
        darkmodebtn.innerHTML = "In brightest day";
    } else {
        document.documentElement.classList.remove("dark-mode");
        st.setItem('darkmode', 'false');
        darkmodebtn.innerHTML = "In blackest night";
    }
}

if (darkmodebtn != null) {
    darkmodebtn.addEventListener('click', () => {
        darkmode = !darkmode;
        setDarkmode(darkmodebtn);
    })
}