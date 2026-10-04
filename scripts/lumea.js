const menuToggle = document.querySelector(".menu-toggle");

const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", function() {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
    menuToggle.textContent = "✕";
}
    else {
    menuToggle.textContent = "☰";
}
});

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function(link) {
    link.addEventListener("click", function() {
        navMenu.classList.remove("active");
        menuToggle.textContent = "☰";
    });
});

const themeToggle = document.querySelector(".theme-toggle");

const body = 
document.querySelector("body");

themeToggle.addEventListener("click", 
    function() {
    body.classList.toggle("dark-mode");

if (body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
} else {
    localStorage.setItem("theme", "light");
}
});

document.body.classList.add("no-transition");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    body.classList.add("dark-mode");
}
setTimeout(function() {
    body.classList.remove("no-transition");
}, 50);

