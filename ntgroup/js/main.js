$(document).ready(function () {
  $(".slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    arrow: true,
    appendArrows: ".slider__arrows",
    prevArrow:
      '<button class="slider-prev"><svg width="33" height="25" viewBox="0 0 33 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33 12.5H2M2 12.5L13.8529 1M2 12.5L13.8529 24" stroke="white" stroke-width="2"/></svg></button>',
    nextArrow:
      '<button class="slider-next"><svg width="33" height="25" viewBox="0 0 33 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33 12.5H2M2 12.5L13.8529 1M2 12.5L13.8529 24" stroke="white" stroke-width="2"/></svg></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  $(".mob-menu").click(function () {
    $(".header__bottom").fadeIn("400");
    $("body").css("height", "100vh");
    $("body").css("position", "fixed");
    $("body").css("oveflow-y", "hidden");
  });

  $(".header__close").click(function () {
    $(".header__bottom").fadeOut("400");
    $("body").css("height", "auto");
    $("body").css("position", "static");
    $("body").css("oveflow-y", "auto");
  });

  $(window).resize(function () {
    if ($(window).width() > 1170) {
      $(".header__bottom").show();
    }
  });

  $(".nav__call").each(function () {
    $(this).click(function () {
      $(".order").css("display", "flex");
      $("body").css("height", "100%");
      $("body").css("position", "relative");
      $("body").css("oveflow-y", "hidden");
      $("html").css("oveflow-y", "hidden");
      $("html").css("height", "100%");
    });
  });

  $(".order__close").click(function () {
    $(".order").css("display", "none");
    $("body").css("height", "auto");
    $("body").css("position", "static");
    $("body").css("oveflow-y", "auto");
    $("html").css("oveflow-y", "auto");
    $("html").css("height", "auto");
  });

  $(".clickit").click(function () {
    if (!$(".clickit").hasClass("transf")) {
      $(".clickit").addClass("transf");
    } else {
      $(".clickit").removeClass("transf");
    }
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop() + 600;
    var elem = $(".services").offset().top;

    if (scroll > elem) {
      $(".clickit").fadeIn("slow");
    }
  });

  $(window).resize(function () {
    if ($(this).width() < 1171) {
      $(".header__bottom").css("display", "none");
    }
  });

  $(".seo__link").click(function (e) {
    e.preventDefault();

    $(".seo__hidden").slideToggle();
  });
});
