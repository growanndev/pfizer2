$(function () {
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    let baseline = -350;
    let con1 = $(".con1").offset().top + baseline;
    let con2 = $(".con2").offset().top + baseline;
    let con3 = $(".con3").offset().top + baseline;
    let con4 = $(".con4").offset().top + baseline;

    let pic = $(".con1-right h3").offset().top - 180;

    if (scroll > con1) {
      $(".con1").addClass("on");
    }


    /* pc,태블릿 / 모바일일 경우 con1 효과 나눠서  */

    $(window).resize(function() {
      if($(window).width() < 768) {
        if (scroll > pic) {
          $('.con1-right p:nth-of-type(2)').addClass('on');
        } 
      } else {
        if (scroll > pic) {
          $(".pic1").css({ display: "none" });
          $(".pic2").css({ display: "block" });
          $('.con1-right p:nth-of-type(2)').addClass('on');
        } else {
          $(".pic1").css({ display: "block" });
          $(".pic2").css({ display: "none" });
        }
      }
    })
    .resize();
    

    // if (scroll > pic) {
    //   $(".pic1").css({ display: "none" });
    //   $(".pic2").css({ display: "block" });
    //   $('.con1-right p:nth-of-type(2)').addClass('on');
    // } else {
    //   $(".pic1").css({ display: "block" });
    //   $(".pic2").css({ display: "none" });
    // }

    if (scroll > con2) {
      $(".con2").addClass("on");
    }
    if (scroll > con3) {
      $(".con3").addClass("on");
    }
    if (scroll > con4) {
      $(".con4").addClass("on");
    }
  });
});
