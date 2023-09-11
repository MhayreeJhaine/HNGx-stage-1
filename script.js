const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function dayOfTheWeek() {
  const today = new Date();
  const dayIndex = today.getDay();
  const day = daysOfTheWeek[dayIndex];

  const element = document.getElementById("currentDayOfTheWeek");
  element.innerHTML = "Today's date: " + day;
}

function UTCTime() {
  const today = new Date();
  const getUTCTime = today.getTime();

  const element = document.getElementById("currentUTCTime");
  element.innerHTML = "UTC time: " + getUTCTime;
}

dayOfTheWeek();
UTCTime();
