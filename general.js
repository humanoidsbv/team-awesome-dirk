const primaryNav = document.querySelector(".main-nav");
const navToggle = document.querySelector(".mob-nav-toggle");

navToggle.addEventListener("click", () => {
const visibility = primaryNav.getAttribute("data-visible");

if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
    navToggle.classList.add("open");
} else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
    navToggle.classList.remove("open");
    
}

});
