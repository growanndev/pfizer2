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

  /* con3 누르면 들어가는 글자 */

  $(".con3 .tag-list li").click(function () {
    let i = $(this).index();
    let list = [
      "호르몬제",
      "항암제",
      "백신",
      "항생제/진균제",
      "순환기질환 치료제",
      "기타",
    ];
    $(".con3-left form input").val(list[i]);
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



  /* 반응형 태블릿 con4 값 바뀜  */

  $(window)
    .resize(function () {
      if (window.innerWidth < 1220) {
        /* con4 버튼 누르면 넘어가는  */
        let x = 0;
        $(".right-arrow").click(function () {
          if (x <= 1) {
            x++;
            $(".con4-list")
              .stop()
              .animate({ marginLeft: -x * 55 + "%" });
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
              .animate({ marginLeft: -x * 55 + "%" });
            $(".bar")
              .stop()
              .animate({
                marginLeft: x * 30 + "%",
              });
          }
        });
      }
    })
    .resize();



  /* 스크롤 제어 */
  $(function () {
    $(window).scroll(function () {
      let scroll = $(window).scrollTop();
      let baseline = -350;
      let con1 = $(".con1").offset().top + baseline;
      let con2 = $(".con2").offset().top + baseline;
      let con3 = $(".con3").offset().top + baseline;
      let con4 = $(".con4").offset().top + baseline;
      let con5 = $(".con5").offset().top + baseline;

      if (scroll > con1) {
        $(".con1").addClass("on");
      }
      if (scroll > con2) {
        $(".con2").addClass("on");
      }
      if (scroll > con3) {
        $(".con3").addClass("on");
      }
      if (scroll > con4) {
        $(".con4").addClass("on");
      }
      if (scroll > con5) {
        $(".con5").addClass("on");
      }
    });
  });
});
