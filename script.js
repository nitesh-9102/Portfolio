const form = document.querySelector("form");
function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "niteshgunu@gmail.com",
    Password: "E51D3BE5622DC67E1CD6DDA5EC03BC129C85",
    To: "niteshgunu@gmail.com",
    From: "niteshgunu@gmail.com",
    Subject: "This is the subject",
    Body: "And this is the body",
  }).then((message) => alert(message));
}
form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});
//tracker
const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = ["#ffff"];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.1;
    y += (nextCircle.y - y) * 0.1;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
