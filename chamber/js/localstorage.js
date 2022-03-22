
const visits = document.querySelector("#visits"); 
const visitAmount = window.localStorage.getItem("visited"); 

const lastVisit = Date.parse(visitAmount);

const convertDay = 1000 * 60 * 60 * 24;

let days = Date.now() - lastVisit 
let dayAmount = days / convertDay;

window.localStorage.setItem('visited', new Date(Date.now()));

let visitDays = Math.floor(dayAmount); 

if (visitDays !== 0) {
    visits.textContent = visitDays + " day(s)";
} else {
    visits.textContent = `For the First time!`;
}
