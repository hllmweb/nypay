$("#slide ul").bxSlider({
	mode: 'horizontal',
    auto: true,
	nextText: '<i class="fas fa-chevron-right"></i>',
	prevText: '<i class="fas fa-chevron-left"></i>'
});

$(".open-menu").click(function(){
	$(this).toggleClass("open-menu-activo");
    $(".menu").toggleClass("menu-active");
    $(".home").toggleClass("mascara");
});


$("a.ref-id").click(function(e){
    e.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top-150
    }, 500);
});


$(window).scroll(function() {
    if($(this).scrollTop() > 100){
		if(!$(".home").hasClass("mascara")){
			$(".open-menu").addClass("open-menu-activo");
		}
    }else{	
		$(".open-menu").removeClass("open-menu-activo");
    }
});

$(".info .row-20 .row-list-item").click(function(){
	var that = this;
	$(that).parent().parent().parent().find(".row-80 .row-list").toggleClass("list-activa");
});