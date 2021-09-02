$(document).ready(function () {
  //дополнительные карточки для блока Другие участники конкурса
  $(".another__btn").on("click", function () {
    for (var i = 3; i < $(".another-card").length; i++) {
      $(".another-card").eq(i).slideToggle("slow");
    }
  });

  //появление чекбокса
  $(".form__label").on("click", function () {
    $(".form__checkbox-icon").show();
  });
});
