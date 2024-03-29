$(function () {

  /* header : 스크롤 내리면 헤더 사라지고 스크롤 올리면 헤더 나오는 효과 */
  var prevScrollTop = 0;

  let i = 0;

  $(window).scroll(function () {
    var nowScrollTop = $(window).scrollTop();

    let scroll = $(window).scrollTop();
    if (scroll == 0) {
      $("header").stop().slideDown();
    }

    //header, 하나의 동작이 끝나면 시간차를 두고 바뀌도록 함
    if (i == 0) {
      if (nowScrollTop > prevScrollTop) {
        $("header").stop().slideUp(500);
        i = 1;
        setTimeout(function () {
          i = 0;
        }, 500);
      } else {
        $("header").stop().slideDown(500);
        i = 1;
        setTimeout(function () {
          i = 0;
        }, 500);
      }
    }

    prevScrollTop = nowScrollTop;

  });

  
  /* 모바일 헤더 햄버거바 변화, 메뉴화면 나오기 */
  $(".ham-wrap").click(function () {
    $(this).toggleClass("on");
    $(".mobile-menu-wrap").toggleClass("on");
  });
});
