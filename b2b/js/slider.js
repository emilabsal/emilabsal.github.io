$(".slider").slick({
  dots: false,
  infinite: false,
  speed: 300,
  appendArrows: ".slider__arrows",
  prevArrow:
    '<button class="slider-prev"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="24.243" viewBox="0 0 23 24.243"><g transform="translate(1.5 2.121)"><path d="M7.5,18h20" transform="translate(-7.5 -8)" fill="none" stroke="#e84d23" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/><path d="M7.5,27.5l10-10-10-10" transform="translate(2.5 -7.5)" fill="none" stroke="#e84d23" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/></g></svg></button>',
  nextArrow:
    '<button class="slider-next"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="24.243" viewBox="0 0 23 24.243"><g transform="translate(1.5 2.121)"><path d="M7.5,18h20" transform="translate(-7.5 -8)" fill="none" stroke="#e84d23" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/><path d="M7.5,27.5l10-10-10-10" transform="translate(2.5 -7.5)" fill="none" stroke="#e84d23" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/></g></svg></button>',
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1281,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 501,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
