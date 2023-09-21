// var currentTime = new Date();
// var hours = currentTime.getHours();
// var ampm = currentTime.getHours();
// var minutes = currentTime.getMinutes();

// if (minutes < 10) {
//   minutes = "0" + minutes;
// }
// if (hours > 12) {
//   hours = hours - 12;
// }
// var t_str = hours + ":" + minutes + " ";
// if (ampm > 11) {
//   t_str += "PM";
// } else {
//   t_str += "AM";
// }

// document.getElementById("time").innerHTML = t_str;

setInterval(() => {
  let d = new Date();
  var t = undefined;
  var date = d.toDateString().slice(0, 10);
  var z = d.toLocaleTimeString().slice(0, 5);
  t = z.slice(0, 2) < 12 ? "0" + z + " " + "AM" : z + " " + "PM";
  document.getElementById("time").innerHTML = t;
  document.getElementById("date").innerHTML = date;
});
