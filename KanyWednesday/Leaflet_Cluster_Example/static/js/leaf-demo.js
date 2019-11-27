var MEX = [];
var FAST_FOOD = [];
var PIZZA= [];
var SANDWICH = [];

// Loop through locations and create city and state markers
for (var i = 0; i < mexican.length; i++) {
  // Setting the marker radius for the state by passing population into the markerSize function
  MEX.push(
    L.circleMarker([mexican[i].lat,mexican[i].lng])
);
}

for (var i = 0; i < fastfood.length; i++) {
	
  FAST_FOOD.push(
    L.circleMarker([fastfood[i].lat,fastfood[i].lng])
);
}

for (var i = 0; i < pizza.length; i++) {
	
  PIZZA.push(
    L.circleMarker([pizza[i].lat,pizza[i].lng])
);
}


for (var i = 0; i < pizza.length; i++) {
	
  SANDWICH.push(
    L.circleMarker([pizza[i].lat,pizza[i].lng])
);
}


// Define variables for our base layers
var streetmap = L.tileLayer("https://api.mapbox.com/styles/v1/ozkar/ck2z6q6h72eyd1cmtm084dkrh/tiles/256/{z}/{x}/{y}?" +
"access_token=pk.eyJ1Ijoib3prYXIiLCJhIjoiY2sydjVkYmFyMDB6MjNobzN5d3h0YWo0dyJ9.bmh0jz1RRr2djPQTiM0T1Q");


// Create two separate layer groups: one for cities and one for states
var mex = L.layerGroup(MEX);
var fastfood = L.layerGroup(FAST_FOOD);
var pizza = L.layerGroup(PIZZA);
var sandwich = L.layerGroup(SANDWICH);

// Create a baseMaps object
var baseMaps = {
  "Street Map": streetmap
};

// Create an overlay object
var overlayMaps = {
  "MEXICAN": mex,
  "FASTFOOD": fastfood,
  "PIZZA": pizza,
  "SANDWICH": sandwich,
  
};

// Define a map object
var myMap = L.map("map", {
  center: [37.09, -95.71],
  zoom: 2,
  layers: [streetmap, mex, fastfood, pizza, sandwich]
});

// Pass our map layers into our layer control
// Add the layer control to the map
L.control.layers(baseMaps, overlayMaps, {
  collapsed: false
}).addTo(myMap);
