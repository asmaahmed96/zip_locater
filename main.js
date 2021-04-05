let request = new XMLHttpRequest()
request.open("GET", "https://api.zippopotam.us/us/90210")
request.send()
request.onload = () => {
    console.log(request)
    var body = XMLHttpRequest.response;


}
