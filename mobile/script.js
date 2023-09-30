function updateTime() {
  const today = new Date();

  hour = today.getHours();
  minute = today.getMinutes();

  hour = addZero(hour);
  minute = addZero(minute);

  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = minute;
}

function addZero(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return number;
  }
}

updateTime();
setInterval(updateTime, 1000);