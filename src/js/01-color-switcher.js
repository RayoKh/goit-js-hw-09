const refs = {
  body: document.body,
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};
refs.stopBtn.classList.add('disabled');
let timerId = null;

refs.startBtn.addEventListener('click', onStartBtnHandler);
refs.stopBtn.addEventListener('click', onStopBtnHandler);

function onStartBtnHandler() {
  if (refs.startBtn.classList.contains('disabled')) return;

  refs.startBtn.classList.add('disabled');
  refs.stopBtn.classList.remove('disabled');

  timerId = setInterval(() => {
    const randomColor = getRandomHexColor();

    refs.body.style.backgroundColor = `${randomColor}`;
  }, 1000);
}

function onStopBtnHandler() {
  refs.startBtn.classList.remove('disabled');
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
