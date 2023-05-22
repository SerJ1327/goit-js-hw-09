const startChangeColorBtn = document.querySelector('[data-start]');
const stopChangeColorBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

stopChangeColorBtn.disabled = true;
let timerId;

startChangeColorBtn.addEventListener('click', e => {
  timerId = setInterval(() => {
    body.style = `background-color: ${getRandomHexColor()}`;
  }, 1000);

  startChangeColorBtn.disabled = true;
  stopChangeColorBtn.disabled = false;
});

stopChangeColorBtn.addEventListener('click', e => {
  clearInterval(timerId);
  startChangeColorBtn.disabled = false;
  stopChangeColorBtn.disabled = true;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
