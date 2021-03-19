const tabs = document.querySelectorAll(".photo__tab");
const content = document.querySelectorAll(".photo__content");

for (let i = 0; i < tabs.length; i++) {
  content[0].style.display = "flex";

  tabs[i].addEventListener("click", () => {
    for (let j = 0; j < tabs.length; j++) {
      content[j].style.display = "none";
      tabs[j].classList.remove("active-tab");
    }

    tabs[i].classList.add("active-tab");
    content[i].style.display = "flex";
  });
}


 $(document).ready(function () {
            $('.slide-one').owlCarousel({
                items: 1,
                loop: true,
                center: true,
                nav: true,
                dots: false,
                margin: 10,
                autoplay: false,
                autoplaySpeed: 2000,
                autoplayHoverPause: true,
            });

            $('.slide-two').owlCarousel({
                items: 4,
                loop: true,
                dots: false,
                margin: 10,
                autoplay: false,
                autoplaySpeed: 2000,
                autoplayHoverPause: true,
                autoHeight: false,
                responsive: {
                    0: {
                        items: 1
                    },
                    568: {
                        items: 2
                    },
                    768: {
                        items: 3

                    },
                    992: {
                        items: 4
                    }
                },
            });

        });

        new WOW().init();
