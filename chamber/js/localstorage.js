
const visits = document.querySelector("#visits"); 
const visitAmount = window.localStorage.getItem("visited"); 

const lastVisit = Date.parse(visitAmount);

const convertDay = 1000 * 60 * 60 * 24;

let days = Date.now() - lastVisit 
let dayAmount = days / convertDay;
console.log(dayAmount)

window.localStorage.setItem('visited', new Date(Date.now()));

// let visitDays = Math.floor(dayAmount); 

if (dayAmount <= 1) {
    visits.textContent = "It's been no more than a day";
} else if (dayAmount > 1) {
    visits.textContent = `It's been ${dayAmount} days`
}
else {
    visits.textContent = `For the First time!`;
}
