let html = document.getElementById("time");

setInterval(function() {
  let time = new Date();

  let hours = time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  (hours < 10) ? hours = "0" + hours : hours;
  (minutes < 10) ? minutes = "0" + minutes : minutes;
  (seconds < 10) ? seconds = "0" + seconds : seconds;

  html.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}, 1000);