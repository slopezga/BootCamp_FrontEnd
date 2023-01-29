const hamMenu = document.querySelector(".ham-menu")
const mobileMenu = document.querySelector(".mobile-menu")

hamMenu.addEventListener("click", toggleShowMobileMenu)

function toggleShowMobileMenu () {
    mobileMenu.classList.toggle("inactive")
}