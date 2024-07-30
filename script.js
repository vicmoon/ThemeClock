const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEL = document.querySelector(".time");
const dateEL = document.querySelector(".date");
const toggle = document.querySelector(".toggle");
const html = document.querySelector("html");

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

toggle.addEventListener("click", () => {
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    toggle.innerHTML = '<i class="fas fa-moon"></i>';
    toggle.style.backgroundColor = "#03346e"; // revert to original color
    toggle.style.color = "var(--secondary-color)";
  } else {
    html.classList.add("dark");
    toggle.innerHTML = '<i class="fas fa-sun"></i>';
    toggle.style.backgroundColor = "white"; // change to white
    toggle.style.color = "black"; // ensure text color contrasts with white background
  }
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hour = time.getHours();
  const hoursForClock = hour % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const ampm = hour >= 12 ? "PM" : "AM";

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`;

  if (hoursForClock == 12) {
    changeBackgroundColor();
  }

  timeEL.innerHTML = `${hoursForClock}:${
    minutes < 10 ? `0${minutes}` : minutes
  } ${ampm}`;

  dateEL.innerHTML = `${days[day]}, ${months[month]} <span class="circle"> ${date}</span>`;

  //Map a range of numbers to another range of numbers :
  function scale(number, inMin, inMax, outMin, outMax) {
    return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
  }
}

function changeBackgroundColor() {
  html.classList.add("dark");
}

setTime();
setInterval(setTime, 1000);
