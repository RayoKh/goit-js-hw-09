const refs = {
  body: document.body,
  startBtn: document.querySelector('button[data-start]'),
  stopBtn: document.querySelector('button[data-stop]'),
};
refs.stopBtn.disabled = true;
let timerId = null;

refs.startBtn.addEventListener('click', onStartBtnHandler);
refs.stopBtn.addEventListener('click', onStopBtnHandler);

function onStartBtnHandler() {
  if (refs.startBtn.disabled) return;

  refs.startBtn.disabled = true;
  refs.stopBtn.disabled = false;

  timerId = setInterval(() => {
    const randomColor = getRandomHexColor();

    refs.body.style.backgroundColor = `${randomColor}`;
  }, 1000);
}

function onStopBtnHandler() {
  refs.startBtn.disabled = false;
  clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
