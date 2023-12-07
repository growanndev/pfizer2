$(function () {
  /* 상품에 마우스 올렸을 때 효과 */
  // $(".con1-slide li").mouseenter(function () {
  //   $(".con1-slide").css("animation-play-state", "paused");

  //   $(this).find(".text").css({ display: "none" });
  //   $(this).find(".text-on").css({ display: "flex" });
  // });

  // $(".con1-slide li").mouseleave(function () {
  //   $(".con1-slide").css("animation-play-state", "running");

  //   $(this).find(".text").css({ display: "block" });
  //   $(this).find(".text-on").css({ display: "none" });
  // });

  $(window)
    .resize(function () {

      /* 모바일일때 product 멈추지 않기  */
      if ($(window).width() <= 767) {
        $(".con1-slide li").mouseenter(function () {
          $(this).find(".text").css({ display: "none" });
          $(this).find(".text-on").css({ display: "flex" });
        });

        $(".con1-slide li").mouseleave(function () {
          $(this).find(".text").css({ display: "block" });
          $(this).find(".text-on").css({ display: "none" });
        });
      } else {
        /* pc, 태블릿일때 product */
        $(".con1-slide li").mouseenter(function () {
          $(".con1-slide").css("animation-play-state", "paused");

          $(this).find(".text").css({ display: "none" });
          $(this).find(".text-on").css({ display: "flex" });
        });

        $(".con1-slide li").mouseleave(function () {
          $(".con1-slide").css("animation-play-state", "running");

          $(this).find(".text").css({ display: "block" });
          $(this).find(".text-on").css({ display: "none" });
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

      if (scroll > con1) {
        $(".con1").addClass("on");
      }
      if (scroll > con2) {
        $(".con2").addClass("on");
      }
    });
  });
});
