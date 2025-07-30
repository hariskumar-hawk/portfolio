function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const form = document.getElementById("contactForm");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData,
  });

  if (response.ok) {
    document.querySelector(".success-message").style.display = "block";
    document.querySelector(".error-message").style.display = "none";
    form.reset();
  } else {
    document.querySelector(".success-message").style.display = "none";
    document.querySelector(".error-message").style.display = "block";
  }
});