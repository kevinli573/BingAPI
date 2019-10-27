//<script type='text/javascript' src='http://www.bing.com/api/maps/mapcontrol?callback=GetMap&key=VRi8s7qGDWwKjdIZNxbY~PrQ224TqdqR2EEJ-YDMs_w~ArHscXJnPvbphph6BML7ovB2FqZ85feneUaQkwfXnpEY-2lQ_cVYBcNX_sDo7TML' async defer>
var deviceLat;
var deviceLong;
var url;
//var map = new Microsoft.Maps.Map('#myMap');
// Try HTML5 geolocation.
window.onload = getLocation();
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert('Geolocation is not supported in your browser');
    }
}

function showPosition(position) {
    deviceLat = position.coords.latitude;
    deviceLong = position.coords.longitude;
    url = "https://dev.virtualearth.net/REST/v1/LocalSearch/?query=pharmacy&userCircularMapView=" + deviceLat + "," + deviceLong + ",5000&key=VRi8s7qGDWwKjdIZNxbY~PrQ224TqdqR2EEJ-YDMs_w~ArHscXJnPvbphph6BML7ovB2FqZ85feneUaQkwfXnpEY-2lQ_cVYBcNX_sDo7TML";
}

function httpGet() {
  var request = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() { 
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
    {
      callback(xmlHttp.responseText);
    }
  }
  request.open("GET", url, true);
  request.send(null);

  request.onload = function() {
    var input = request.response;
    document.write(input);
  }

}
