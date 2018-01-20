$(document).ready(function($) {
	$(".mobile-menu").on("click", function(event) {
		$(".navigation").toggleClass('active');
		$(".mobile-menu").toggleClass('fix');
		$(".block-user-items").toggleClass('active');
		$(".mobile-menu__item").toggleClass('fix');
	});

	$(".navigation").on("click",function() {
		$(this).removeClass('active');
		$(".mobile-menu").removeClass('fix');
		$(".block-user-items").removeClass('active');
		$(".mobile-menu__item").removeClass('fix');
	});


	  $(".slowly").on("click",function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 700);
});

});

