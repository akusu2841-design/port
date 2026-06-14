const backBtn = document.getElementById("backBtn");

if (backBtn) {
  backBtn.addEventListener("click", () => {
    history.back();
  });
}

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {
  menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
}

emailjs.init("wAjPi_RdXifi5CZNw");

const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm(
    "service_egluhxm",
    "template_w73ml7r",
    form
  )
  .then(() => {
    alert("Message sent successfully!");
    form.reset();
  })
  .catch((error) => {
    alert("Failed to send message.");
    console.log(error);
  });
});
