const today = new Date();
let dayToday;

dayToday = today.getDay();
let chamberMessage; 

if (dayToday >= 1 && dayToday <=2) {
    chamberMessage = "🤝 Come join us for the chamber meet and greet Wednesday at 7:00 p.m."
    document.querySelector('#monTue').innerHTML = chamberMessage;
}  else {
    document.getElementById("monTue").style.display = "none";
}

