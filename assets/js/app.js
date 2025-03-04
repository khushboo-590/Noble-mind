let menuIcon = document.querySelector(".menu-icon");
let menuList = document.querySelector(".menu-list");
menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("show")
    let activeNav = menuList.hasAttribute("class", "show");
    if (activeNav) { menuIcon.classList.toggle("active") };
})

const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});









