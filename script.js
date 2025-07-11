let isModalOpen = false;
let contrastToggle = false;

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList.add("modal__overlay--visible");
  emailjs
    .sendForm("kobigmail", "default", event.target, "aaShL3s1jv58O2J0E")
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList.add("modal__overlay--visible");
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly at montel2103@gmail.com"
      );
    });
}

function toggleModal() {
  isModalOpen = !isModalOpen;
  if (isModalOpen) return document.body.classList.add("modal--open");
  document.body.classList.remove("modal--open");
}

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) return document.body.classList.add("dark-theme");
  document.body.classList.remove("dark-theme");
}
