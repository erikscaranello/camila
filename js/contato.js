$(document).ready(function() {	
	google.maps.event.addDomListener(window, 'load', initialize);
});



function initialize() {
	var mapOptions = {
    	center: new google.maps.LatLng(-23.610829, -46.642735),
        zoom: 8
    };
    var map = new google.maps.Map(document.getElementById("mapa"), mapOptions);
}
