(function () {

	WPLeafletMapPlugin.add( initAdminShortcodes );

	function initAdminShortcodes () {
		var map_input = document.getElementById('map-shortcode'),
			marker_input = document.getElementById('marker-shortcode'),
			map_1 = WPLeafletMapPlugin.maps[0],
			marker_1 = WPLeafletMapPlugin.markers[0];
		
		function update_marker () {
			var latlng = marker_1.getLatLng();
			marker_input.value = '[leaflet-marker lat=' +
				latlng.lat +
				' lng=' + 
				latlng.lng + 
				']';
		}

		function update_map () {
			var latlng = map_1.getCenter();
			map_input.value = '[leaflet-map lat=' +
				latlng.lat +
				' lng=' + 
				latlng.lng + 
				' zoom=' +
				map_1.getZoom() +
				']';
		}

		marker_1.on('drag', update_marker);
		map_1.on('move', update_map);

		update_map();
		update_marker();

		map_input.addEventListener('click', function () {
			this.select();
		});

		marker_input.addEventListener('click', function () {
			this.select();
		});
	};
})();