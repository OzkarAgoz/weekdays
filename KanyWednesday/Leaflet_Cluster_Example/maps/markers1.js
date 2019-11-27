// See post: http://asmaloney.com/2015/06/code/clustering-markers-on-leaflet-maps

// d3.csv("/restaurants.csv").then(function(data) {
//   console.log(data[0]);
// });

var map = L.map( 'map', {
  center: [29.0, -93.0],
  // minZoom: 2,
  zoom: 5
});

L.tileLayer("https://api.mapbox.com/styles/v1/ozkar/ck2z6q6h72eyd1cmtm084dkrh/tiles/256/{z}/{x}/{y}?" +
"access_token=pk.eyJ1Ijoib3prYXIiLCJhIjoiY2sydjVkYmFyMDB6MjNobzN5d3h0YWo0dyJ9.bmh0jz1RRr2djPQTiM0T1Q").addTo( map );

// L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
//  subdomains: ['a','b','c']
// }).addTo( map );

var myURL = jQuery( 'script[src$="leaf-demo.js"]' ).attr( 'src' ).replace( 'leaf-demo.js', '' );

var myIcon = L.icon({
  iconUrl: myURL + 'images/pin24.png',
  iconRetinaUrl: myURL + 'images/pin48.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14]
});

var markerClusters = L.markerClusterGroup();

for ( var i = 0; i < markers.length; ++i )
{
  var popup = markers[i].name +
              '<br/>' + markers[i].category +
              '<br/><b>rating:</b> ' + markers[i].rating + ' stars' +
              '<br/><b>addr:</b> ' + markers[i].address;           


  var m = L.circleMarker( [markers[i].lat, markers[i].lng],
		{fillOpacity: 1,
        color: chooseColor(markers[i].rating),
        fillColor: chooseColor(markers[i].rating),
		radius:markers[i].rating**2} ).bindPopup( popup );



  markerClusters.addLayer( m );
}

map.addLayer( markerClusters );

function chooseColor(rating) {
  return rating > 4 ? "red":
    rating > 3 ? "blue":
      rating > 2 ? "green":
        rating > 1 ? "green":
          rating > 0 ? "black":
            "greenyellow"; // <= 1 default
}
