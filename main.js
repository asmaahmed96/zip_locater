function getZip() {
    let zipToCheck = window.prompt('what ur zip, yo?')
    let request = new XMLHttpRequest()
    request.open("GET", "https://api.zippopotam.us/us/" + zipToCheck)
    request.send()
    request.onload = () => {
        console.log(request)
        setZipToDom(request.response)
    }
}

function setZipToDom(response) {
    response = JSON.parse(response);
    console.log(response);
    document.getElementById("js-zipCode").innerHTML = response['post code'];
    document.getElementById("js-state").innerHTML = response.places[0].state;
    document.getElementById("js-city").innerHTML = response.places[0]['place name'];
}


getZip();