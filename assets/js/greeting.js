// Written with help from W3 Schools: https://www.w3schools.com/js/js_if_else.asp

const time = new Date().getHours();
let greeting;
if (time < 12) {
  greeting = "<p>Good morning!<i class='fa-regular fa-sun'></i></p>";
} else if (time < 17) {
  greeting = "<p>Good afternoon! <i class='fa-solid fa-sun'></i></p>";
} else {
  greeting = "Good evening! <i class='fa-regular fa-moon'></i>";
}
document.getElementById("greeting").innerHTML = greeting;