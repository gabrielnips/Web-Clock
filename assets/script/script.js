const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})




function updateTime() {
  var now = new Date();
  var hours = now.getHours();
  var minutes = now.getMinutes();
  var seconds = now.getSeconds();
  var dayOfWeek = now.getDay();
  var dayOfMonth = now.getDate();
  var month = now.getMonth();

  // Format the time
  var timeString = ("0" + hours).slice(-2) + ":" + ("0" + minutes).slice(-2);

  // Map day of week to the corresponding name
  var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var dayString = daysOfWeek[dayOfWeek];

  // Map month to the corresponding name
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var monthString = months[month];

  // Update the digital clock
  document.getElementById("time").textContent = timeString;
  document.getElementById("day").textContent = dayString + ", " + monthString + " " + dayOfMonth;
  // Update the day of the month

  // Update the analog clock
  var hourDegrees = (hours % 12) * 30 + (minutes / 60) * 30;
  var minuteDegrees = (minutes / 60) * 360;
  var secondDegrees = (seconds / 60) * 360;
  document.querySelector(".hour").style.transform = `translate(-50%, -100%) rotate(${hourDegrees}deg)`;
  document.querySelector(".minute").style.transform = `translate(-50%, -100%) rotate(${minuteDegrees}deg)`;
  document.querySelector(".second").style.transform = `translate(-50%, -100%) rotate(${secondDegrees}deg)`;
}

// Call updateTime function every second
setInterval(updateTime, 1000);




