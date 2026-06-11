const backBtn = document.getElementById("backBtn");
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

backBtn.addEventListener("click", () => history.back());

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});
