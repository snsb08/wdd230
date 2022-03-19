
// const visits = document.querySelector(".visits");

// let visitAmount = Number(window.localStorage.getItem("visited"));

// // ------Times visited--------
// // if (visitAmount !==0) {
// //     visits.textContent = visitAmount + " times";
// // } else {
// //     visits.textContent = `For the First time!`;
// // }

// // //increment the number of visits:

// // visitAmount++;
// // localStorage.setItem("visits-ls", visitAmount);


// //-----DAYS visited:--------------

// // const visits = window.localStorage.getItem("visits");

// const convertDay = 1000 * 60 * 60 * 24;

// let days = Date.now() - visitAmount //this is in milliseconds 
// let dayAmount = days / convertDay;

// // window.localStorage.setItem('visited', new Date(Date.now()));//not need window 

// let visitDays = Math.floor(dayAmount); // for whole number
// // document.getElementById('visits').textContent = dayAmount;

// if (visitDays !==0) {
//     visits.textContent = visitDays + " day(s)";
// } else {
//     visits.textContent = `For the First time!`;
// }

// // visitDays++;
// localStorage.setItem("visited", visitDays);
// // localStorage.setItem("visited", Date.now()); //this or the one above it?


//try again:---------------------------------------------



const visits = document.querySelector("#visits"); // location to display on page
const visitAmount = window.localStorage.getItem("visited"); //took off Number and no change

const lastVisit = Date.parse(visitAmount);

// const convertDay = 1000 * 60 * 60 * 24;
const convertDay = 1000 * 60 * 60;

let days = Date.now() - lastVisit //this is in milliseconds 
let dayAmount = days / convertDay;

window.localStorage.setItem('visited', new Date(Date.now()));//was I missing this only? i had it commented, why?

let visitDays = Math.floor(dayAmount); // for whole number
// document.getElementById('visits').textContent = dayAmount;

if (visitDays !== 0) {
    visits.textContent = visitDays + " day(s)";
} else {
    visits.textContent = `For the First time!`;
}


// visitDays++;
// localStorage.setItem("visited", visitDays);
// localStorage.setItem("visited", Date.now()); //this or the one above it?

