$(function () {
  /* visual 페이드인페이드아웃 */

  let i = 0;

  function slide() {
    i++;
    if (i == 3) {
      $(".slide-wrap li").stop().fadeOut();
      $(".slide-wrap li").eq(0).stop().fadeIn();
      $(".state-wrap li").removeClass("on");
      $(".state-wrap li").eq(0).addClass("on");
      i = 0;
    } else {
      $(".slide-wrap li").stop().fadeOut();
      $(".slide-wrap li").eq(i).stop().fadeIn();
      $(".state-wrap li").removeClass("on");
      $(".state-wrap li").eq(i).addClass("on");
    }
  }

  setInterval(slide, 4000);

  /* con2 마우스 올리면 사진 바뀜 */
  $(".con2-right li").mouseenter(function () {
    let i = $(this).index();
    $(".con2-left img").stop().fadeOut();
    $(".con2-left img").eq(i).stop().fadeIn();
  });

  /* con4 버튼 누르면 넘어가는  */
  let x = 0;
  $(".right-arrow").click(function () {
    if (x <= 1) {
      x++;
      $(".con4-list")
        .stop()
        .animate({ marginLeft: -x * 25 + "%" });
      $(".bar")
        .stop()
        .animate({
          marginLeft: x * 30 + "%",
        });
    }
  });
  $(".left-arrow").click(function () {
    if (x >= 1) {
      x--;
      $(".con4-list")
        .stop()
        .animate({ marginLeft: -x * 25 + "%" });
      $(".bar")
        .stop()
        .animate({
          marginLeft: x * 30 + "%",
        });
    }
  });
});
