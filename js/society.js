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
    if (scroll > con2-50) {
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
