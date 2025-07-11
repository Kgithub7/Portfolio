let isModalOpen = false;
let darkTheme = true;
const scaleFactor = 1 / 20;

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 === 1;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
  }
}

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

function toggleDarkTheme() {
  darkTheme = !darkTheme;
  if (darkTheme) return document.body.classList.add("dark-theme");
  document.body.classList.remove("dark-theme");
}
