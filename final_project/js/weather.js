const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=26.1223&lon=-80.1434&exclude={part}&units=imperial&appid=14bc144c3bedc0da79c9db0fd5a322e4";

// fix url above [26.1223, -80.1434]

fetch (apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        let weatherIcon = document.querySelector('.weatherIcon');
        let currentTemp = document.querySelector('.weather');
        let condDescription = document.querySelector('.description')
        let humidity = document.querySelector('.humidity')
        let currentAlert = document.querySelector('.alert')

        

        currentTemp.textContent = `Current Temperature: ${jsObject.current.temp.toFixed(0)}F`;
        console.log(jsObject)

        let desc = jsObject.current.weather[0].description;
        desc = desc.split(' ').map(capitalize).join(' ');
        condDescription.textContent = `Current Condition: ${desc}`;

        let imgsrc = `https://openweathermap.org/img/wn/${jsObject.current.weather[0].icon}@4x.png`;
        weatherIcon.setAttribute('src', imgsrc);
        weatherIcon.setAttribute('alt', desc)

        let humidLevel = jsObject.current.humidity;

        humidity.textContent = `Humidity Level: ${humidLevel}`;

        if (jsObject.daily[0].alerts) {
        currentAlert.textContent = `Current Alerts: ${jsObject.daily[0].alerts[0].description}`;
        } else {
            currentAlert.textContent = `Current Alerts: No weather alerts today`;
        };

        //3 day forecast:
        let day1 = document.querySelector('.forecast1');
        let day2 = document.querySelector('.forecast2');
        let day3 = document.querySelector('.forecast3');

        day1.textContent = `Day 1: ${jsObject.daily[1].temp.day}`;
        day2.textContent = `Day 2: ${jsObject.daily[2].temp.day}`;
        day3.textContent = `Day 3: ${jsObject.daily[3].temp.day}`;

    });

function capitalize(word) {
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
}

// Weather Alert. needs to be closeable
function toggleMenu () {
    document.querySelector(".alert").classList.toggle("open");
    document.querySelector("#alertBtn").classList.toggle("open");
}
const closebtn= document.querySelector('#alertBtn');
console.log(closebtn);
closebtn.addEventListener("click", function (){
    closebtn.classList.add("hidden");
    document.querySelector(".alert").classList.add("hidden");
    document.querySelector(".alertbanner").classList.add("hidden");
})




//Three day forecast of the day temperature using current date. 