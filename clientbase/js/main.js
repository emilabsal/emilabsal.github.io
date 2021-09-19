$(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:
      '<button class="next-arrow"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6.86077 5.18627C7.41912 5.58509 7.41912 6.41491 6.86077 6.81373L1 11" stroke="#4A5568" stroke-linecap="round"/></svg></button>',
    prevArrow:
      '<button class="prev-arrow"><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L6.86077 5.18627C7.41912 5.58509 7.41912 6.41491 6.86077 6.81373L1 11" stroke="#4A5568" stroke-linecap="round"/></svg></button>',
    responsive: [
      {
        breakpoint: 576,
        settings: {
          arrows: false,
        },
      },
    ],
  });

  $(".header__menu").click(function () {
    $(".header__block").show();
  });

  $(".header__close").click(function () {
    $(".header__block").hide();
  });

  $(".footer__click").each(function () {
    $(this).click(function () {
      $(this).find(".footer__main").slideToggle();
    });
  });
});
