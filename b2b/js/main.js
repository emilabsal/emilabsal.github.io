//Анимация меню
const menu = document.querySelector(".menu-mobile"),
  lines = document.querySelectorAll(".menu-mobile__line"),
  lines1 = document.querySelector(".menu-mobile__lines"),
  line1 = document.querySelector(".menu-mobile__line:first-child"),
  line2 = document.querySelector(".menu-mobile__line:nth-child(2)"),
  line3 = document.querySelector(".menu-mobile__line:last-child"),
  menuText = document.querySelector(".menu-mobile__text");

//Эффект наведения
menu.onmouseover = function () {
  lines.forEach((elem) => {
    elem.classList.add("margin");
  });

};

//Убрать мышь с меню
menu.onmouseout = function () {
  lines.forEach((elem) => {
    elem.classList.remove("margin");
  });
};

//Изменить состояние меню
menu.onclick = function () {
  lines1.style.height = "26px";
  line2.classList.add('top')
  setTimeout(() => {
    line3.classList.add('top')
  }, 200);

  setTimeout(() => {
    if (!line1.classList.contains("transform-up")) {
      line1.classList.add("transform-up");
      line2.style.display = "none";
      line3.classList.add("transform-down");
      menuText.style.marginTop = "0";
    } else {
      lines1.style.height = "auto";
      line1.classList.remove("transform-up");
      line2.style.display = "block";
      line3.classList.remove("transform-down");
      menuText.style.marginTop = "13px";
      

      line2.classList.remove('top')
      line3.classList.remove('top')

    }
  }, 300);

 
};

// Искажение карточки в слайдере
const prev = document.querySelector(".slider-prev"),
  next = document.querySelector(".slider-next"),
  card = document.querySelectorAll(".slider-card");

//При клике влево
prev.addEventListener("click", left);

function left() {
  card.forEach((elem) => {
    elem.style.transform = "skewX(3deg)";
  });

  setTimeout(() => {
    card.forEach((elem) => {
      elem.style.transform = "skewX(0deg)";
    });
  }, 150);
}

//При клике вправо
next.addEventListener("click", right);

function right() {
  card.forEach((elem) => {
    elem.style.transform = "skewX(-3deg)";
  });

  setTimeout(() => {
    card.forEach((elem) => {
      elem.style.transform = "skewX(0deg)";
    });
  }, 200);
}

// Параллакс первого экрана
const banner = document.querySelector(".banner");

banner.addEventListener("mousemove", function () {});

// Эффект для блока с цифрами при наведении
const numbers = document.querySelector(".numbers");
const line = document.querySelectorAll(".numbers-line");
const numbersCard = document.querySelectorAll(".numbers-card");
const numbersCircle = document.querySelectorAll(".numbers-card__circle");



if(window.outerWidth > 500) {

numbers.addEventListener("mouseover", function () {
  line.forEach((elem) => {
    elem.style.animation = "line .5s forwards";
  });
});

numbers.addEventListener("mouseout", function () {
  line.forEach((elem) => {
    elem.style.animation = "lineback .5s forwards";
  });
});

numbers.addEventListener("mouseover", function () {
  line.forEach((elem) => {
    elem.style.animation = "line .5s forwards";
  });
});

numbers.addEventListener("mouseover", function () {
  numbersCircle.forEach((elem) => {
    elem.style.animation = "circle .8s forwards";
  });
});

numbers.addEventListener("mouseout", function () {
  numbersCircle.forEach((elem) => {
    elem.style.animation = "circleback .5s forwards";
  });
});

}