$(document).ready(function() {
  $('.header__burger, .nav').click(function(event) {
    $('.header__burger, .nav').toggleClass('active');
  });
});

$(document).ready(function(){
    
  // Прокрутка по навигации
$('h2').append('<a href="#header">top</a>');

  // = Вешаем событие прокрутки к нужному месту
  //	 на все ссылки якорь которых начинается на #
$('a[href^="#"]').bind('click.smoothscroll',function (e) {
  e.preventDefault();

  var target = this.hash,
  $target = $(target);

  $('html, body').stop().animate({
     'scrollTop': $target.offset().top
  }, 900, 'swing', function () {
     window.location.hash = target;
  });
});
  
 // кнопка прокрутки
 
});


$(window).scroll(function(e){
  if ($(this).scrollTop() > 1100) {
    $(".top").css("display", "block");
  } else {
    $(".top").css("display", "none");
  }
});



