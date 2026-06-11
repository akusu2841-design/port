const backBtn = Document.getElementById("backBtn");
backBtn.addEventListener("click", function()
                         {history.back();});

const menuBtn = document.getElementById("menuBtn")
const navLinks = document.getElementById("nav-links")

navLinks.addEventListener("click", function(){
menuBtn.classList.toggle("active")
});
