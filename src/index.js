// Variables
const menuIcon = document.querySelector(".bi-list");
const innerNav = document.querySelector(".inner_nav");

menuIcon.addEventListener("click", () => {
    innerNav.classList.toggle("hide");
});