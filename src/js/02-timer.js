// flatpick (custom date)
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

// Notiflix (custom alerts)
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  datePicker: document.getElementById('datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  daysSpan: document.querySelector('[data-days]'),
  hoursSpan: document.querySelector('[data-hours]'),
  minutesSpan: document.querySelector('[data-minutes]'),
  secondsSpan: document.querySelector('[data-seconds]'),
};

refs.startBtn.disabled = true;
let inputDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    inputDate = new Date(selectedDates[0]).getTime();
    if (options.defaultDate > inputDate) {
      return Notify.failure('Please choose a date in the future');
    }
    refs.startBtn.disabled = false;
  },
};

flatpickr(refs.datePicker, options);

refs.startBtn.addEventListener('click', onStartBtnHandler);

function onStartBtnHandler() {
  refs.startBtn.disabled = true;
  refs.datePicker.disabled = true;

  const timerId = setInterval(() => {
    const currentDate = new Date().getTime();
    if (inputDate - currentDate < 0) return clearInterval(timerId);

    const remainingTime = convertMs(inputDate - currentDate);
    const { days, hours, minutes, seconds } = remainingTime;

    refs.daysSpan.textContent = `${addLeadingZero(days)}`;
    refs.hoursSpan.textContent = `${addLeadingZero(hours)}`;
    refs.minutesSpan.textContent = `${addLeadingZero(minutes)}`;
    refs.secondsSpan.textContent = `${addLeadingZero(seconds)}`;
  }, 1000);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
