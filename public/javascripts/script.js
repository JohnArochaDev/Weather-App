let map;
let marker;
let geocoder;
let responseDiv;
let response;
let data = [];
let lat;
let latt;
let long;
let longg;
let latlong;
let coords = document.getElementById("hidden")
let coords1 = document.getElementById("coords1")
let latitude
let longitude

async function initMap() {
    // Request libraries when needed, not in the script tag.
    const { Map } = await google.maps.importLibrary("maps");
    // Short namespaces can be used.
    map = new Map(document.getElementById("map"), {
        center: { lat: 27.833, lng: -97.061 },
        zoom: 8,
        mapTypeControl: false,
    });

    geocoder = new google.maps.Geocoder();

    const inputText = document.createElement("input");

    inputText.type = "text";
    inputText.placeholder = "Enter a location";

    const submitButton = document.createElement("input");

    submitButton.type = "button";
    submitButton.value = "Geocode";
    submitButton.classList.add("button", "button-primary");

    const clearButton = document.createElement("input");

    clearButton.type = "button";
    clearButton.value = "Clear";
    clearButton.classList.add("button", "button-secondary");
    response = document.createElement("pre");
    // console.log('response maybe', response)
    response.id = "response";
    response.innerText = "";
    responseDiv = document.createElement("div");
    responseDiv.id = "response-container";
    responseDiv.appendChild(response);
    //                                                                                               response IS the object   obj>location> lat: / lng:
    console.log('This is the response: \n', response);
    console.log('This is the responseDiv: \n', responseDiv);

    const instructionsElement = document.createElement("p");

    instructionsElement.id = "instructions";
    instructionsElement.innerHTML =
    "<strong>Instructions</strong>: Enter an address in the textbox to geocode or click on the map to reverse geocode.";
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(inputText);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(submitButton);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(clearButton);
    // map.controls[google.maps.ControlPosition.LEFT_TOP].push(instructionsElement);
    //                                                                                               This was the instructions, it was blocking the view^^^^^^
    // map.controls[google.maps.ControlPosition.LEFT_TOP].push(responseDiv);
    //                                                                                                  THIS WAS THE WINDOW THAT POPPS UP WITH THE OBJECT!!!!!^^^^^^
    marker = new google.maps.Marker({
    map,
    });
    map.addListener("click", (e) => {
    geocode({ location: e.latLng });
    });
    submitButton.addEventListener("click", () =>
    geocode({ address: inputText.value }),
    );
    clearButton.addEventListener("click", () => {
    clear();
    });
    clear();
    }

    function clear() {
    marker.setMap(null);
    responseDiv.style.display = "none";
    }

    function geocode(request) {
    clear();
    geocoder
    .geocode(request)
    
    
    .then((result) => {
    const { results } = result;
    
    map.setCenter(results[0].geometry.location);
    marker.setPosition(results[0].geometry.location);
    marker.setMap(map);
    responseDiv.style.display = "block";
    // THIS IS WHEREW THE DAMN DATA IS
    response.innerText = JSON.stringify(result, null, 2);
    
    // THis is my stuff
    console.log('This is the new result \n', result)
    console.log('This is the new response \n', JSON.parse(response.innerText))
    
    let newData = JSON.parse(response.innerText)
    console.log('This is the new newData \n', newData)
    lat = newData.results[0].geometry.location.lat;
    console.log('This is the new lat \n', lat)
    long = newData.results[0].geometry.location.lng;
    console.log('This is the new long \n', long)
    coords.innerHTML = `<a class="btn btn-primary" href="weather/daily/${lat},${long}">Lets Go!</a>`
    console.log(latlong)
    coords1.innerHTML = `<p><strong>${lat},${long}</strong></p>`
    // END OF MY STUFF
    
    
    return results;
    })
    .catch((e) => {
    alert("Geocode was not successful for the following reason: " + e);
    });
}

initMap();