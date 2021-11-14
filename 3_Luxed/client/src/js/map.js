/* eslint-disable */

const infowindow = document.getElementsByClassName('infowindow');

const maps = [
  {
    el: 'map3',
    center: [53.54991453057005, 9.992826352556174], 
    markers: [
      [{lat: 53.55107098445692, lng: 9.984418475552841}, infowindow[0]],
      [{lat: 53.54675018271004, lng: 9.996503109059239}, infowindow[1]],
      [{lat: 53.55103886116458, lng: 10.009506931691401}, infowindow[2]],
    ],
  },
  {
    el: 'map2',
    center: [48.77925769348138, 9.19723651789767],
    markers: [
      [{lat: 48.77756149501466, lng: 9.192088511123096}, infowindow[0]], 
      [{lat: 48.78124805736547, lng: 9.201228849682034}, infowindow[1]],  
      [{lat: 48.78069422490568, lng: 9.196054577566771}, infowindow[2]], 
    ],
  },
  {
    el: 'map',
    center: [50.12657239207596, 8.673101223869292],
    markers: [
      [{lat: 50.12457239207596, lng: 8.673101223869292}, infowindow[0]],
    ],
  },
]

function initMap({ el, center, markers }) {
  const elem = document.getElementById(el);

  if (elem) {
    const map = new google.maps.Map(elem, {
      center: new google.maps.LatLng(...center),
      zoom: 16,
    });
    markers.forEach(([position, info]) => {
      const marker = new google.maps.Marker({
        position,
        map,
        icon: '../../static/img/maptarget.png',
        optimized: false,
      });
      const infoWindow = new google.maps.InfoWindow({
        content: info,
      });
      marker.addListener('click', () => {
        info.classList.remove('infowindow--is-active');
        info.classList.add('infowindow--is-active');
        infoWindow.close();
        infoWindow.open(marker.getMap(), marker);
      });
    });
  }
}

maps.forEach(initMap)

window.initMap = initMap
