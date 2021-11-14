function initMap() {
  const mapContainer = document.getElementById('map')
  const coordinates = { lat: 40.7127753, lng: -74.0059728 }
  const correctZoom = 12
  const map = new google.maps.Map(mapContainer, {
    center: coordinates,
    zoom: correctZoom,
  });
  const market = new google.maps.Marker({
    position: coordinates,
    map: map,
    icon: '../static/img/marker.png',
  });
}
window.initMap = initMap;
