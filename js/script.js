$(document).ready(function(){
	$('.menu__icon').click(function(event) {
		$('.menu__icon,.menu__body').toggleClass('active');
	    $('body').toggleClass('lock');
	});
});



function myMap() {
	var mapOptions = {
		 center: new google.maps.LatLng(40.742675071572634, -73.92615931731059),
		 zoom: 15,
		 mapTypeId: google.maps.MapTypeId.MAP
	}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}



function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	
	testWebP(function (support) {
	
	if (support == true) {
	document.querySelector('body').classList.add('webp');
	}else{
	document.querySelector('body').classList.add('no-webp');
	}
	});

