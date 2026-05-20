const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let timerId = null;
startBtn.addEventListener('click', startColorSwitcher);
stopBtn.addEventListener('click', stopColorSwitcher);
stopBtn.disabled = true;
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function startColorSwitcher() {
  startBtn.disabled = true;
  stopBtn.disabled = false;
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
function stopColorSwitcher() {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
  setTimeout(() => {
    body.style.backgroundColor = 'white';
  }, 2000);
}
