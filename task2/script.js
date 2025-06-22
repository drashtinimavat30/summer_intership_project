let startTime, elapsedTime = 0, timerInterval;

function timeToString(time) {
  let date = new Date(time);
  return date.toISOString().substr(11, 12);
}

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    document.getElementById("display").textContent = timeToString(elapsedTime);
  }, 10);
}

function pauseTimer() {
  clearInterval(timerInterval);

  
}

function resetTimer() {
  clearInterval(timerInterval);
  document.getElementById("display").textContent = "00:00:00.000";
  elapsedTime = 0;
  document.getElementById("laps").innerHTML = "";
}

function lapTimer() {
  const lapTime = timeToString(elapsedTime);
  const lapItem = document.createElement("li");
  lapItem.textContent = `Lap: ${lapTime}`;
  document.getElementById("laps").appendChild(lapItem);
}

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);
document.getElementById("lap").addEventListener("click", lapTimer);
