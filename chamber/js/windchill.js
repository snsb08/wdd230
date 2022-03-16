
//from Weather API:

const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4166253&units=imperial&appid=14bc144c3bedc0da79c9db0fd5a322e4";
let windchill = ""

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        let currentTemp = document.querySelector('#weather');
        const weathericon = document.querySelector('#weathericon');
        const caption = document.querySelector('.figcaption');
        const windSpeed = document.querySelector('#windSpeed');

        currentTemp.textContent = jsObject.main.temp.toFixed(0);
        let imgsrc = `https://openweathermap.org/img/wn/${jsObject.weather[0].icon}@4x.png`; 
        let desc = jsObject.weather[0].description; 
        desc = desc.split(' ').map(capitalize).join(' ');
        windSpeed.textContent = parseFloat(jsObject.wind.speed.toFixed(1));

        currentTemp.textContent = parseFloat(jsObject.main.temp.toFixed(0)); 
        weathericon.setAttribute('src', imgsrc);
        weathericon.setAttribute('alt', desc);
        caption.textContent = desc;
        

        windchill = windChill (currentTemp, windSpeed);
        console.log(windchill);
        windchill = `${windchill}&#176;F`;
        

        if (currentTemp <= 50 && windSpeed > 3) {
            windchill = windChill(currentTemp, windSpeed);
            windchill = `${windchill}&#176;F`;
        
        } else {
            windchill = "N/A";
        };
        
        document.querySelector("#windChill").innerHTML = windchill;

        function windChill(currentTemp, windSpeed) {
            formula = Math.round (35.74 + 0.6215 * currentTemp - 35.75 * (Math.pow(windSpeed, 0.16)) + 0.4275 * currentTemp * (Math.pow(windSpeed, 0.16)));
            return formula 
        };
        

    });

function capitalize(word) {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`; 

}

