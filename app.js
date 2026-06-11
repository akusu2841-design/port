const backBtn = Document.getElementById("backBtn");
backBtn.addEventListener("click",function()
                         {history.back();});

const menuBtn = document.getElementById("menuBtn")
const menu = document.getElementById("menu")

menuBtn.addEventListener("click",function(){
menu.classList.toggle("active");
});
