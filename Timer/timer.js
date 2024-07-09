const deadline = "2024-08-10";

function getTimeRemaining(endtime) {
  let days, hours, minutes, seconds;
  const t = Date.parse(endtime) - Date.parse(new Date());

  if (t <= 0) {
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
  } else {
    days = Math.floor(t / (1000 * 60 * 60 * 24));
    hours = Math.floor(((t / 1000) * 60 * 60) % 24);
    minutes = Math.floor((t / 1000 / 60) % 60);
    seconds = Math.floor((t / 1000) % 60);
  }

  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function getZero(num) {
  if (num >= 0 && num < 10) {
    return `0${num}`;
  } else {
    return num;
  }
}

function setClock(selector, endtime) {
  const timer = document.querySelector(".timer");
  const days = timer.querySelector("#days");
  const hours = timer.querySelector("#hours");
  const minutes = timer.querySelector("#minutes");
  const seconds = timer.querySelector("#seconds");
  const timeInterval = setInterval(updateClocks, 1000);

  updateClocks();

  function updateClocks() {
    const t = getTimeRemaining(endtime);

    days.innerHTML = getZero(t.days);
    hours.innerHTML = getZero(t.hours);
    minutes.innerHTML = getZero(t.minutes);
    seconds.innerHTML = getZero(t.seconds);

    if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  }
}

setClock(".timer", deadline);

//Modal

const modalApp = document.querySelectorAll("[data-modal]");
const modalCloses = document.querySelectorAll("[modal-close]");
const modal = document.querySelector(".modalWindow");

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
  clearInterval(timeModal);
}

function closeModal() {
  modal.classList.add("hide");
  modal.classList.remove("show");
}

modalApp.forEach((button) => {
  button.addEventListener("click", openModal);
});

modalCloses.forEach((button) => {
  button.addEventListener("click", closeModal);
});

//Якщо натискаємо на будь-яку область, то модальне закриється.

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

//додамо функцію появи модалки після деякого часу на сайті

const timeModal = setTimeout(openModal, 4000);

//console.log(`We see: ${timeModal}`);

window.addEventListener("scroll", () => {
  if (
    window.documentElement.pageYOffset +
      document.documentElement.clientHeight >=
    document.documentElement.scrollHeight - 1
  ) {
    openModal();
  }
});

//Work with box

const box = document.querySelector(".box");

let observer = new MutationObserver((mutationRecords) => {
  console.log(mutationRecords);
});

observer.observe(box, {
  childList: true,
});
