mapboxgl.accessToken = 'pk.eyJ1IjoidGFhc2hpaSIsImEiOiJjbTc5YmVpZzcwM2Z1MnFzYngybTJ5YjduIn0.4n52er-8DZlJhfJgkbCn4w';
/**
 * Add the map to the page
 */
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/taashii/cm7jaycdy00on01r73fmic6w6',
  center: [-35.221901, 27.616228],
  zoom: 2.5,
  scrollZoom: true
});

// Get the user's location and zoom to it
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    const userLocation = [position.coords.longitude, position.coords.latitude];
    map.flyTo({
      center: userLocation,
      zoom: 12
    });

    // Add a marker for the user's location
    new mapboxgl.Marker({ color: 'red' })
      .setLngLat(userLocation)
      .addTo(map);
  });
} else {
  console.error('Geolocation is not supported by this browser.');
}