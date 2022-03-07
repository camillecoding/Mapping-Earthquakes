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
let cities = [{
    location: [40.7128, -74.0059],
    city: "New York City",
    state: "NY", 
    population: 8398748
},
{
    location: [41.8781, -87.6298],
    city: "Chicago",
    state: "IL",
    population: 2705994
},
{
    location: [29.7604, -95.3698],
    city: "Houston", 
    state: "TX",
    population: 2325502
},
{
    location: [34.0522, -118.2437],
    city: "Los Angeles",
    state: "CA",
    population: 3990456
},
{
    location: [33.4484, -112.0740],
    city: "Phoenix",
    state: "AZ",
    population: 1660272
}
];

//loop through the cities array and drop a marker on each city
cities.forEach(function(city) {
    console.log(city)
});
