const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");
const timerEl = document.getElementById("timer");

let interval;
let timeLeft = 1500;
function updateTimer() {
  let minutes = Math.floor(timeLeft / 60);
  let secound = timeLeft % 60;
  let formattedTime = `${minutes.toString().padStart(2, "0")} : ${secound
    .toString()
    .padStart(2, "0")}`;
  timerEl.innerHTML = formattedTime;
}
function startTimer() {
  console.log("start");
  interval = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      alart("Time's up!");
      timeLeft = 1500;
      updateTimer();
    }
  }, 1000);
}
function stopTimer() {
  clearInterval(interval);
}
function resetTimer() {
  clearInterval(interval);
  timeLeft = 1500;
  updateTimer();
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
