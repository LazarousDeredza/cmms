// Map initialize

var map = L.map( 'map', {
    center: [-18.3873297, 30.5088342],
    minZoom: 2,
    zoom: 6.81
});

L.tileLayer( 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Zinwa &trade; by <a href="https://zinwa.co.zw/">Zinwa</a> 2024 | Map: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 30,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibmV2Y2hpdHMiLCJhIjoiY2s4bjZ0bTBkMGsybDNmb2NpbjFma29qbCJ9.WgcI6morIYWdD-nGNho7hQ'
}).addTo( map );
var controlLoader = L.control.loader().addTo(map);


//
// function applyCountryBorder(countryname) {
//     var addresssObj = null;
//
//     jQuery.ajax({
//         type: 'GET',
//         dataType: 'json',
//         url: 'https://nominatim.openstreetmap.org/search?country=' + countryname.trim() + '&polygon_geojson=1&format=json',
//         async: true,
//         cache: true,
//         success: function(responseData) {
//
//
//
//
//
//
//             console.log(responseData[0].geojson.coordinates[0]);
//             var polyline = L.polyline(responseData[0].geojson.coordinates[0], {
//                 color: 'green',
//                 weight: 14,
//                 opacity: 1
//             }).addTo(map);
//             map.invalidateSize();
//
//
//
//
//
//
//             var states = [{
//                 "type": "Feature",
//                 "properties": {"party": "Republican"},
//                 "geometry": {
//                     "type": "Polygon",
//                     "coordinates": [
//                         [
//                             25.2373,
//                             -17.9094116
//                         ],
//                         [
//                             25.8478471,
//                             -17.9305713
//                         ],
//                         [
//                             25.2373,
//                             -17.9094116
//                         ],
//                         [
//                             25.2373,
//                             -17.9094116
//                         ],
//                     ]
//                 }
//             }, {
//                 "type": "Feature",
//                 "properties": {"party": "Democrat"},
//                 "geometry": {
//                     "type": "Polygon",
//                     "coordinates": [[
//                         [-109.05, 41.00],
//                         [-102.06, 40.99],
//                         [-102.03, 36.99],
//                         [-109.04, 36.99],
//                         [-109.05, 41.00]
//                     ]]
//                 }
//             }];
//
//             L.geoJSON(states, {
//                 style: function(feature) {
//                     switch (feature.properties.party) {
//                         case 'Republican': return {color: "#ff0000"};
//                         case 'Democrat':   return {color: "#0000ff"};
//                     }
//                 }
//             }).addTo(map);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//         },
//         error: function(responseData) {
//             addresssObj = responseData;
//         }
//     });
// }
//
// applyCountryBorder('Zimbabwe');










