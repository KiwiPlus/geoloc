	function showlocation() {
		var options = {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0
	};
	function success(pos) {
		var crd = pos.coords;

		console.log('your current position is:');
		console.log('Latitude: ' + crd.latitude);
		console.log('longitude ' + crd.longitude);
		console.log('more or less ' + crd.accuracy + 'metters.');
	};
	function error(err) {
	console.warn ('ERROR(' +err.code + '): ' + err.message);
	};
	
	navigator.geolocation.getCurrentPosition(success, error, options);
};