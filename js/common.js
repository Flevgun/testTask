$(function() {

	new WOW().init();

	$(".hamburger").click(function(){
		$(this).toggleClass("is-active");

		if($(this).hasClass('is-active')){
			$('.mnu_top').slideDown(300);
		}else{
			$('.mnu_top').slideUp(300);
		}
	});

});


ymaps.ready(function () { 
 
    var myMap = new ymaps.Map("YMapsID", {
        center: [55.76, 37.64],
        zoom: 11,
    });
 
    // создание маркера
    var myPlacemark = new ymaps.Placemark([55.76, 37.64], {
       content: 'название маркера',
       balloonContent: 'html-контент',
    });

    // добавление маркера на карту
    myMap.geoObjects.add(myPlacemark);
    
});