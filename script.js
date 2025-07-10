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

let isModalOpen = false;
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = !isModalOpen;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = !isModalOpen;
  document.body.classList.add("modal--open");
}
