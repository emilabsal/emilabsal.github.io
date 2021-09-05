//1 страница
const title = document.querySelector(".block h1");
const text = document.querySelector(".block p");
const button = document.querySelector(".block button");
const lineF = document.querySelector(".line-first");
const lineS = document.querySelector(".line-second");
const parts = document.querySelectorAll(".block-right .part");
const image = document.querySelector(".block-right .image");

setTimeout(() => {
  title.style.transform = "translateX(0)";
  title.style.opacity = "1";
}, 500);

setTimeout(() => {
  text.style.transform = "translateX(0)";
  text.style.opacity = "1";
}, 1000);

setTimeout(() => {
  button.style.transform = "translateX(0)";
  button.style.opacity = "1";
}, 1500);

parts.forEach((el) => {
  el.classList.add("active");
});

setTimeout(() => {
  image.style.background = "url(../img/dog.jpg) no-repeat center/contain";
}, 700);

//3 страница
const lights = document.querySelectorAll(".light");

for (let i = 1; i <= lights.length; i++) {
  setTimeout(function timer() {
    lights[i - 1].style.fill = "#95C132";
  }, i * 80);
}
