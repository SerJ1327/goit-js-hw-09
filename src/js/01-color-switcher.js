const startChangeColorBtn = document.querySelector('[data-start]');
const stopChangeColorBtn = document.querySelector('[data-stop]');
const body = document.querySelector('body');

stopChangeColorBtn.setAttribute('disabled', '');

startChangeColorBtn.addEventListener('click', e => {
  timerId = setInterval(() => {
    body.style = `background-color: ${getRandomHexColor()}`;
  }, 1000);

  startChangeColorBtn.setAttribute('disabled', '');
  stopChangeColorBtn.removeAttribute('disabled', '');
});

stopChangeColorBtn.addEventListener('click', e => {
  clearInterval(timerId);
  startChangeColorBtn.removeAttribute('disabled', '');
  stopChangeColorBtn.setAttribute('disabled', '');
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
