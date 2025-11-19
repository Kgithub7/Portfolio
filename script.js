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
  const close = document.querySelector(".modal__exit");
  loading.classList.add("modal__overlay--visible");
  close.classList.add("none");
  emailjs
    .sendForm("kobigmail", "default", event.target, "aaShL3s1jv58O2J0E")
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList.add("modal__overlay--visible");
      close.classList.remove("none");
      setTimeout(() => {
        success.classList.remove("modal__overlay--visible");
      }, 5000);
      event.target.reset();
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "The email service is temporarily unavailable. Please contact me directly at montel2103@gmail.com"
      );
    });
}

function toggleModal() {
  scrollTo(0, 0);
  isModalOpen = !isModalOpen;
  if (isModalOpen) return document.body.classList.add("modal--open");
  document.body.classList.remove("modal--open");
}

function toggleDarkTheme() {
  const themeIcon = document.querySelector(".theme-icon");
  darkTheme = !darkTheme;
  if (darkTheme) {
    document.body.classList.add("dark-theme");
    themeIcon.classList.remove("fa-moon");
    themeIcon.classList.add("fa-sun");
  } else {
    document.body.classList.remove("dark-theme");
    themeIcon.classList.remove("fa-sun");
    themeIcon.classList.add("fa-moon");
  }
}
