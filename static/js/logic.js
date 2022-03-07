//add console.log to confirm whether code works
console.log("working");

//create the map object with a cener and zoom level
let map =L.map('mapid').setView([40.7, -94.5], 14);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets/dark-v10',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

//add marker on the map for Los Angeles, CA
L.circle([34.0522, -118.2437], {
    radius: 100,
    color: 'black',
    fillColor: '#fffa1'
}).addTo(map);
