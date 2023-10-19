// Add your code here

document.addEventListener("DOMContentLoaded", function () {
  const body = document.getElementsByTagName("body")[0];

  const startStopBtn = document.getElementById("start-stop-btn");
  const timeInput = document.getElementById("time-input");

  const startColor = "rgb(11, 94, 215)";
  const stopColor = "rgb(187, 45, 59)";
  var timerValue = 3000;

  startStopBtn.addEventListener("click", function () {
    if (timeInput.value !== "") {
      if (startStopBtn.style.backgroundColor === startColor) {
        startStopBtn.style.backgroundColor = stopColor;
        startStopBtn.innerHTML = "Stop";
        timerValue = timeInput.value;
      } else {
        startStopBtn.style.backgroundColor = startColor;
        startStopBtn.innerHTML = "Start";
        timerValue = 3000;
      }
    }
  });

  function getRandomRGBA() {
    const r = Math.floor(Math.random() * 256); // Red component (0-255)
    const g = Math.floor(Math.random() * 256); // Green component (0-255)
    const b = Math.floor(Math.random() * 256); // Blue component (0-255)

    return `rgba(${r},${g},${b},${0.7})`;
  }

  function timerColor() {
    const randomColor = getRandomRGBA();
    body.style.background = randomColor;
  }

  setInterval(timerColor, timerValue);
});
