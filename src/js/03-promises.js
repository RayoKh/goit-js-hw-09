// custom alerts
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  firstDelay: document.querySelector('input[name="delay"]'),
  stepDelay: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  submitBtn: document.querySelector('.form'),
};
refs.submitBtn.addEventListener('submit', e => {
  e.preventDefault();
  let delay = null;

  for (let i = 0; i < parseInt(refs.amount.value); i += 1) {
    delay =
      parseInt(refs.firstDelay.value) + i * parseInt(refs.stepDelay.value);

    createPromise(i + 1, delay)
      .then(({ position, delay }) => {
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) resolve({ position, delay });
      else reject({ position, delay });
    }, delay);
  });
}
