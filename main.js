var time = document.getElementById("time");
var elapsed = 0;
var startButton = document.getElementById("startBtn");
var stopButton = document.getElementById("stopBtn");
var resetButton = document.getElementById("resetBtn");
var timeLimit = document.getElementById("timeI");
var interval;
var startTime;

var dropdownItems = document.querySelectorAll(".dropdown-menu li a");
var labelLimit = document.getElementById("labelLimit");

for (var i = 0; i < dropdownItems.length; i++) {
  dropdownItems[i].addEventListener("click", function (e) {
    e.preventDefault();
    var timeValue = this.getAttribute("data-time");
    console.log(timeValue);
    labelLimit.innerHTML = timeValue / 60000 + " minutes";
  });
}

window.onload = function () {
  stopButton.disabled = true;
  resetButton.disabled = true;
  startButton.disabled = false;
};

startButton.addEventListener("click", function () {
  startTimer();
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = true;
});

stopButton.addEventListener("click", function () {
  stopTimer();
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
});

resetButton.addEventListener("click", function () {
  resetTimer();
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;
});

function pad(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
}

function formatTime(milliseconds) {
  var minutes = Math.floor(milliseconds / 60000);
  var seconds = Math.floor((milliseconds % 60000) / 1000);
  if (minutes >= labelLimit / 60000) {
    alert("Time's up!");
  }
  return pad(minutes) + ":" + pad(seconds);
}

function startTimer() {
  startTime = Date.now() - elapsed;
  timerInterval = setInterval(function () {
    elapsedTime = Date.now() - startTime;
    time.innerHTML = formatTime(elapsedTime);
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  elapsed = elapsed;
}

function resetTimer() {
  console.log(elapsed);
  clearInterval(timerInterval);
  elapsed = 0;
  time.innerHTML = "00:00";
}
