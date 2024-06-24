const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
  const bodyMessage = `Full Name : ${fullName.value}<br> Email:${email.value}<br> Phone number:${phone.value}<br> Message:${mess.value}`;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "niteshgunu@gmail.com",
    Password: "FD8CC1EC715A07F49E5994CCCF5F1CC462A0",
    To: "niteshgunu@gmail.com",
    From: document.getElementById("email").value,
    Subject: subject.value,
    Body: bodyMessage,
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

//scramble
gsap.registerPlugin(ScrambleTextPlugin);

const sT = gsap.utils.toArray(".scramble");

sT.forEach((item) => {
  let tween = gsap.to(item, {
    duration: 0.5,
    scrambleText: { text: "-/#$%>", chars: "<&!§8(x" },
    paused: true,
  });
  item.addEventListener("mouseenter", () => {
    tween.play();
  });
  item.addEventListener("mouseleave", () => {
    tween.reverse();
  });
});
var fileUrl = "/Users/niteshgunupudi/Desktop/my portfolio/Nitesh Resume.pdf";
document
  .getElementById("downloadButton")
  .addEventListener("click", function () {
    var fileUrl =
      "/Users/niteshgunupudi/Desktop/my portfolio/Nitesh Resume.pdf";

    var a = document.createElement("a");
    a.href = fileUrl;
    a.download = "Nitesh Resume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
