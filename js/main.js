$(function (){
	$(window).scroll(function () {
       $('.is-scrollBlock').each(function() {
		var scroll = $(window). scrollTop();
		var blockPosition = $(this).offset().top;
		var windowHeight = $(window).height();
		if (scroll > blockPosition - windowHeight + 350) {
			$(this).addClass("blockIn");
		}
	   })
	});
});