import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const inputDateTime = document.getElementById('datetime-picker');
const startCountDownBtn = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');

startCountDownBtn.setAttribute('disabled', '');

let differentTime = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (options.defaultDate >= selectedDates[0]) {
      Notify.info('Please choose a date in the future');
    } else {
      startCountDownBtn.disabled = false;
      startCountDownBtn.addEventListener('click', () => {
        startCountDownBtn.disabled = true;
        countDifferentTime(selectedDates[0], options.defaultDate);
      });
    }
  },
};

flatpickr(inputDateTime, options);

function countDifferentTime(handleTime, timeNow) {
  differentTime = handleTime.getTime() - timeNow.getTime();
  setInterval(countdown, 1000);
}

function countdown() {
  differentTime -= 1000;
  if (differentTime > 1) {
    convertMs(differentTime);
  }

  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    addDataTimerToMakrup(days, hours, minutes, seconds);
  }
}

function addDataTimerToMakrup(days, hours, minutes, seconds) {
  dataDays.innerHTML = String(days).padStart(2, '0');
  dataHours.innerHTML = String(hours).padStart(2, '0');
  dataMinutes.innerHTML = String(minutes).padStart(2, '0');
  dataSeconds.innerHTML = String(seconds).padStart(2, '0');
}
