var reqcount = 0;
var speedLimit = 40; // Speed limit in km/h

navigator.geolocation.watchPosition(successCallback, errorCallback, options);

function successCallback(position) {
    const { accuracy, latitude, longitude, altitude, heading, speed } = position.coords;

    reqcount++;
    details.innerHTML = "Acuuracy: " + accuracy + "<br>";
    details.innerHTML += "Latitude: " + latitude + "| Longitude: " + longitude + "<br>";
    details.innerHTML += "Altitude: " + altitude + "<br>";
    details.innerHTML += "Heading: " + heading + "<br>";
    details.innerHTML += "Speed: " + speed + " km/h<br>";
    details.innerHTML += "reqcount: " + reqcount;

    // Check if speed exceeds the limit
    if (speed > speedLimit) {
        speedDisplay.innerHTML = "Warning: Speed Exceeds Limit!";
        alert("Warning: Speed Exceeds Limit!");
    } else {
        speedDisplay.innerHTML = "Speed is within the limit.";
    }
}

function errorCallback(error) {
    console.log("Error occurred while getting location:", error);
}

var options = {
    enableHighAccuracy: false,
    timeout: 5000,
    maximumAge: 0
};
