const start=document.getElementById("start");

const bgm=document.getElementById("bgm");

gsap.from(".glass",{

opacity:0,

y:120,

duration:1.5

});

gsap.from(".sunflower",{

rotation:720,

duration:2

});

gsap.from("h1",{

opacity:0,

y:50,

delay:.5

});

gsap.from("p",{

opacity:0,

y:30,

delay:.8

});

gsap.from("button",{

opacity:0,

scale:.5,

delay:1

});

start.onclick=()=>{

bgm.play();

document.body.style.transition=".8s";

document.body.style.opacity="0";

setTimeout(()=>{

location.href="letter.html";

},800);

}
const slides = document.querySelectorAll("#ep3 .slide");
let index = 0;

function showSlide() {
  slides.forEach(s => s.classList.remove("active"));
  slides[index].classList.add("active");

  index++;
  if (index >= slides.length) index = 0;
}

setInterval(showSlide, 4000);

// ❤️ หัวใจลอย
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  const container = document.querySelector("#ep3 .hearts");

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight + "px";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";

  container.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

setInterval(createHeart, 300);