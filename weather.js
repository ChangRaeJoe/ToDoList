const API_KEY = null;  //your API Key (openWeather api .etc)
const COORDS = 'coords';
const weather = document.querySelector('.js-weather');

function isApiKey(){
    return (API_KEY===null ? false: true);
}

function getWeather(lat, log){
    if(!isApiKey()){
        console.log("API KEY doesn't exist");
        return;
    }
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`
        ).then(function(response){
            return response.json();
        }).then(function(json){
            const temp = json.main.temp;
            const place = json.name;
            weather.innerText = `${temp}도 @ ${place}`;
        });
    
}

function saveCoords(coord){
    const parsed = JSON.stringify(coord);
    localStorage.setItem(COORDS,parsed);
}

function handleGeoSuccess(pos){
    const latitude = pos.coords.latitude;
    const longitude = pos.coords.longitude;
    const coord = {
        latitude,
        longitude
    };

    //current position
    saveCoords(coord);
    //load
    getWeather(latitude, longitude);
}

function handleGeoError(){
    console.log("not access current geo position");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else{
        const parsed = JSON.parse(loadedCoords);
        getWeather(parsed.latitude, parsed.longitude);
    }
}

function init(){
    console.log("hello weather");
    loadCoords();
}

init();
