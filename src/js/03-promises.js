import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  let delay = Number(e.currentTarget.elements.delay.value);
  let step = Number(e.currentTarget.elements.step.value);
  let amount = Number(e.currentTarget.elements.amount.value);

  for (let position = 1; position <= amount; position += 1) {
    createPromise(position, delay);

    delay += step;
  }
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }

      reject(`❌ Rejected promise ${position} in ${delay}m`);
    }, delay);
  });

  promise.then(
    result => {
      Notify.success(result);
    },
    result => {
      Notify.warning(result);
    }
  );
}
