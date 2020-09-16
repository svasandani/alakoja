let section = document.querySelector(".contact-section");

let form = document.querySelector(".contact-form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    section.style.transition = "0.1s linear";
    section.style.opacity = "0";

    setTimeout(() => {
        section.innerHTML = "<h3>Transmission received. Awaiting response...</h3><p>Check your inbox soon — it shouldn't take more than 2 business days.<br><a href=\"/\">Click here to head back to base.</a></p>";

        let a = section.querySelector("a");

        a.addEventListener('click', (e) => { addFadeOut(document.querySelector(".fader"), a, e) });

        setTimeout(() => { section.style.opacity = "1"; }, 250);
    }, 250)
});