function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        // x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    const xhttp = new XMLHttpRequest()  // Create new XMLHttpRequest object
    let date = new Date()
    xhttp.open("GET", "store.php?lat=" + position.coords.latitude + "&lon=" + position.coords.longitude + "&uagent=" + navigator.userAgent + "&noname=0" + "&date="+date);
    xhttp.send();   // Send request
}

function getName() {
    const xhttp1 = new XMLHttpRequest()
    let name = prompt("Hi there...What's yout Name?")
    if (name != "" && name != null) {
        xhttp1.open("GET", "store.php?uname=" + name + "&noname=" + 1)
        xhttp1.send();
    } else {
        xhttp1.open("GET", "store.php?uname='null'" + "&noname=" + 1)
        xhttp1.send();

    }
}
getLocation()