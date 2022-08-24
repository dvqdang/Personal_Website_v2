
// Hamburger Nav Bar for small screens
const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");

function toggleButton() {
    navList.classList.toggle("show");
}

hamburgerButton.addEventListener("click", toggleButton);

// Switch for light and dark mode
const switchElement = document.querySelector(".switch");

switchElement.addEventListener("click", () => {
    document.body.classList.toggle("dark");
})

