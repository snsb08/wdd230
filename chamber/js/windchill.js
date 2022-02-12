let  weather = parseFloat(document.querySelector("#weather").textContent);
let windSpeed = parseFloat(document.querySelector("#windSpeed").textContent);
let windchill = "";
// let windChill = 35.74 + 0.6215 * weather - 35.75(Math.pow(windSpeed, 0.16)) + 0.4275 * weather (Math.pow(windSpeed, 0.16));


if (weather <= 50 && windSpeed > 3) {
    windchill = windChill (weather, windSpeed);
    windchill = `${windchill}&#176;F`;

} else {
    windchill = "N/A";
}

//output 
document.querySelector ("#windChill").innerHTML = windchill;

function windChill (temp, speed) {
    formula = Math.round (35.74 + 0.6215 * weather - 35.75 * (Math.pow(windSpeed, 0.16)) + 0.4275 * weather * (Math.pow(windSpeed, 0.16)));
    return formula //"Success"; //change this 
}

//&#8457;

