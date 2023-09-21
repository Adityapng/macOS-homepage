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

document.getElementById("liveapp").innerHTML = "Liveapp";

function chrome() {
  document.getElementById("liveapp").innerHTML = "Chrome";
}
function imessage() {
  document.getElementById("liveapp").innerHTML = "iMessage";
}
function vscode() {
  document.getElementById("liveapp").innerHTML = "Code";
}
function terminal() {
  document.getElementById("liveapp").innerHTML = "Terminal";
}
function safari() {
  document.getElementById("liveapp").innerHTML = "Safari";
}
function netflix() {
  document.getElementById("liveapp").innerHTML = "Netflix";
}
function photos() {
  document.getElementById("liveapp").innerHTML = "Photos";
}
function firefox() {
  document.getElementById("liveapp").innerHTML = "Mozilla Firefox";
}
function spotify() {
  document.getElementById("liveapp").innerHTML = "Spotify";
}
function maps() {
  document.getElementById("liveapp").innerHTML = "Maps";
}
